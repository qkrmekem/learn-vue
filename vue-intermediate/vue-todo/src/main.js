import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'


// use() : 플러그인
// vue를 사용하는 모든 영역에 글로벌 function을 추가하고자 할 때 사용
createApp(App).use(store).mount('#app')

// vue 버전2
// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
// });
