<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa fa-plus addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
    // v-model : 뷰 인스턴스와 input박스의 값을 동적으로 매핑
    data: function(){
        return{
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function(){
            // console.log(this.newTodoItem);
            // 저장하는 로직
            localStorage.setItem(this.newTodoItem,this.newTodoItem);
            this.clearInput();
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    display: flex;
    align-items: center;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>