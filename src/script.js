import { todoLists } from './index';
import { display } from './index';
import { addLocalStorage } from './index';


export function check() {
    const checkBox = document.querySelectorAll('.small-box');
    // console.log(todoLists);
    let getLocal = localStorage.getItem('todoLists');
    let todoLists = JSON.parse(getLocal);
   
    checkBox.forEach((item,i) => {
        // console.log(item);
        item.addEventListener('change', () => {
            if(item.checked) {
                todoLists[i].completed = true;
               
                const line = document.querySelectorAll('.item')
                console.log(line[i]);
                console.log(todoLists[i]);
                line[i].style.textDecoration = 'line-through';
                localStorage.setItem('todoLists', JSON.stringify(todoLists));
                // document.getElementById(i).checked = todoLists[i].completed;
                // document.getElementById(i).add('checked');
            }else if (item.checked === false) {
                todoLists[i].completed = false;
                document.getElementById(i).checked = todoLists[i].completed;
                const line = document.querySelectorAll('.item')
                line[i].style.textDecoration = 'none';
                console.log(todoLists[i]);
                localStorage.setItem('todoLists', JSON.stringify(todoLists));
            }
        })
        
    })
}

export default 'check';