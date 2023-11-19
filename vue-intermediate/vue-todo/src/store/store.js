import {createStore} from 'vuex'

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                // 앞서 데이터를 로컬스토리지에 저장할 때 string형태로 저장했기 때문에
                // JSON.parse로 다시 object타입으로 바꿔야함
                console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

// Store = 첫글자 대문자!!
export default createStore({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        // ES6
        addOneItem(state, todoItem){
            const obj ={
                completed: false,
                item: todoItem
            };
            // 저장하는 로직
            // obj의 값을 string값으로 담음
            // js의 object가 들어가기 때문에 어떤 값이 들어있는지 확인할 수 없음
            // localStorage.setItem(this.newTodoItem,obj);
            // obj가 string형태로 저장됨 
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            // index위치부터 1개의 요소를 제거
            // splice는 요소를 제거하고 배열에 반영
            // slice는 저장하지 않음
            state.todoItems.splice(payload.index,1);   
        },
        toggleItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAll(state){
            localStorage.clear();
            state.todoItems = [];
        }

    }
});