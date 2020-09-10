const {
    numbers: {
        uptoNine,
        tenToNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper')

const divisor = 100
const input = 222
const centenas = parseInt(input/divisor)
const resto = input%divisor
const dezenas = parseInt(resto/10)
const exceção = ''
const unidades = resto%10
let resultado =''

/* if (dezenas == 1) {
    exceção = tenToNineteen[unidades]
    resultado = `${hundreds[centenas]} e ${exceção}`

} else {
    return;
} */



resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]}`




console.log(resultado)