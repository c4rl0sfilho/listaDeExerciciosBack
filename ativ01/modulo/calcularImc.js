/*
* Objetivo: Calcular Imc e classificar 
* Data: 13/09/2023 
* Autor: Carlos Eduardo
* Versão: 1.0
*/

let peso;
let altura
let imc
let statusPeso
let statusCalculo = false


function gerarImc(peso, altura) {
    if(altura == '' || peso == '')
    console.log('Error: Todas as notas devem ser preenchidas')
    else if(isNaN(altura.replace(',','.')) || isNaN(peso.replace(',','.')))
    console.log('Error: Só é permitido valores numericos')
    else{

        let  imc = Number(peso.replace(',','.')) / (Number(altura.replace(',','.')) * Number(altura.replace(',','.')))
        
        
        if (imc < 18.5){
            statusPeso = 'Abaixo do peso'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta ${statusPeso}`)
            statusCalculo = true
        }else if(imc > 18.5 && imc < 24.9){
            statusPeso = 'Peso ideal'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta com ${statusPeso}`)
            statusCalculo = true
        }
        else if(imc > 25 && imc < 29.9){
            statusPeso = 'Acima do peso'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta ${statusPeso}`)
            statusCalculo = true
        }
        else if(imc > 30 && imc < 34.9){
            statusPeso = 'Obesidade I'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta com ${statusPeso}`)
            statusCalculo = true
        }
        else if(imc > 35 && imc < 39.9){
            statusPeso = 'Obesidade II'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta com ${statusPeso}`)
            statusCalculo = true
        }
        else if(imc > 40 ){
            statusPeso = 'Obesidade III'
            console.log(`Seu imc é ${imc.toFixed(2)} e você esta com ${statusPeso}`)
            statusCalculo = true
        }
    }
        return statusCalculo
}

module.exports = {
    gerarImc
}
