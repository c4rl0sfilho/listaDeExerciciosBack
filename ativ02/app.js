/***********************************************************************************
 * Objeto: Criar um sistema que gerencie as médias escolares de uma universidade
 * Autor: Carlos
 * Data: 27/09/2023
 * Versão: 1.0
 ***********************************************************************************/
var readline = require('readline')
var funcoes = require('./modulo/funcoes.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question(`Nome do aluno: `, function(nomeA){
    var nomeAluno = nomeA
    entradaDeDados.question(`Sexo do aluno [F] ou [M]: `, function(sexoA){
        var sexoAluno = sexoA
        entradaDeDados.question(`Nome do professor: `, function(nomeP){
            var nomeProfessor = nomeP
            entradaDeDados.question(`Sexo do professor [F] ou [M]: `, function(sexoP){
                var sexoProfessor = sexoP
                entradaDeDados.question(`Qual curso ${nomeA} frequenta: `, function(curso){
                    var nomeCurso = curso
                    entradaDeDados.question(`Qual disciplina ${nomeP} leciona: `, function(disciplina){
                        var nomeDisciplina = disciplina
                        entradaDeDados.question(`Nota 1:  `, function(nota1){
                            var n1 = nota1        
                            entradaDeDados.question(`Nota 2: ` , function(nota2){
                                var   n2 = nota2
                                entradaDeDados.question(`Nota 3: `, function(nota3){
                                    var n3 = nota3
                                    entradaDeDados.question(`Nota 4: ` , function(nota4){
                                        var n4 = nota4
                                        
                                        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeDisciplina == '' ||nomeCurso == ''|| sexoProfessor == '' || sexoAluno == '' || nomeProfessor == '' || nomeAluno == ''){
                                            console.log('ERRO | É obrigatorio a entrada de todos os dados') 
                                            entradaDeDados.close()
                                        }else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                                            console.log('ERRO | É obrigatorio a entrada de dados somente com números')
                                            entradaDeDados.close()
                                        }else if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
                                            console.log('ERR0 | A nota informada exede o valor maximo ou minimo de dados')
                                        }else{
                                            var resultadoMedia = funcoes.media(nota1,nota2,nota3,nota4) 
                                            var identificarA = funcoes.verificarSexoA(sexoAluno)
                                            var identificarP = funcoes.verificarSexoP(sexoProfessor)
                                            var situacao = funcoes.situacaoMedia(resultadoMedia, sexoA)
                                            
                                            if (resultadoMedia >= 70){
                                                console.log(`${identificarA} ${nomeA.toUpperCase()} foi ${situacao} na disciplina ${disciplina.toUpperCase()}.`)
                                                console.log(`Curso: ${nomeCurso.toUpperCase()}.`)
                                                console.log(`${identificarP} ${nomeProfessor.toUpperCase()}.`)
                                                console.log(`Notas do aluno: ${n1}, ${n2}, ${n3}, ${n4}.`)
                                                console.log(`Media final: ${resultadoMedia}`)
                                                console.log('')
                                                entradaDeDados.close()
                                                

                                            }else if(resultadoMedia >= 50 && resultadoMedia < 69){

                                                entradaDeDados.question('Nota do Exame: ' , function(exame){
                                                    var notaExame = exame
                                                    var situacaoE = funcoes.situacaoExame(resultadoMedia, notaExame, sexoA)
                                                    console.log(identificarA + nomeA.toUpperCase() + ' foi ' + situacaoE + ' na disciplina ' + disciplina.toUpperCase()+'.')
                                                    console.log('Curso: ' + nomeCurso.toUpperCase()+'.')
                                                    console.log(identificarP + nomeProfessor.toUpperCase()+'.')
                                                    console.log('Notas do aluno: '+n1+','+n2+','+n3+','+n4+','+exame+'.')
                                                    console.log('Media: '+resultadoMedia)
                                                    console.log('Nota final com Exame: '+ exame)
                                                    console.log('')
                                                    entradaDeDados.close()
                                                
                                                })

                                            }else if(resultadoMedia < 50){
                                                console.log(identificarA + nomeA.toUpperCase() + ' foi ' + situacao + ' na disciplina ' + disciplina.toUpperCase()+'.')
                                                console.log('Curso: ' + nomeCurso.toUpperCase()+'.')
                                                console.log(identificarP + nomeProfessor.toUpperCase()+'.')
                                                console.log('Notas do aluno: '+n1+','+n2+','+n3+','+n4+'.')
                                                console.log('Media final: '+resultadoMedia)
                                                console.log('')
                                                entradaDeDados.close()
                                              
                                            }
                                        }
                                    })                               
                                })          
                            })
                        })
                    })
                })                         
            })       
        }) 
    })
})