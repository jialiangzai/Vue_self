<template>
  <div>
    <Child
      v-for="(item, index) in list"
      :key="item.id"
      :index="index"
      :title="item.proname"
      :proname="item.proname"
      :proprice="item.proprice"
      :info="item.info"
      :num="item.num"
      @sale="fn"
    />
  </div>
</template>

<script>
// 引入子组件
import Child from "../components/02父子通信子.vue";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          num: 9,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          num: 9,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          num: 9,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  //   注册
  components: {
    Child,
  },
  methods: {
    fn(n, newb, newp) {
      this.list[n].num = newb;
      this.list[n].proprice = newp;
    },
  },
};
</script>

<style>
</style>