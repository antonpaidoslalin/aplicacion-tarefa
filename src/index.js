import './styles.css';

import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';

export const todoList=new TodoList();


//variables
export let numPendientes = 0;
//Datos de exemplo
/*const tarea=new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);
**/
//Visualizar datos cargados en Web
//todoList.todos.forEach(todo => crearTodoHtml( todo ));
//Only if it has only one argument:
//Só se só ten un argumento:
//Solo si sólo tiene un sólo argumento: 
todoList.todos.forEach(crearTodoHtml);
todoList.todos.forEach(todo => {if (!todo.completado) {numPendientes++}});
console.log(`Número Pendentes: ${numPendientes}`);