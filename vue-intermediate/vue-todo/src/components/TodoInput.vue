<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn" ></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite!!!
      default content
    -->
        <template v-slot:header>
            경고!!!
            <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </template>

        <template v-slot:body>
            글을 입력해주세요
        </template>

        <template v-slot:footer>
            copyright : qkrmekem
        </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'
import {mapMutations} from 'vuex'


export default {
    

    // v-model : 뷰 인스턴스와 input박스의 값을 동적으로 매핑
    data(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        ...mapMutations({
            addTodoItem: 'addOneItem'
        }),
        addTodo(){
            if(this.newTodoItem !== ''){
                // $emit(부모 컴포넌트에서 실행할 함수 이름, 인자)
                // this.$emit('addOneItem', this.newTodoItem);
                // this.$store.commit('addOneItem', this.newTodoItem);
                this.addTodoHelper(this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
            
        },
        addTodoHelper(todo){
            this.addTodoItem(todo);
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
       AlertModal
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
.closeModalBtn{
    color: #42b983;
}
</style>