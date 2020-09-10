const {
    numbers: {
        uptoNine,
        tenToNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper')



const divisor = 100
const input = 211
const centenas = parseInt(input/divisor)
const resto = input%divisor
const dezenas = parseInt(resto/10)
const exceção = ''
const unidades = resto%10
let resultado =''

 if (dezenas == 1) {
    

    resultado = `${hundreds[centenas]} e ${tenToNineteen[unidades]}`

} else {

    resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]}`
    
} 







console.log(resultado)