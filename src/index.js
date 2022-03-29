import './styles.css';

import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';
import { visNumPendientes } from './js/componentes';

export const todoList=new TodoList();


//funcións
export const calcPendientes=()=>{
    //variables
    let numPendientes = 0;
    //cálculo
    todoList.todos.forEach(todo => {if (!todo.completado) {numPendientes++}});
    return numPendientes;

}
todoList.todos.forEach(crearTodoHtml);

//chamadas
visNumPendientes();