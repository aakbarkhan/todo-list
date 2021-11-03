import './style.css';

const todoLists = [
  {
    description: '30 mins walk in the afternoon',
    completed: false,
    index: 0,
  },
  {
    description: 'Play with the do do list ',
    completed: false,
    index: 1,
  },
  {
    description: 'Check all the items in the todo list',
    completed: false,
    index: 2,
  },
  {
    description: 'use pomodor clock regylarly and update it in advanced sdfdfdfdfdf bbbb',
    completed: false,
    index: 3,
  },
];

const todos = document.querySelector('.list-items');

function display() {
  todos.innerHTML = '';
  const todoList = todoLists;
  todoList.forEach((item) => {
    todos.innerHTML += `
      <form id="form" action="#">
        <input class="small-box" type="checkbox" name="">
            <li class="item">
            ${item.description} 
            </li>
            <i class="fas fa-ellipsis-v"></i>
        </form>
        `;
  });
}
window.addEventListener('load', display);