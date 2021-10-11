<template>
  <div>
    <ul>
      <li
        style="{ display: inline-block }"
        v-for="(item, index) in arr"
        :key="index"
      >
        <input type="checkbox" v-model="newarr" :value="item" />
        <span>{{ item }}</span>
      </li>
    </ul>

    <p>和为：{{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newarr: [],
    };
  },
  computed: {
    sum() {
      return this.newarr.reduce((item,obj )=>item+=obj,0);
    },
  },
};
</script>

<style>
</style>