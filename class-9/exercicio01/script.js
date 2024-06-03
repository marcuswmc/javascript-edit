const captureEvent = (event) => {
  console.log(event)

  if(event.type === 'click'){
    event.target.setAttribute('class', 'clicked')
  } else if(event.type === 'mouseover'){
    event.target.setAttribute('class', 'hovered')
  }
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', captureEvent)
  button.addEventListener('mouseover', captureEvent)
})