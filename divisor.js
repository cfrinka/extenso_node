const {
    numbers: {
        uptoNine,
        tenToNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper');
const rs = require ('readline-sync')

const userInput = rs.questionInt('Digite um valor: ')

function extenso(input) {

    const divisor = 100
    const centenas = parseInt(input/divisor)
    const resto = input%divisor
    const dezenas = parseInt(resto/10)
    const unidades = resto%10
    let resultado =''
    
    if (dezenas == 1) {
        
        
        resultado = `${hundreds[centenas]} e ${tenToNineteen[unidades]}`
        console.log(resultado)

    } else {
        
        resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]}`
        console.log(resultado)
    } 
    
}

extenso(userInput)






