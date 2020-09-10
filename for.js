const input = '1,10'
const split = input.split(',')
const reais = +split[0]
const centavos = +split[1]
const reaisSplit = ("" + reais).split('').map(Number)
const centavosSplit = ("" + centavos).split('').map(Number)
const reaisArray = Array.from(reaisSplit)
const centavosArray = Array.from(centavosSplit)
const fimDoArray = reaisArray.length
let returnStringReais =''
let returnStringCentavos = ''

for (i = 0; i < reaisArray.length; i++) {
    if (reaisArray[i] === 1){
        returnStringReais = 'um real'
    } else {
        return
    }

}

for (i = 0; i < centavosArray.length; i++) {
    if (centavosArray[i] === 1) {
        returnStringCentavos === "dez centavos"
    } else {
        return
    }
}

console.log(`${returnStringReais} e ${returnStringCentavos}`)












/* console.log(reaisArray, centavosArray) */