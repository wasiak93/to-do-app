let tasks = $.makeArray();

// add task
$('form').on('submit', (event) => {
  event.preventDefault();
  const inputValue = $('.write').val();
  const date = new Date($.now());
  const formatted = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const task = $(`<li><span class="number">Tasks number<span> ${tasks.length + 1}: </span></span><span class="add-task"> ${inputValue} </span><span class="time">${formatted}</span></li>`);
  $('ul').append(task);
  tasks.push(task)
  $('.write').val('');
})

// remove last task
$('.remove').on('click', () => {
  $('li').remove();
  tasks.pop()
  $('ul').append(tasks);
})

// clear all
$('.clear').on('click', () => {
  tasks = [];
  $('li').remove();
})