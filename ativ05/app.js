var readline = require('readline')
var parOuImpar = require('./modulo/paresImpares.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Selecione o número inicial [0 - 500]: ', function(numeroInicial){

    let nI = numeroInicial

    entradaDeDados.question('Selecione o número final [100 - 1000]: ', function(numeroFinal) {

        let nF = numeroFinal

        entradaDeDados.question('Você gostaria de separar seus números por: \n[1 - Ímpares] \n[2 - Pares] \n[3 - Pares e Ímpares]\n', function(respostaUsuario){

            let opcao = respostaUsuario

            parOuImpar.verificarValores(nI, nF, opcao)

        })

    })

})