//Escreva um algoritmo que leia um número inteiro via teclado e mostre na 
// tela uma mensagem indicando se este número é par ou ímpar e se o número é 
// positivo ou negativo. 

const readline = require("readline-sync");

let x = readline.questionInt("Digite um número inteiro: ");


if(x % 2 == 0){
    if(x > 0){
        console.log("O número ", x, "  é par e positivo.");
    }else if(x < 0){
        console.log("O número ", x, " é par e negativo.")
    }else{
        console.log(" O número é igual a zero.")
    }
}else{
    if(x > 0){
        console.log("O numero ", x, " é ímpar e positivo");
    }else if(x < 0){
        console.log("O número ", x, " é ímpar e negativo.")
    }
}








