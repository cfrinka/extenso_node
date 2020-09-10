const input = '1,10'
const split = input.split(',')
const reais = +split[0]
const centavos = +split[1]
const reaisSplit = ("" + reais).split('').map(Number)
const centavosSplit = ("" + centavos).split('').map(Number)
const reaisArray = Array.from(reaisSplit)
const centavosArray = Array.from(centavosSplit)

let umADezenove = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze','doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
let dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'oitenta','noventa']
let centenas = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

