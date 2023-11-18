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
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    }
});