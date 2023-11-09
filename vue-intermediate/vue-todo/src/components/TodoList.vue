<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
        v-on:click="toggleComplete(todoItem,index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index){
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      // index위치부터 1개의 요소를 제거
      // splice는 요소를 제거하고 배열에 반영
      // slice는 저장하지 않음
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem, index){
      console.log(todoItem,index);
      todoItem.completed = !todoItem.completed;
      // 로컬스토리지 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem.item));
    }
  },
  // 라이프사이클 훅
  // 컴포넌트가 생성되고 소멸되는 사이의 각 단계에서
  // 실행되는 함수를 뜻함(총 8가지의 상태가 있음)
  created: function(){
    if(localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // 앞서 데이터를 로컬스토리지에 저장할 때 string형태로 저장했기 때문에
          // JSON.parse로 다시 object타입으로 바꿔야함
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  }
}
</script>

<style scoped>
ul{
  /* 리스트의 점을 제거함 */
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
</style>