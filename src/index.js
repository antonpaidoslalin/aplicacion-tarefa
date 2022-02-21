import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import './styles.css';
let a='';



const tarea=new Todo('Aprender Javascript');
a = prompt('Introduza  unha letra: ');
const tarea2=new Todo('Domar un unicornio')
const todolist=new TodoList();

console.log(tarea);
todolist.nuevoTodo(tarea);
todolist.nuevoTodo(tarea2);
console.log(todolist);