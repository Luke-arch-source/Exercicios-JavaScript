



const readline = require("readline-sync");

const leia = require("readline-sync");

let n1 = readline.questionInt("Digite o primeiro número real: ");
let n2 = readline.questionInt("Digite o segundo número real: ");
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
}




