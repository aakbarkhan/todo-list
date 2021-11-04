import './style.css';
import { check } from './script.js';

export const todoLists = [
  {
    description: 'Exercise regularly.',
    completed: false,
    index: 0,
  },
  {
    description: 'Play with the Todo list.',
    completed: false,
    index: 1,
  },
  {
    description: 'Check all the items in the todo list',
    completed: false,
    index: 2,
  },
  {
    description: 'use pomodor clock regularly.',
    completed: false,
    index: 3,
  },
];
const todos = document.querySelector('.list-items');
export function display() {
  if (localStorage.getItem('todoLists') != null) {
    window.addEventListener('load', check);
    const todoList = JSON.parse(localStorage.getItem('todoLists'));
    todos.innerHTML = '';
    todoList.forEach((item) => {
      if (item.completed === true) {
        todos.innerHTML += `
        <form id="form" action="#"  >
          <input id=${item.index} class="small-box" type="checkbox" checked>
              <li class="item" style="text-decoration: line-through;">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
      } else {
        todos.innerHTML += `
        <form id="form" action="#" >
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
      }
    });
  } else {
    todos.innerHTML = '';
    window.addEventListener('load', check);
    todoLists.forEach((item) => {
      if (item.completed === true) {
        todos.innerHTML += `
        <form id="form" action="#"  >
          <input id=${item.index} class="small-box" type="checkbox" checked>
              <li class="item" style="text-decoration: line-through;">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
      } else {
        todos.innerHTML += `
        <form id="form" action="#">
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
      }
    });
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }
}
display();