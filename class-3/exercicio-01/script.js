// EXERCICIO 01

paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia']

// for(let i = 0; i < paises.length; i++) {
//   console.log(paises[i])
// }

function numberOfItens() {
  return paises.length;
}
console.log(numberOfItens())

paises.unshift('Portugal')
paises.push('Espanha')
console.log(paises)

function newPaises() {
  return paises.slice(10, 13)
}
console.log(newPaises())

console.log(paises.join('-'))