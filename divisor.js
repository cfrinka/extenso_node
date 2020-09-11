const {
    numbers: {
        uptoNine,
        tenToNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper');
const rs = require('readline-sync')


const userInputReais = 512
const userInputCentavos = 12

function extensoReais(input) {

    const divisor = 100
    const centenas = parseInt(input/divisor)
    const resto = input%divisor
    const dezenas = parseInt(resto/10)
    const unidades = resto%10
    let resultado =''
    
    if (dezenas == 1) {
        
        
        resultado = `${hundreds[centenas]} e ${tenToNineteen[unidades]} reais`
        console.log(resultado)

    } else {
        
        resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]} reais`
        console.log(resultado)
    } 
    
}

function extensoCentavos(input) {
    const divisor = 10
    const dezenas = parseInt(input/10)
    const unidades = userInputCentavos%10
    let resultado =''
    
    if (dezenas == 1) {
        
        
        resultado = `e ${tenToNineteen[unidades]} centavos`
        console.log(resultado)

    } if(dezenas > 1) {
        
        resultado = `e ${tens[dezenas]} e ${uptoNine[unidades]} centavos`
        console.log(resultado)
    } else {
        resultado = `e ${uptoNine[unidades]}`
    }
    
}




extensoReais(userInputReais)
extensoCentavos(userInputCentavos)






