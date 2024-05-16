// const fullName = function() {
//   return "Marcus Vinicius Oliveira da Silva"
// }
// console.log(fullName())

// const sum = function(a, b) {
//   return a + b;
// }
// console.log(sum(5, 6));


// (function(){
//   console.log('Marcus Vinicius Oliviera da Silva')
// })();

// (function(a, b) {
//  console.log(a + b)  
// })(5, 6);



// function outraDivisao(a) {
//   return function() {
//     return a / 2;
//   }
// }
// console.log(outraDivisao(5)())


// function dividePor2(a) {
//   return function(b) {
//     return a / b;
//   }
// }
// const resultado = dividePor2(5);
// console.log(resultado(2))


function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const newLivro1 = new Livro('Os três mosqueteiros', 'Alexandre Dumas')
const newLivro2 = new Livro('Os Maias', 'Eça de Queiroz')
console.log(newLivro1, newLivro2)

newLivro1.titulo = 'O Conde de Monte Cristo'
console.log(newLivro1)




