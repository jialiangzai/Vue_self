<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isall" />
    <button @click="invert">反选</button>
    <ul>
      <li v-for="(item,index) in arr"  :key="index">
        <input type="checkbox" v-model="item.checked"/>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          checked: false,
        },
        {
          name: "孙悟空",
          checked: false,
        },
        {
          name: "唐僧",
          checked: false,
        },
        {
          name: "白龙马",
          checked: false,
        },
      ],
    };
  },
  computed: {
    //   isall() {
    //       return this.arr.every((obj)=>obj.checked === true)
    //   }
    isall:{
        get(){
            return this.arr.every((obj)=>obj.checked === true)
        },
        set(val){
            return this.arr.forEach(ite=>ite.checked=val)
        }
    },

  },
  methods: {
      invert() {
          this.arr.forEach(objs=>objs.checked=!objs.checked)
      }
  },
};

</script>

<style>
</style>