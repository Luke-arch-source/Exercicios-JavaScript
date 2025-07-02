//Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na 
//sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. 
//Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!



const readline = require("readline-sync");

const leia = require("readline-sync");

let n1 = readline.questionFloat("Digite o primeiro número real: ");
let n2 = readline.questionFloat("Digite o segundo número real: ");
console.log("Operações matemáticas: Soma - 1, Subtração - 2, Multiplicação - 3, Divisão - 4");
let operacao = readline.questionInt("Digite o código da operação matemática desejada: ");
let result;
switch(operacao){
    case 1:
        result = n1 + n2;
        console.log(n1, " + ", n2, " = ", result);
        break;
    case 2:
        result = n1 - n2;
        console.log(n1, " - ", n2, " = ", result);
        break;
    case 3:
        result = n1 * n2;
        console.log(n1, " x ", n2, " = ", result);
        break;
    case 4:
        result = n1 / n2;
        console.log(n1, " / ", n2, " = ", result);
        break;
    default:
        consolge.log("Operação Inválida!");
}




