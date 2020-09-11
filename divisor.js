const {
    numbers: {
        uptoNine,
        tenToNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper');



const numeroDoUsuario = 12563
n = ('000000000' + numeroDoUsuario).substr(-8).match(/^(\d{3})(\d{3})(\d{2})$/);




const userInputMilhares = n[1]
const userInputReais = n[2]
const userInputCentavos = n[3]



function extensoReais(input) {

    if (input == 000) {
        return
    }

    const divisor = 100
    const centenas = parseInt(input / divisor)
    const resto = input % divisor
    const dezenas = parseInt(resto / 10)
    const unidades = resto % 10
    let resultado = ''

    if (dezenas == 1) {


        resultado = `${hundreds[centenas]} e ${tenToNineteen[unidades]} reais`
        console.log(resultado)

    } else {

        resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]} reais`
        console.log(resultado)
    }

}

function extensoMilhares(input) {

    if (input == 000) {
        return
    }

    const divisor = 100
    const centenas = parseInt(input / divisor)
    const resto = input % divisor
    const dezenas = parseInt(resto / 10)
    const unidades = resto % 10
    let resultado = ''

    if (centenas == 0 && dezenas == 0) {
        resultado = `${uptoNine[unidades]} mil`
        console.log(resultado)

    }
    else if (dezenas == 1) {

        resultado = `${hundreds[centenas]} e ${tenToNineteen[unidades]} mil`
        console.log(resultado)

    } else {

        resultado = `${hundreds[centenas]} e ${tens[dezenas]} e ${uptoNine[unidades]} mil`
        console.log(resultado)
    }

}

function extensoCentavos(input) {
    const divisor = 10
    const dezenas = parseInt(input / 10)
    const unidades = userInputCentavos % 10
    let resultado = ''

    if (dezenas == 1) {

        resultado = `e ${tenToNineteen[unidades]} centavos`
        console.log(resultado)

    } if (dezenas > 1) {

        resultado = `e ${tens[dezenas]} e ${uptoNine[unidades]} centavos`
        console.log(resultado)
    } else {
        resultado = `e ${uptoNine[unidades]}`
    }

}

extensoMilhares(userInputMilhares)
extensoReais(userInputReais)
extensoCentavos(userInputCentavos)









