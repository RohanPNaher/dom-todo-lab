//Cache
const inpElement = document.getElementById('my-input')
const btnSubmitElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')
const btnResetElement = document.getElementById('reset-button')
const formElement = document.querySelector('form')




//Event Listeners
//Add to list
formElement.addEventListener('submit', event => {
  event.preventDefault()
  addList()
});

//Reset
formElement.addEventListener('reset', event => {
  event.preventDefault()
  init()
});

//Clean
ulElement.addEventListener('click', event => ulElement.removeChild(event.target));

//Functions
//init
init()

function init() {
  inpElement.value = ''
  ulElement.innerHTML = ''
  btnResetElement.setAttribute('hidden', true)
}

function addList () {
  let newListElement = document.createElement('li')
  newListElement.textContent = inpElement.value 
  if (inpElement.value !== '') {
    ulElement.appendChild(newListElement)
    inpElement.value = ''
  }
  btnResetElement.removeAttribute('hidden')
}