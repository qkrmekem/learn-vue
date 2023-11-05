<template>
  <!-- template 바로 밑에는 아래처럼 하나의 태그만 존재해야 함 -->
  <div>
    <!-- <app-header v-binde:프롭스 속성 이름="상위 컴포넌트의 이름"></app-header> -->
    <app-header v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function(){
    return{
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>