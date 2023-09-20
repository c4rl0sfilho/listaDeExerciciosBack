/*
* Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
* Data: 13/09/2023 
* Autor: Carlos Eduardo
* Versão: 1.0
*/

let nomeAluno
let nomeProfessor
let sexoAluno
let sexoProfessor
let nomeCurso
let nomeDisciplina
let statusAluno
let statusExame
let media
let nota1
let nota2
let nota3
let nota4
let notaExame

function gerarMedia(nota1, nota2, nota3, nota4){

    
    if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 ){
        console.log('Error: Os valores dever ser inferiores a 100')
    }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
        console.log('Error: Todas as notas devem ser preenchidas')
    else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
        console.log('Error: Todos os valores devem ser preenchidos corretamente')
     else{
        media = (Number(nota1).replace(',','.') + Number(nota2).replace(',','.') +Number(nota3).replace(',','.') +Number(nota4).replace(',','.')) / 4
     }

     return media
}
function gerarRelatorio(nomeAluno, nomeCurso, nomeDisciplina,statusExame, nomeProfessor, nota1, nota2, nota3, nota4, sexoAluno, sexoProfessor, statusAluno, notaExame) {
    
    if(media <= 70)
        statusAluno = "Aprovado"
    else if(media >= 50)
        statusAluno = "Reprovado"
    else if(media < 50 || media > 70){
        statusAluno = "Exame"
        statusExame = (media.replace(',','.') + notaExame.replace(',','.')) / 2
    }

    if(sexoAluno == 'masculino')
        sexoAluno = 'Aluno'
    else
        sexoAluno = 'Aluna'
    if(sexoProfessor == 'masculino')
        sexoProfessor = 'Professor'
    else
        sexoProfessor = 'Professora'
        
        
        
    console.log(`${sexoAluno} foi ${statusAluno} na ${nomeDisciplina}`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${sexoProfessor}: ${nomeProfessor}`)
    console.log(`Notas do ${sexoAluno}: ${nota1},${nota1},${nota1},${nota1},${notaExame}`)
    console.log(`Média final: ${media}`)
    console.log(`Média final do Exame: ${statusExame}`)

}
module.exports = {
    gerarMedia,
    gerarRelatorio
}