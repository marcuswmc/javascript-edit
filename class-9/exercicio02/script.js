const form = document.querySelector('#myForm')

form.addEventListener('submit', function(event){
  event.preventDefault()

  const formData = new FormData(event.target)

  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('mensagem')

  console.log('Nome: ', name)
  console.log('Email: ', email)
  console.log('Mensagem: ', message)
})

