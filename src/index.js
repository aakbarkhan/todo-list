import './style.css';
import { check } from './script.js';
import { filter } from 'lodash';

export let todoLists = [
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


export function display() {
  const input = document.getElementById('input');
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
              
              <i id=${item.id} class="fas fa-ellipsis-v"></i>
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
              <button type="submit" id=${item.index}>edit</button>
              <i id=${item.index} class="fas fa-ellipsis-v"></i>
          </form>
          `;
      }
    });
  } else if ( localStorage.getItem('todoLists') == 0) {
    todos.innerHTML = '';
    window.addEventListener('load', check);
    todoLists.forEach((item) => {
      if (item.completed === true) {
        // location.reload();
        todos.innerHTML += `
        <form id="form" action="#"  >
          <input id=${item.index} class="small-box" type="checkbox" checked>
              <li class="item" style="text-decoration: line-through;">
              ${item.description} 
              </li>
              <i id=${item.id}   class="fas fa-ellipsis-v"></i>
          </form>
          `;
      } else {
        todos.innerHTML += `
        <form id="form" action="#">
          <input id=${item.index} class="small-box" type="checkbox">
              <li class="item">
              ${item.description} 
              </li>
              <i id=${item.id}  class="fas fa-ellipsis-v"></i>
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
  // console.log(enter)
  
    enter.addEventListener('click', ()=>{
      todoLists.push({description:input.value, completed:false,index:todoLists.length});
      display();
      console.log(input.value)
      addLocalStorage();
      // window.addEventListener('load', check);      
  })

function addLocalStorage() {
  const localStore = JSON.stringify(todoLists);
  localStorage.setItem('todoLists', localStore);
  

  display();
  // window.addEventListener('load', check);
  window.location.reload(false);
  // location.reload();


}
if (localStorage.getItem('todoLists') !== null) {  
  
  todoLists = JSON.parse(localStorage.getItem('todoLists'));
  display();
}

function remove(id) {
  // todoLists = todoLists.filter((e) => e.index  != id);
  // console.log(e.index );
  todoLists.splice(id,1);
  console.log(id)
  display();
  addLocalStorage();
}

const btn = document.getElementsByClassName('fa-ellipsis-v');

Array.from(btn).forEach((item, i) => {
  // console.log(item);
  item.addEventListener('click', (e)=> {
    remove(i);
  })
})


function clear() {
  todoLists = todoLists.filter((item) => item.completed == false);
  // console.log(todoLists);

  display();
  addLocalStorage();
}

const clean = document.getElementsByClassName('clear-completed');
console.log(clean);

Array.from(clean).forEach((btn)=> {
  btn.addEventListener('click', ()=> {
    clear(); 
  });
})


// edit
const area = document.getElementsByClassName('textarea');
console.log(area)
function edittodo(i){
  area[i].style.display = 'inline';
  const line = document.querySelectorAll('.item');
  line[i].style.display = 'none';
  area[i].addEventListener('change', (e)=> {
    console.log(e.target);
    area[i].textContent = area[i].value;
    todoLists[i].description = area[i].textContent;
    addLocalStorage()
  location.reload();

  })

}

const editbtn = document.getElementsByTagName('button');
Array.from(editbtn).forEach((edit,i)=> {
  
  edit.addEventListener('click', (e)=>{
  location.reload();
    editbtn[i].innerText = 'save';
    console.log(e.target.id)
    console.log(i)
    edittodo(i-1);
  location.reload();
    
  })
})


function indexLoop() {
  if(todoLists.length > 0){
    let i = 0;
    while(i < todoLists.length){
      todoLists[i].index = i;
      i += 1;
    }
  }
  return todoLists
}

indexLoop();
