var readline = require('readline');
var calcularMedia = require('./modulo/calcularMedia');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 entradaDados.question('Qual o nome do aluno: ', function(nomeAluno){
    entradaDados.question('Qual o nome do Curso',function(nomeCurso){
        entradaDados.question('Qual o nome da disciplina: ',function(nomeDisciplina))
    } )
 })