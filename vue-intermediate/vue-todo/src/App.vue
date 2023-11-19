<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:propsData="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // ES5
  // data : function(){
  // ES6
  // data(){
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods: {
    // ES5
    // addOneItem: function(todoItem){

    // // ES6
    // addOneItem(todoItem){
    //   const obj ={
    //       completed: false,
    //       item: todoItem
    //   };
    //   // 저장하는 로직
    //   // obj의 값을 string값으로 담음
    //   // js의 object가 들어가기 때문에 어떤 값이 들어있는지 확인할 수 없음
    //   // localStorage.setItem(this.newTodoItem,obj);
    //   // obj가 string형태로 저장됨 
    //   localStorage.setItem(todoItem,JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index){
    //   localStorage.removeItem(todoItem.item);
    //   // index위치부터 1개의 요소를 제거
    //   // splice는 요소를 제거하고 배열에 반영
    //   // slice는 저장하지 않음
    //   this.todoItems.splice(index,1);
    // },
    // toggleOneItem(todoItem){
    //   todoItem.completed = !todoItem.completed;
    //   // 로컬스토리지 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    // },
  //   clearAllItem(){
  //     localStorage.clear();
  //     this.todoItems = [];
  //   }
  // },
  // 라이프사이클 훅
  // 컴포넌트가 생성되고 소멸되는 사이의 각 단계에서
  // 실행되는 함수를 뜻함(총 8가지의 상태가 있음)
  // created(){
  //   if(localStorage.length > 0){
  //     for(let i = 0; i < localStorage.length; i++){
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
  //         // 앞서 데이터를 로컬스토리지에 저장할 때 string형태로 저장했기 때문에
  //         // JSON.parse로 다시 object타입으로 바꿔야함
  //         console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

  //         // this.todoItems.push(localStorage.key(i));
  //       }
  //     }
  //   }
  // },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // 향상된 객체 리터럴 
    // 객체의 속성 이름과 값의 이름이 동이할 때 축약할 수가 있음
    // 적용전
    // 'TodoHeader': TodoHeader,
    // 적용 후
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}

input{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
