import { visNumPendientes } from "../js/componentes";
export class TodoList{
    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
        visNumPendientes();
    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo => todo.id!=id);
        this.guardarLocalStorage();
        visNumPendientes();
    }

    marcarCompletado(id){


        for (let i=0;i<this.todos.length;i++){
            // const todo=this.todos[i];
            if (id==this.todos[i].id){
                this.todos[i].completado=!this.todos[i].completado;
                this.guardarLocalStorage();
                break;
            }
        }
        visNumPendientes();
    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
        visNumPendientes();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        
        this.todos =  (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo')) 
        : [];
        console.log(this.todos);
        }
}