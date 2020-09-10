const {
    numbers: {
        uptoNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper')

let centenas;
let dezenas;
let unidades;

function extenso(input) {

    n = ('000000000' + input).substr(-9).match(/^(\d{3})(\d{3})(\d{3})$/);

    if (n[1].charAt(0) == 1 && n[1].charAt(1) && n[1].charAt(2) == 0) {

        console.log(hundreds[0])

        /* let hundredPosition = n[1].charAt(0)
        console.log(hundreds[hundredPosition]) */

    } if (n[1].charAt(0) == 1 && n[1].charAt(1) && n[1].charAt(2) > 0)

        console.log(hundreds[1])

    /* if (n[1].charAt(0) == 0 && n[1].charAt(1) > 0) {

        let tenPosition = n[1].charAt(1)
        console.log(tens[tenPosition])
        dezenas = tens[tenPosition]
    }

    if (n[1].charAt(0) == 0 && n[1].charAt(1) == 0) {

        let unit = n[1].charAt(2)
        console.log(uptoNineteen[unit])
        unidades = uptoNineteen[unit]

    } */

};


extenso(123456789)

