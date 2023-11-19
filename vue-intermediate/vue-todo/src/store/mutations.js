// ES6
const addOneItem = (state, todoItem) => {
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
}

const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    // index위치부터 1개의 요소를 제거
    // splice는 요소를 제거하고 배열에 반영
    // slice는 저장하지 않음
    state.todoItems.splice(payload.index,1);   
}

const toggleItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeItem, toggleItem, clearAll}