/*
https://techmaster.vn/
*/
import { observable,action } from 'mobx';

class Store {
    @observable todos;        
    constructor() {
        this.todos = "";
    }    
       
    @action addNewTodo(newTodo) {
        this.todos = newTodo;
    }    
    // updateTodoWithId(id, newTodo) {
    //     this.todos = this.todos.map(todo => {
    //         if (todo.id === id) {
    //             return Object.assign({}, todo, 
    //                 {
    //                     todoName: newTodo.name, 
    //                     description: newTodo.description, 
    //                 }); 
    //         } else {
    //             return todo;
    //         }
    //     });
    // }
    // deleteTodoWithId(id) {
    //     this.todos = this.todos.filter(todo => todo.id !== id);        
    // }
}
const store = new Store();
export default store;