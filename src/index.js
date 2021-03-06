import './style.css';
// import { filter } from 'lodash';
import { check } from './script.js';

let todoLists = [
  // {
  //   description: 'Exercise regularly.',
  //   completed: false,
  //   index: 0,
  // },
  // {
  //   description: 'Play with the Todo list.',
  //   completed: false,
  //   index: 1,
  // },
  // {
  //   description: 'Check all the items in the todo list',
  //   completed: false,
  //   index: 2,
  // },
  // {
  //   description: 'use pomodor clock regularly.',
  //   completed: false,
  //   index: 3,
  // },
];
const todos = document.querySelector('.list-items');
function display() {
  // const input = document.getElementById('input');
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
              
              <i id=${item.id} class="fas fa-trash-alt"></i>
          </form>
          `;
      } else {
        todos.innerHTML += `
        <form id="form" action="#" >
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <textarea class="textarea" style="display:none;" name="text" id=${item.index} cols="49" rows="1">${item.description}</textarea>
              <button class="edit-btn" type="submit" id=${item.index}>edit</button>
              <i id=${item.index} class=" fas fa-trash-alt"></i>
          </form>
          `;
      }
    });
  } else if (localStorage.getItem('todoLists') === 0) {
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
              <i id=${item.id}  class="fas fa-trash-alt"></i>
          </form>
          `;
      } else {
        todos.innerHTML += `
        <form id="form" action="#">
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <i id=${item.id}  class="fas fa-trash-alt"></i>
          </form>
          `;
      }
    });
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }
}
display();

const input = document.getElementById('input');
const enter = document.getElementById('enter-key');
function indexLoop() {
  if (todoLists.length > 0) {
    let i = 0;
    while (i < todoLists.length) {
      todoLists[i].index = i + 1;
      i += 1;
    }
  }
  return todoLists;
}

function addLocalStorage() {
  indexLoop();
  const localStore = JSON.stringify(todoLists);
  localStorage.setItem('todoLists', localStore);
  display();
  window.location.reload(false);
}

enter.addEventListener('click', () => {
  todoLists.push({ description: input.value, completed: false, index: todoLists.length });
  display();
  addLocalStorage();
});
if (localStorage.getItem('todoLists') !== null) {
  todoLists = JSON.parse(localStorage.getItem('todoLists'));
  display();
}

function remove(id) {
  todoLists.splice(id, 1);
  display();
  addLocalStorage();
}
const btn = document.getElementsByClassName('fa-trash-alt');
Array.from(btn).forEach((item, i) => {
  item.addEventListener('click', () => {
    remove(i);
  });
});

function clear() {
  todoLists = todoLists.filter((item) => item.completed === false);
  display();
  addLocalStorage();
}

const clean = document.getElementsByClassName('clear-completed');
Array.from(clean).forEach((btn) => {
  btn.addEventListener('click', () => {
    clear();
  });
});
// edit
const area = document.getElementsByClassName('textarea');
function edittodo(i) {
  area[i].style.display = 'inline';
  const line = document.querySelectorAll('.item');
  line[i].style.display = 'none';
  area[i].addEventListener('change', () => {
    area[i].textContent = area[i].value;
    todoLists[i].description = area[i].textContent;
    addLocalStorage();
  });
}
const editbtn = document.getElementsByTagName('button');
Array.from(editbtn).forEach((edit, i) => {
  edit.addEventListener('click', (e) => {
    e.preventDefault();
    editbtn[i].innerText = 'save';
    edittodo(i - 1);
  });
});
