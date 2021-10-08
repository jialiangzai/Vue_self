
<template>
  <div>
    <!--v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令-->
    <!-- 绑定输入 -->
    <div>
      <span>用户名:</span>
      <input type="text" v-model.trim.lazy="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pass" />
    </div>
        <div>
      <span>身份证:</span>
      <input type="text" v-model.number="ids" />
    </div>


    <!-- 绑定选择 -->
    <div>
      <span>来自于哪里?</span>
      <select v-model="from">
        <option value="西安">陕西-西安</option>
        <option value="燕京">北京-燕京</option>
        <option value="大连">辽宁-大连</option>
      </select>
    </div>

    <div>
      <!-- checkbox特殊, 内部判断v-model是数组, 绑定value值 -->
      <span>爱好</span>
      <input type="checkbox" v-model="hobby" value="吃饭" /><span>吃饭</span>
      <input type="checkbox" v-model="hobby" value="逛街" /><span>逛街</span>
      <input type="checkbox" v-model="hobby" value="旅游" /><span>旅游</span>
    </div>
  </div>
</template>
<script>
// v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令
export default {
  data() {
    return {
        ids:"",
      username:"",
      pass:"",
      from:"",
      hobby:[],
    };
  },
};
</script>

<style>
</style>