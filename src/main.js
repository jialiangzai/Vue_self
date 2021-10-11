import Vue from 'vue'
// import App from './App.vue'
// import App from ''
// 1
// import App from './tst/01bind.vue'
// 2
// import App from './tst/02reve.vue'
// 3
// import App from './tst/03model.vue'
// 4
// import App from './tst/04v-for.vue'
// 5
// import App from './tst/05z.vue'
// 6
// import App from './tst/06j.vue'
// 7
// import App from './tst/07car.vue'
// 8 
// import App from './tst/08s.vue'
// 8 pin
// import App from './tst/08pin.vue'
// 9全选
// import App from './tst/09all.vue'
// 10
// import App from './tst/10shu.vue'
// 11
// import App  from './tst/11sum.vue'
// 12 
// import App  from './tst/12devlop.vue'
// 13
// import App from './tst/13组件开发.vue'
// 注册全局组件
// import Panel from './components/01组件开发.vue' //引入
// Vue.component('Panel',Panel) //注册 ，所有组件都可以使用 俩个参数 组件名 ， 组件对象  必写，局部的可以用es6省略但是要一致， 
// 14父子组件通信  组件封装复用的标签和样式, 而具体数据要靠外面传入  props相当于声明变量，值可以是数组和对象，数组的时候是要引号的
import App from './tst/14父子通信父.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
