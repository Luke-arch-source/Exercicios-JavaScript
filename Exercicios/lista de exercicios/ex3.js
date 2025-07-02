//Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, 
// as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. 
// Veja o exemplo abaixo:

const leia = require("readline-sync");

let salariob = leia.questionFloat("Digite o salário bruto: ");
let adn = leia.questionFloat("Digtite o adicional noturno: ");
let he = leia.questionFloat("Digite o número de horas extras: ");
let descontos = leia.questionFloat("Digite o valor do desconto: ");

let salariol = salariob + adn + (he * 5) - descontos

console.log("O salário líquido é ", salariol);




