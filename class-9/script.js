const allButtons = document.querySelectorAll("button")

allButtons[0].onmouseover = () => console.log('Mouse over button 1')
allButtons[1].onmouseout = () => console.log('Mouse over button 2')

allButtons[0].addEventListener('mouseover', () => console.log('Mouse over button 1'))
allButtons[1].addEventListener('mouseout', () => console.log('Mouse out button 2'))

setTimeout(() => {
  allButtons[0].setAttribute('id', 'newId')
  console.log(allButtons)
}, 3000)



