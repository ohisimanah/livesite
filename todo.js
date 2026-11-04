import {complete} from './completed.js';

export const array = JSON.parse(localStorage.getItem('todo')) || [];
let totalInputs = 0;

const activity = document.querySelector('.js-f-input');
const date = document.querySelector('.js-d-input');

const bbb = document.querySelector('.js-qua');

function total() {
    totalInputs = 0;
    array.forEach((task) => {
      if (task.name && task.date) {
        totalInputs++;
      }
    })

    if (totalInputs >= 0) {
      if (bbb) {
      document.querySelector('.js-qua')
       .innerHTML = `Task inputed: ${totalInputs}`;
      }
    } 
  }

  export function saveTostorage2() {
    localStorage.setItem('comp', JSON.stringify(complete));
  }

  const hhh = document.querySelector('.js-btn1');

  if (hhh) {
document.querySelector('.js-btn1')
 .addEventListener('click', () => {
  const act = activity.value
  const da = date.value

  array.push({
    name: act,
    date: da
  });

  activity.value = '';
  date.value = '';

  saveToStorage();

  function saveToStorage() {
    localStorage.setItem('todo', JSON.stringify(array));
  }

  function reveal() {
    let html1 = '';

    const box = document.querySelector('.js-third-section');

    const isNearBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 50;

  array.forEach((tasks, index) => {
    const isDone = complete.some(part => part.name === tasks.name && part.date === tasks.date);

   const html = `<div class="task-container js-task-container">
      <input type="checkbox" name="packs" class="r-input js-r-input" ${isDone ? 'checked' : ''}>
      <div class="arr-input-con">
        <div class="tt-input">${tasks.name}</div>
        <div class="dd-input">${tasks.date}</div>
      </div>

      <div class="btn-con">
      <button class="btn2 js-btn2">DEL</button>
      </div>
    </div>`;

    html1 += html;
  });

  document.querySelector('.js-third-section')
   .innerHTML = html1;
   dele();

   document.querySelectorAll('.js-r-input').forEach((checke, index) => {
     checke.addEventListener('click', () => {
       if (checke.checked) {
        complete.push(array[index])
       }
       else {
        const i = complete.findIndex(item => item.name === array[index].name && item.date === array[index].date)
        if (i !== -1) {
          complete.splice(i, 1);
        }
       }
       saveTostorage2();
     });
   }); 

   if (isNearBottom) {
   document.querySelector('.js-third-section').scrollTop = document.querySelector('.js-third-section').scrollHeight;
   }
  
   console.log(html1);
}

 reveal();
 
   function dele() {
  document.querySelectorAll('.js-btn2')
   .forEach((bt, inu) => {
     bt.addEventListener('click', () => {
       array.splice(inu, 1);
       total();
       reveal();
       saveToStorage();
     });
   });
  }

  total();
 });
}

 total();

 window.addEventListener('load', () => {
  const load = document.querySelector('.js-loader-con');

  load.style.display = 'none';
 });
  