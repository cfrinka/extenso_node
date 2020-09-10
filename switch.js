const rs = require('readline-sync')

const input = '19,25'
const split = input.split(',')
const reais = +split[0]
const centavos = +split[1]
const reaisArray = ("" + reais).split('').map(Number)
const centavosArray = ("" + centavos).split('').map(Number)
const unidadeCentavos = centavosArray[1]
const dezenaCentavos = centavosArray[0]



switch (reaisArray.length) {
    case 0:
        console.log('0 reais');
        break;
    case 1:
        switch (reaisArray[0]) {
            case 1:
                console.log('um real');
                break;
            case 2:
                console.log('dois reais');
                break;
            case 3:
                console.log('três reais');
                break;
            case 4:
                console.log('quatro real');
                break;
            case 5:
                console.log('cinco reais');
                break;
            case 6:
                console.log('seis reais');
                break;
            case 7:
                console.log('sete reais');
                break;
            case 8:
                console.log('oito reais');
                break;
            case 9:
                console.log('nove reais');
                break;
        }
        break;

    case 2:
        switch (reaisArray.join('')) {
            case '10':
                console.log('dez reais');
                break;
            case '11':
                console.log('onze reais');
                break;
            case '12':
                console.log('doze reais');
                break;
            case '13':
                console.log('treze real');
                break;
            case '14':
                console.log('quatorze reais');
                break;
            case '15':
                console.log('quinze reais');
                break;
            case '16':
                console.log('dezesseis reais');
                break;
            case '17':
                console.log('dezessete reais');
                break;
            case '18':
                console.log('dezoito reais');
                break;
            case '19':
                console.log('dezenove reais');
                break;
        }
        break;
    case 3:
        switch (reaisArray[0]) {
            case 1:
                console.log('um real');
                break;
            case 2:
                console.log('dois reais');
                break;
            case 3:
                console.log('três reais');
                break;
            case 4:
                console.log('quatro real');
                break;
            case 5:
                console.log('cinco reais');
                break;
            case 6:
                console.log('seis reais');
                break;
            case 7:
                console.log('sete reais');
                break;
            case 8:
                console.log('oito reais');
                break;
            case 9:
                console.log('nove reais');
                break;
        }
        break;
}









