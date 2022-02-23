import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from './js/componentes.js';
import './styles.css';
import { SingleEntryPlugin } from 'webpack';

const tarea=new Todo('Aprender Javascript');
const tarea2=new Todo('Domar un unicornio')
export const todoList=new TodoList();
todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
crearTodoHtml ( tarea );
crearTodoHtml ( tarea2 );
console.log(todoList);