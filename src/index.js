const addTodoButton = document.querySelector('#btn1');
const closebutton = document.querySelector('#close');
const button = document.getElementById('button');
const title = document.getElementById('title');
const description = document.getElementById('text-area');
const checkbox = document.getElementById('toggle-switch');
const todoList = document.querySelector('#todoList');

eventListeners();

import { Todo } from './todo';
import { UI } from './ui';
import { Storage } from './storage';

const storage = new Storage();
const ui = new UI();

function eventListeners() {
  addTodoButton.addEventListener('click', () => ui.openModal());
  closebutton.addEventListener('click', () => ui.closeModal());
  button.addEventListener('click', addTodoUI);
  todoList.addEventListener('click', removeFromUI);
  document.addEventListener('DOMContentLoaded', loadTodos);
}
function loadTodos() {
  storage.addTodoToUI();
}

function removeFromUI(e) {
  if (e.target.className === 'fas fa-times') {
    ui.removeFromUI(e.target.parentElement.parentElement.parentElement);
    storage.removeTodo(e.target.previousSibling.textContent);
  }
}

function addTodoUI() {
  let titles = title.value;
  let descriptions = description.value;
  let check = checkbox.checked;

  if (titles == '' || descriptions == '') {
    return alert('Lütfen tüm alanları doldurunuz');
  } else {
    let newtodo = new Todo(titles, descriptions, check);
    ui.addTodoUI(newtodo);
    storage.addTodoToStorage(newtodo);
  }
}
