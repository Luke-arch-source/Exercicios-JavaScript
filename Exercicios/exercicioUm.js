//Desenvolva um algoritmo que leia 3 valores 
//inteiros A, B e C e imprima na tela 
// se a soma de A + B é maior, menor ou igual a C.

const readline = require("readline-sync");

let a = readline.questionInt("Digite o número A: ");
let b = readline.questionInt("Digite o número B: ");
let c = readline.questionInt("Digite o número C: ");

let soma = a + b;
console.log("A soma de A e B é igual a ", soma);

if(soma == c){
    console.log(a, " + ", b," = ", c);
    console.log("A soma de A e B é igual a C.");
}else if(soma > c){
    console.log(a, " + ", b," > ", c);
    console.log("A soma de A e B é maior do que C.");
}else{
    console.log(a, " + ", b," < ", c);
    console.log("A soma de A e B é menor do que C.");
}










