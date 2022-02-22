import { todoList } from '..';
//import { TodoList } from '../classes/todo-list.class';
import {Todo} from '../classes/todo.class';
//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');



export const crearTodoHtml = ( todo ) => {
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed': ''}" data-id="${todo.id}"
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': ''}>
                <label>${todo.tarea} </label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC Template">
        </li>`;
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;    
        divTodoList.append ( div.firstElementChild );
    
   return div.firstElementChild;
        
}       

//Eventos

txtInput.addEventListener('keyup', ( event ) => {
    let nuevoTodo;
   // console.log(event);
   console.log(event.keyCode);
   if ((event.keyCode ===13)&&(txtInput.value.length > 0)){
        console.log(txtInput.value);
        const nuevoTodo = new Todo (txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
   }

})

divTodoList.addEventListener ('click', (event) => {
    console.log('click');
    console.log(event.target.localName);
})