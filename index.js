const rs = require('readline-sync')

const userStartingNumber = rs.questionFloat('Digite um valor: R$')



function numberToWords() {
    const {
        numbers: {
            uptoNine,
            tenToNineteen,
            tens,
            hundreds,

        }
    } = require('./enumhelper');

    const userNumberTreated = (userStartingNumber + '').replace('.', '')

    n = ('000000000' + userNumberTreated).substr(-8).match(/^(\d{3})(\d{3})(\d{2})$/);




    const userInputThousands = n[1]
    const userInputReais = n[2]
    const userInputCents = n[3]



    function wordsReais(input) {

        if (input == 000) {
            return
        }

        const divisor = 100
        const userHundreds = parseInt(input / divisor)
        const remainder = input % divisor
        const userTens = parseInt(remainder / 10)
        const userUnits = remainder % 10
        let result = ''

        if (userTens == 1) {


            result = `${hundreds[userHundreds]} e ${tenToNineteen[userUnits]} reais`
            console.log(result)

        } else {

            result = `${hundreds[userHundreds]} e ${tens[userTens]} e ${uptoNine[userUnits]} reais`
            console.log(result)
        }

    }

    function extensoThousands(input) {

        if (input == 000) {
            return
        }

        const divisor = 100
        const userHundreds = parseInt(input / divisor)
        const remainder = input % divisor
        const userTens = parseInt(remainder / 10)
        const userUnits = remainder % 10
        let result = ''

        if (userHundreds == 0 && userTens == 0) {
            result = `${uptoNine[userUnits]} mil`
            console.log(result)

        }
        else if (userTens == 1) {

            result = `${hundreds[userHundreds]} e ${tenToNineteen[userUnits]} mil`
            console.log(result)

        } else {

            result = `${hundreds[userHundreds]} e ${tens[userTens]} e ${uptoNine[userUnits]} mil`
            console.log(result)
        }

    }

    function extensoCents(input) {
        const userTens = parseInt(input / 10)
        const userUnits = userInputCents % 10
        let result = ''

        if (userTens == 1) {

            result = `e ${tenToNineteen[userUnits]} centavos`
            console.log(result)

        } if (userTens > 1) {

            result = `e ${tens[userTens]} e ${uptoNine[userUnits]} centavos`
            console.log(result)
        } else {
            result = `e ${uptoNine[userUnits]}`
        }

    }



    extensoThousands(userInputThousands)
    wordsReais(userInputReais)
    extensoCents(userInputCents)





}

numberToWords()



