const soma = (a, b) => {
  const resultado = a + b

  return new Promise((resolve, reject) => {
    if(resultado % 2 === 0) {
      resolve(`A soma é par: ${resultado}`)
    } else {
      reject(`A soma é impar: ${resultado}`)
    }
  }) 
}

async function results(a, b) {
  try {
    const result = await soma(a, b)
    console.log(result)
  } catch(e) {
    console.log(e)
  }  
}

results(5,2)
