<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn" ></i>
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
            if(this.newTodoItem !== ''){
                let obj ={
                    completed: false,
                    item: this.newTodoItem
                };
                // 저장하는 로직
                // obj의 값을 string값으로 담음
                // js의 object가 들어가기 때문에 어떤 값이 들어있는지 확인할 수 없음
                // localStorage.setItem(this.newTodoItem,obj);
                // obj가 string형태로 저장됨 
                localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
                this.clearInput();
            }
            
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
    flex-direction: row;
    align-items: center;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    height: 100%;
    float: right;
    /* 띄어쓰기 해야함!!! */
    width: calc(100% - 3rem);
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    height: 100%;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>