const soma = (a, b) => {
  const resultado = a + b

  const promise = new Promise((resolve, reject) => {
    if(resultado % 2 === 0) {
      resolve(`A soma é par: ${resultado}`)
    } else {
      reject(`A soma é impar: ${resultado}`)
    }
  })

  promise
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))

}


