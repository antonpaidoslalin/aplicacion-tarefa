import { todoList } from '..';
//import { TodoList } from '../classes/todo-list.class';
import {Todo} from '../classes/todo.class';
//Referencias HTML
const divTodoList   =   document.querySelector('.todo-list');
const txtInput      =   document.querySelector('.new-todo');
const btnBorrar     =   document.querySelector('.clear-completed');



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
   if ((event.keyCode === 13)&&(txtInput.value.length > 0)){
        console.log(txtInput.value);
        const nuevoTodo = new Todo (txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
   }

})

divTodoList.addEventListener ('click', (event) => {
    const nombreElemento=event.target.localName;
    const todoElemento=event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes("input")){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
})

<<<<<<< HEAD
btnBorrar.addEventListener ('click', () => {
    todoList.eliminarCompletados();
    
=======
btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length-1; i >= 0; i--){
        const elemento = divTodoList.children [i]
        //TODO: Revisar que o colle ao revés
        console.log(elemento);
        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }

>>>>>>> 590977e (Botón borrar completados)
})