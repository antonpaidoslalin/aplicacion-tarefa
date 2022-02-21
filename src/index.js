import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from './js/componentes.js';
import './styles.css';

const tarea=new Todo('Aprender Javascript');
const tarea2=new Todo('Domar un unicornio')
export const todoList=new TodoList();

todolist.nuevoTodo(tarea);

crearTodoHtml ( tarea );