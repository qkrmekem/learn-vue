<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>

    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  // 기존에는 data를 객체형태로 선언을 했지만
  // 컴포넌트 단위로 개발을 할 때는 컴포넌트간
  // data가 공유되지 않게 function으로 데이터 선언
  data: function(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function(){
      // 폼의 새로고침을 막는 함수
      // event.preventDefault(); // 바닐라js에서 사용하던 함수
      console.log(this.username, this.password);
      let url = 'https://jsonplaceholder.typicode.com/users';
      let data ={
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>