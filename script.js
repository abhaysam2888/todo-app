// Retrieve the input field and buttons
const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const date = document.querySelector('#date');
const todoList = document.querySelector('#todoList');


// Initialize empty array and display existing todos from localStorage
 let arr = JSON.parse(localStorage.getItem('todos')) || [];
 displayItem()

//  we can use the below code if not underStand the above code

// window.addEventListener('load', () => {
//   let todos = JSON.parse(localStorage.getItem('todos'))
//   todos ? arr = todos : console.log(false);
//   displayItem()
// })

function addTodo() {
    let todoText = todoInput.value
    let todoDate = date.value
    if (todoText.length !== 0 && todoDate.length !== 0){

      arr.push({item: todoText, dueDate: todoDate});

      localStorage.setItem('todos', JSON.stringify(arr))

      todoInput.value = ""
      date.value = ""
      displayItem()
    }
}



 // Function to delete a todo
 function deleteTodo(index) {
  arr.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(arr));
  displayItem();
}
function displayItem() {
    let newHtml = '';
    arr.forEach((item, index) => {
    let items = item.item
    let dates = item.dueDate
    newHtml += `
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px;">
    <span>${items}</span>
    <span>${dates}</span>
    <button onclick="deleteTodo(${index})">Delete</button>
    </div>
    `
  })
  todoList.innerHTML = newHtml;
}

addBtn.addEventListener('click', addTodo)