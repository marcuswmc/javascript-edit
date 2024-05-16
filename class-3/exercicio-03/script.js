let titulo = 'Isto é um título longo de um livro'
console.log(titulo.length)

const alterarTitulo = titulo.replace('livro', 'diario')
console.log(alterarTitulo)

const novoTitulo = alterarTitulo + ' mas não faz mal porque não é uma seca'
console.log(novoTitulo)

console.log(novoTitulo.slice(0, 4))