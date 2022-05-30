/*
nome: caractere
      numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       escreval ("Digite o seu nome:")
       leia (nome)
       escreval ("Digite um número:")
       leia (numero)
       
       escreval (nome, " : ",numero, 15)
*/
var nome, numero

nome= prompt("Digite o seu nome:")
numero= prompt("Digite o seu numero:")

document.getElementById("paragrafo").innerText = nome + " : " + numero