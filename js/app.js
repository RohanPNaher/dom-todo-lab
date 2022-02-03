//Cache
const inpElement = document.getElementById('my-input')
const btnSubmitElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')
const btnResetElement = document.getElementById('reset-button')

console.log(inpElement, btnSubmitElement, ulElement, btnResetElement)
//Add to list
btnSubmitElement.addEventListener('click', event => {
  let newListElement = document.createElement('li')
  newListElement.textContent = inpElement.value 
  if (inpElement.value !== '') {
    ulElement.appendChild(newListElement)
    inpElement.value = ''
  }
});

//Reset
btnResetElement.addEventListener('click', event => {
  let allListElements = document.querySelectorAll('li')
  allListElements.forEach(arg => ulElement.removeChild(arg))
});

//Clean
ulElement.addEventListener('click', event => {
  ulElement.removeChild(event.target)
});