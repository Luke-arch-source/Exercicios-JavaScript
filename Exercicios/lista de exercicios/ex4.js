//Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do 
// produto entre o n1 e n2 pelo produto entre o n3 e o n4.





const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o primeiro número: ");
let n2 = leia.questionFloat("Digite o segundo número: ");
let n3 = leia.questionFloat("Digite o terceiro número: ");
let n4 = leia.questionFloat("Digite o quarto número: ");

let calculo = (n1 * n2) - (n3 * n4);

console.log("Diferença: ", calculo);