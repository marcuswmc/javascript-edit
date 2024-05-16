
//FUNÇÃO ANONIMA
(function() {
 console.log('isto foi demasiado rápido!')
})();

// CLOSURE
function form() {
  const label = 'Nome: '
  return function(input) {
   return  label + input
  }
}
 console.log(form()('Marcus'))

//FUNÇÃO CONSTRUTORA
function Instrumento(nome, valor) {
  this.nome = nome;
  this.valor = valor;
}
const novoInstrumento = new Instrumento('Guitarra Acustica', 150)
novoInstrumento.valor = 2.5
console.log(novoInstrumento)
console.log(parseInt(novoInstrumento.valor))


