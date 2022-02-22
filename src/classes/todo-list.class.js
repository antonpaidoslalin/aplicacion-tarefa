
export class TodoList{
    constructor(){
        
        this.todos=[];
    }
    nuevoTodo (todo){
        this.todos.push(todo);
    }
    eliminarTodo (id){
       // todos.array.forEach();
        

    }
    marcarCompletado(id){
        for (i = 0; i<this.todos.length;i++){
            if (this.todos[i].id = id){
                this.todos[i].completado = true;
            }

        }
    }
    eliminarCompletados(){

    }
}
