/****************************************************************************************************************************************************
* Objetivo: Realizar o calculo da fartorial
* Data: 27/09/2023
* Autor: Carlos Eduardo
* Versão: 1.0
****************************************************************************************************************************************************/

var readline = require('readline')
var fatorialApp = require('./modulo/fatorial.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Inseria o numero para descobrir seu fatorial: ', function(valorFatorial){

    fatorial = valorFatorial

    fatorialApp.calcularFatorial(fatorial)

})