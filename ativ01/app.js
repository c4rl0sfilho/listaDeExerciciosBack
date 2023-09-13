var readline = require('readline');
var calcular = require('./modulo/calcularImc');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 entradaDados.question('Qual o seu peso? ', function(peso){
        entradaDados.question('Qual a sua altura? ', function(altura){
            
            imc = calcular.gerarImc(peso, altura)
                if(imc)
                console.log(imc)
        })
 })