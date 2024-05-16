function calcPercetage(preco, desconto) {
  const percentage = (preco * desconto) / 100

  if(percentage <= 10) {
    return preco + percentage
  } else if (percentage > 10 && percentage < 30) {
    return preco - percentage
  } else if (percentage === 0) {
    return preco * 2
  }
}

console.log(calcPercetage(200, 10))
