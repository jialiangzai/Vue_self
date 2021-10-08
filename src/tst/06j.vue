<template>
  <div id="app">
    <ul>
      <li v-for="(item, ind) in arr" :key="item">
        <span>{{ item }}</span>
        <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[1]
        }
    },
    methods: {
        del(n){
            this.ind.splice(n,1)
        },
        add(){
            this.arr.push(Math.floor(Math.random()*10+1))
        }

    },
}
</script>
<style >
    button{
        margin: 10px;
    }
</style>