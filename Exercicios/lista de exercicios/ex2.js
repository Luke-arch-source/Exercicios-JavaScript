//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
// exiba na tela a média final do participante. Veja o exemplo abaixo



const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite a nota 1: ");
let n2 = leia.questionFloat("Digite a nota 2: ");
let n3 = leia.questionFloat("Digite a nota 3: ");
let n4 = leia.questionFloat("Digite a nota 4: ");

let media = (n1 + n2 + n3 + n4) / 4;

console.log("A média final é igual ", media);





