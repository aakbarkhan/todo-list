import './style.css';
import { check } from './script';


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
  if ( localStorage.getItem('todoLists') != null ) {
    window.addEventListener('load', check);
    let todoList = JSON.parse(localStorage.getItem('todoLists'));
    loadDisplay(checkBox);
    todos.innerHTML = '';
    todoList.forEach((item) => {
      todos.innerHTML += `
        <form id="form" action="#">
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
    });
  } else {
    todos.innerHTML = '';
    todoLists.forEach((item) => {
      todos.innerHTML += `
        <form id="form" action="#">
          <input id=${item.index} class="small-box" type="checkbox" >
          <label for=${item.index}>check</label>
              <li class="item">
              ${item.description} 
              </li>
              <i class="fas fa-ellipsis-v"></i>
          </form>
          `;
    });
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }
}

function loadDisplay(checkBox) {
  // const checkboxx = document.querySelectorAll('input[type="checkbox"]');
  checkBox.forEach((box)=> {
    let todoList = JSON.parse(localStorage.getItem('todoLists'));
    // console.log(todoList);
    todoList.forEach((list)=> {
      console.log(list)
      if(list.completed == true){
        box.checked = true;
      } else {
        box.checked = false;
    
      }
  
    })
  })

}


display();

export default {todoLists };