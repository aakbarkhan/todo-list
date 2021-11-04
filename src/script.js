export function check() {
  const checkBox = document.querySelectorAll('.small-box');
  const getLocal = localStorage.getItem('todoLists');
  const todoLists = JSON.parse(getLocal);
  checkBox.forEach((item, i) => {
    item.addEventListener('change', () => {
      if (item.checked) {
        todoLists[i].completed = true;
        const line = document.querySelectorAll('.item');
        line[i].style.textDecoration = 'line-through';
        localStorage.setItem('todoLists', JSON.stringify(todoLists));
      } else if (item.checked === false) {
        todoLists[i].completed = false;
        const line = document.querySelectorAll('.item');
        line[i].style.textDecoration = 'none';
        localStorage.setItem('todoLists', JSON.stringify(todoLists));
      }
    });
  });
}
export default 'check';