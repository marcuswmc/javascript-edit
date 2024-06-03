const createSpan = document.createElement('span')
createSpan.textContent = 'First Span'
document.body.append(createSpan)
createSpan.classList.add('primeira-classe')

createSpan.addEventListener('click', function(event){
  if(event.type === 'click'){
    createSpan.classList.remove('primeira-classe')
    createSpan.classList.add('segunda-classe')
  }
})
 

