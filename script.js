let tasks;

// add task
$('form').on('submit', (event) => {
  event.preventDefault();
  const inputValue = $('.write').val();
  const date = new Date($.now());
  const formatted = date.getHours().toString().padStart(2, 0) + ":" + date.getMinutes().toString().padStart(2, 0) + ":" + date.getSeconds().toString().padStart(2, 0);
  const task = `<li><span class="number">Tasks number ${tasks.length + 1}${inputValue ? ":" : ""} ${inputValue} </span><span class="time">${formatted}</span></li>`;
  $('ul').append(task);
  tasks.push(task)
  $('.write').val('');
  localStorage.setItem('todo', JSON.stringify(tasks));
})

// remove last task
$('.remove').on('click', () => {
  $('li').remove();
  tasks.pop()
  $('ul').append(tasks);
  localStorage.setItem('todo', JSON.stringify(tasks));
})

// clear all
$('.clear').on('click', () => {
  tasks = [];
  $('li').remove();
  localStorage.setItem('todo', JSON.stringify(tasks));
})

// draw list if saved in localStorage
window.onload = () => {
  tasks = JSON.parse(localStorage.getItem('todo')) || [];
  $('ul').append(tasks);
}