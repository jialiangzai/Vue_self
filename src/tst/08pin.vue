<template>
  <div id="app">
    <div class="container">
      <!-- 顶部搜索框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price >= 100 }">{{ item.price }}</td>
            <td>{{ item.time | fd }}</td>
            <td><a @click.prevent="del(index)" href="#">删除</a></td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ svgPrice }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr v-show="list.length === 0">
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              v-model.trim="name"
              type="text"
              class="form-control"
              placeholder="资产名称"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              v-model.number.trim="price"
              type="text"
              class="form-control"
              placeholder="价格"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button @click.prevent="add" class="btn btn-primary">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"; // 局部样式 默认找文件夹下的index文件(但是这个不是所以需要写路径) 引用了框架 从node_module引入不需要带node_module
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: null , // 价格
      // list: [
      //   { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
      //   { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
      //   { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
      //   { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      // ],
      list:JSON.parse(localStorage.getItem('data'))
    };
  },
  methods: {
    del(n) {
      this.list.splice(n, 1);
    },
    add() {
      //   非空校验
      if (!this.name.length || !this.price || this.price < 0) {
        return alert("输入的不合法！");
      }
      this.list.push({
        id: Date.now() ,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name=''
      this.price=''
    },
     
  },
  filters: {
    fd(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  computed: {
    allPrice() {
      return Math.floor(this.list.reduce((ite, ind) => (ite += ind.price), 0));
    },
    svgPrice() {
      return Math.floor(this.allPrice / this.list.length);
    },
  },
  watch: {
    list:{
      deep:true,
      immediate:true,
      handler(valArr){
        localStorage.setItem('data',JSON.stringify(valArr))
      }
    }
  }
};
</script>

<style >
.red {
  color: red;
}
</style>