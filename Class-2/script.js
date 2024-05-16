// console.log("FOR");
// for(let i = 0; i <= 10; i++) {
//   if(i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log("WHILE");
// let evenNumber = 0;
// while(evenNumber <= 10) {
//   if(evenNumber % 2 === 0) {
//     console.log(evenNumber);
//   }
//   evenNumber++;
// }

// console.log("DO WHILE");
// let evenNumber2 = 0;
// do {
//   if(evenNumber2 % 2 === 0) {
//     console.log(evenNumber2);
//   }
//   evenNumber2++;
// } while (evenNumber2 <= 10);

// function soma(a, b) {
 
//   return a + b;
// }
// console.log(soma(5, 5));

// function multiplicacao(a, b) {
//   return a * b;
// }
// console.log(multiplicacao(5, 5));

// function gerarPessoa(name, idade) {
//   return {
//     nome: name,
//     idade: idade
//   }
// }
// console.log(gerarPessoa('Marcus', 29));


const myArray = ['janeiro', 'fevereiro', 'março'];
console.log(myArray);

for(let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

const otherArray = new Array(3);
otherArray[0] = 'janeiro';
otherArray[1] = 'Fevereiro';
otherArray[2] = 'Março';

for(let i = 0; i < otherArray.length; i++) {
 console.log(otherArray[i]);
}