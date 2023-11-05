import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// let App ={
//   template: '<div>app</div>'
// }

new Vue({
  // import에서 정의한 App이라는 컴포넌트를 가져와 렌더링 시킴
  render: h => h(App),
  // 위의 render와 아래의 components는 같은 역할을 하고 있음
  // components: {
  //   'app': App
  // }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })