import { todoLists } from "./index";

export function check() {
    const checkBox = document.querySelectorAll('.small-box');
    const localStore = JSON.stringify(todoLists);
    console.log(todoLists);
    
    // console.log(checkBox);
    checkBox.forEach((item,i) => {
        console.log(item);
        item.addEventListener('change', () => {
            if(item.checked) {
                todoLists[i].completed = true;

                const line = document.querySelectorAll('.item')
                console.log(line[i]);
                console.log(todoLists[i]);
                line[i].style.textDecoration = 'line-through';

            }else if (item.checked == false) {
                todoLists[i].completed = false;
                const line = document.querySelectorAll('.item')
                line[i].style.textDecoration = 'none';
                console.log(todoLists[i])
            }

        })
        
    })
    
}

export default 'check';