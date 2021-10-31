const [formElement, inputElement, olElement,submitElement] = [document.querySelector('form'),document.querySelector('input'), document.querySelector('ol')]


formElement.addEventListener('submit', function(event){
  event.preventDefault()

  const liElement =  document.createElement('li')
  const inputElementValue = formElement.querySelector('input')
  liElement.textContent= inputElementValue.value
  inputElementValue.value='' 

  const checkboxElement =  document.createElement('input')
  checkboxElement.type='checkbox'
  liElement.append(checkboxElement)
  checkboxElement.addEventListener('click', function(){
    if(checkboxElement.checked){
      liElement.style.textDecoration = 'line-through';
    }
    else {
      liElement.style.textDecoration = 'none';
    }   
    
  })

  const deleteElement = document.createElement('input')
  deleteElement.type='button'
  deleteElement.value='Delete'
  deleteElement.style.backgroundColor = 'red'
  liElement.append(deleteElement)
  deleteElement.addEventListener('click', function(){
    liElement.remove()
  })
  
  olElement.append(liElement)  
  
})
  
  
  
  
