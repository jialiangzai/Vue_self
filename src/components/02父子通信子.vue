<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ proprice }} 元</p>
    <p>
      {{ info }}
    </p>
    <div>
      <p>来砍价，砍{{ num }}折</p>
      <button @click="kanFns(index)">砍价</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "title", "proname", "proprice", "info", "num"],
  methods: {
    kanFns(n) {
      let s = Math.floor(Math.floor(Math.random() * 9 + 1));
      this.$emit("sale", this.index,s, this.proprice / s);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>