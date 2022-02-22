
export class TodoList{
    constructor(){
        
        this.todos=[];
    }
    nuevoTodo (todo){
        this.todos.push(todo);
    }
    eliminarTodo (id){
       // todos.array.forEach();
       this.todos.filter(todo => todo.id!=id);
        

    }
    marcarCompletado(id){
        for (let i = 0; i<this.todos.length;i++){
            if (this.todos[i].id == id){
                this.todos[i].completado = true;
                break;
            }

        }
    }
    eliminarCompletados(){

    }
}
