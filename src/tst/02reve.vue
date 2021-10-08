<template>
    <div>
        <h3>{{ str }}</h3>
        <button @click="rev">两级翻转</button>
    </div>
</template>
<script>
export default  {
    data() {
        return {
          str:'你真是帅气'  
        }
    },
    methods: {
        rev(){
          this.str = this.str.split('').reverse().join('')
        }
    },

}

</script>
<style>
</style>