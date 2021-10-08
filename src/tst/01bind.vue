<template>
  <div>
    <a :href="url">百度</a>
    <h4>{{ msg }}</h4>
    <p @dblclick="debl">点我，双击</p>
    <p v-on:click="deb">单击</p>
    <p>今天排位连胜{{ num }}</p>
    <button @click="vectory">胜利</button>
    <button @click="defeat">失败</button>
    <button @click="vec3">三连胜</button>
    <button @click="vec5">战绩</button>:{{ num }}
    <div>
      <a @click.prevent.stop="prevents" :href="url"
        >我要跳转百度了但是有修饰符真气人</a
      >
    </div>
    <!-- 表单按键事件 -->
    <input type="text" v-on:keyup.enter="kk(123, $event)" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://www.baidu.com",
      msg: "hello,world!",
      num: 2,
    };
  },
  methods: {
    debl() {
      alert("老铁666");
    },
    deb() {
      alert("单击不行呀");
    },
    vectory() {
      this.num++;
    },
    defeat() {
      this.num--;
    },
    vec3() {
      this.num += 3;
    },
    vec5() {
      console.log("今天连胜" + this.num);
    },
    prevents() {
      console.log("我是修饰符");
    },
    // pare(){
    //     console.log('我是他爸');
    // },
    kk(n, ev) {
      ev.stopPropagation();
      console.log("回车了" + "带了个" + n );
      console.log(ev.target);
    },
  },
};
</script>
<style >
button {
  margin: 0 10px;
}
input {
  margin: 200px;
}
</style>