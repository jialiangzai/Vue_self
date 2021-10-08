<template>
  <div id="app">
    <ul>
      <li v-for="item in str" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            str:["帅哥", "美女", "程序猿"],
        }   
    },
    methods: {
        btn(){
            // 数组先在末尾添加后删除第一个
            this.str.push(this.str[0])
            this.str.shift(this.str[0])
        }
    },
}
</script>

<style>

</style>