import {UI} from "./ui";
export class Storage{ 
    constructor(){
        this.name="name";
        this.ui= new UI();
    }   

    getTodosFromStorage(){
        
        let todos;
        if(localStorage.getItem("todos")==null){
            todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        return todos;

    }

    addTodoToStorage(todo){      
        
        let todos=this.getTodosFromStorage();
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    
    addTodoToUI(){
        let todos=this.getTodosFromStorage();
        todos.forEach(todo => {
            this.ui.addTodoUI(todo);
            
        });
    }

    removeTodo(title){
        let todos = this.getTodosFromStorage();
        todos.forEach((todo,index) => {
            if(title===todo.title){
                todos.splice(index,1);
                localStorage.setItem("todos",JSON.stringify(todos));
            }

        })
        

    }    

    }
   
   
