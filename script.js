let inputText = document.querySelector('#inputText')
let inputDate = document.querySelector('#inputDate')
let addBtn = document.querySelector('#addBtn')
let todoList = document.querySelector('#todoList')

let todoArray = []

window.addEventListener('load', () => {
  
    let StoreTodo = JSON.parse(localStorage.getItem('todos'))

    StoreTodo ? todoArray = StoreTodo : console.log('emty localStorage');

    displayItem()
})
function addTodo() {
  let text = inputText.value
  let date = inputDate.value
  if (inputText.value.length !== 0 && inputDate.value.length !== 0) {
    todoArray.push({item: text, todoDate: date})
    localStorage.setItem('todos', JSON.stringify(todoArray))
    inputText.value = ""
    inputDate.value = ""
  }
  displayItem()
}

function displayItem() {
  let newHtml = "";

  todoArray.forEach((item, index) => {
    let todoText = item.item
    let todoDate = item.todoDate
    let textId = `input_${index}`
    let dateId = `input_${index}_date`

    newHtml += `
        <div style="margin-top: 10px;">
            <input type="text" name="text" id="${textId}" value=${todoText}>
            <input type="date" name="date" id="${dateId}" value=${todoDate}>
            <button id="updateBtn" onclick="updateTodo(${index}, '${textId}', '${dateId}')" class="edit">Save</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        </div>
    `
  })
  todoList.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoArray.splice(index, 1)
  localStorage.setItem('todos', JSON.stringify(todoArray))
  displayItem()
}

function updateTodo(index, textId, dateId) {
  let textInput = document.querySelector(`#${textId}`)
  let date = document.querySelector(`#${dateId}`)

  todoArray[index].item = textInput.value
  todoArray[index].todoDate = date.value

  localStorage.setItem('todos', JSON.stringify(todoArray))
  displayItem()
}

addBtn.addEventListener('click', addTodo)