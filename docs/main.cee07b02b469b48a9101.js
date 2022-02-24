(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}e.d({},{I:()=>p,L:()=>h});var n=o((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}));function r(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var i=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),l=document.querySelector(".clear-completed"),s=document.querySelector(".filters"),d=document.querySelectorAll(".filtros"),u=document.querySelector("strong"),f=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label>").concat(e.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),o=document.createElement("div");return o.innerHTML=t,i.append(o.firstElementChild),o.firstElementChild},m=function(){u.innerText=p()};function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}c.addEventListener("keyup",(function(e){if(13===e.keyCode&&""!==c.value){console.log(c.value);var t=new n(c.value);h.nuevoTodo(t),f(t),c.value=""}})),i.addEventListener("click",(function(e){var t=e.target.localName,o=e.target.parentElement.parentElement,n=o.getAttribute("data-id");t.includes("input")?(h.marcarCompletado(n),o.classList.toggle("completed")):t.includes("button")&&(h.eliminarTodo(n),i.removeChild(o))})),l.addEventListener("click",(function(){h.eliminarCompletados();for(var e=i.children.length-1;e>=0;e--){var t=i.children[e];t.classList.contains("completed")&&i.removeChild(t)}})),s.addEventListener("click",(function(e){var t=e.target.text;if(t){d.forEach((function(e){return e.classList.remove("selected")}));var o,n=r(i.children);try{for(n.s();!(o=n.n()).done;){var a=o.value;a.classList.remove("hidden");var c=a.classList.contains("completed");switch(t){case"Pendientes":c&&a.classList.add("hidden");break;case"Completados":c||a.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var h=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o,n;return t=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage(),m()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage(),m()}},{key:"marcarCompletado",value:function(e){for(var t=0;t<this.todos.length;t++)if(e==this.todos[t].id){this.todos[t].completado=!this.todos[t].completado,this.guardarLocalStorage();break}m()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage(),m()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],console.log(this.todos)}}])&&v(t.prototype,o),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),p=function(){var e=0;return h.todos.forEach((function(t){t.completado||e++})),e};h.todos.forEach(f),console.log("Número Pendentes: ".concat(p())),m()})();