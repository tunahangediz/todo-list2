export class UI {
  openModal() {
    document.querySelector('.popup').style.display = 'flex';
  }
  closeModal() {
    const title = (document.getElementById('title').value = '');
    const description = (document.getElementById('text-area').value = '');

    document.querySelector('.popup').style.display = 'none';
  }
  addTodoUI(newtodo) {
    const todoList = document.querySelector('#todoList');
    let priority = '';

    if (newtodo.checkbox == true) {
      priority = 'text-white bg-danger';
    }
    todoList.innerHTML += ` <div class="col-3">
           <div class="card ${priority}" style="width: 18rem;">
           <div class="card-header d-flex justify-content-between"><h5 >${newtodo.title}</h5><i class="fas fa-times"></i></div>
    
           <div class="card-body">
          <p>${newtodo.description}</p>              
      
                 </div>
              </div>
        </div> `;
    this.closeModal();
  }

  removeFromUI(target) {
    target.remove();
  }
}
