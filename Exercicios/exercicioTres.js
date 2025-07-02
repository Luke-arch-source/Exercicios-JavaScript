//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
// (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
// A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.



const readline = require("readline-sync");


let numero = readline.questionInt("Digite o código do produto: ");

let qta = readline.questionInt("Digite a quantidade do produto: ");

let preco;

switch(numero){
    case 1:
        preco = 10 * qta;
        console.log("Produto: Cachorro Quente");
        console.log("Valor total: R$", preco, ",00");
        break;
    case 2:
        preco = 15 * qta;
        console.log("Produto: X-Salada");
        console.log("Valor total: R$", preco, ",00");
        break;
    case 3:
        preco = 18 * qta;
        console.log("Produto: X-Bacon");
        console.log("Valor total: R$", preco, ",00");
        break;
    case 4:
        preco = 12 * qta;
        console.log("Produto: Bauru");
        console.log("Valor total: R$", preco, ",00");
        break;
    case 5:
        preco = 8 * qta;
        console.log("Produto: Refrigerante");
        console.log("Valor total: R$", preco, ",00");
        break;
    case 6:
        preco = 13 * qta;
        console.log("Produto: Suco de laranja");
        console.log("Valor total: R$", preco, ",00");
        break;

}




