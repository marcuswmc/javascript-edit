var estudantes = [
  { id: 1, nome: 'João', idade: 20 },
  { id: 2, nome: 'Maria', idade: 22 },
  { id: 3, nome: 'Pedro', idade: 18 },
  { id: 4, nome: 'Ana', idade: 21 }
]

// FILTRAR POR ID
const estudanteId = (id = 1) => estudantes.find(estudante => estudante.id === id)
console.log(estudanteId())

// LISTAR ESTUDANTES + TEMPLATE STRING
const nomesEstudantes = () => {
  return estudantes.map(estudante => `Nome do estudante: ${estudante.nome}`)
}
console.log(nomesEstudantes())

// FILTRAR POR IDADE
const filtrarPorIdade = (idade = 17) => estudantes.filter((estudante) => estudante.idade > idade)
console.log(filtrarPorIdade())


 