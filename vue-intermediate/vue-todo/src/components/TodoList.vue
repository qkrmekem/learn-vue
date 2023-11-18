<template>
  <div>
    <!-- 트랜지션 추가 -->
    <!-- https://v2.vuejs.org/v2/guide/transitions.html#Transition-Classes -->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
        v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>

 
export default {
  // props: ['propsData'],
  methods: {
    removeTodo(state, todoItem, index){
      // console.log(JSON.stringify(this.$store.state));
      // this.$emit('removeItem', todoItem, index);
      this.$store.commit('removeItem', {todoItem, index});
    },
    toggleComplete(todoItem){
      // 여기서 toggleItem과
      // 부모 컴포넌트에서 v-on:toggleItem
      // 으로 맞춰야 함
      this.$emit('toggleItem', todoItem);
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

/* 리스트 아이템 트랜지션 효과 */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
/* .list-enter -> .list-enter-from으로 수정하니 적용이 됨 */
.list-enter-from, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>