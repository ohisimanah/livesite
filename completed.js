import { saveTostorage2 } from "./todo.js";

export const complete = JSON.parse(localStorage.getItem('comp')) || [];

let html2 = '';

const container = document.querySelector('.js-done-con');

let totalComplete = 0;

function total2() {
  totalComplete = 0;
  complete.forEach((paste) => {
    if (paste.name && paste.date) {
       totalComplete++;
    }
  });

  const part = document.querySelector('.js-plete');
  if (part) {
  document.querySelector('.js-plete')
   .textContent = `Completed: ${totalComplete}`;
  }
}

total2();

complete.forEach((finish) => {

 const html = `<article>
        <div>${finish.name}</div>
        <div>${finish.date}</div>
         </article>`;

         html2 = html2 + html;
});

if (container) {
document.querySelector('.js-done-con')
 .innerHTML = html2;
}

const part3 = document.getElementById('bnn2');

if (part3) {
document.getElementById('bnn2')
 .addEventListener('click', () => {
    complete.length = 0;
    total2();
    container.innerHTML = '';
    saveTostorage2();

 });
}

window.addEventListener('load', () => {
  const load = document.querySelector('.js-loader-cons');

  load.style.display = 'none';
 });
  
