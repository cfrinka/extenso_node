const {
    numbers: {
        uptoNineteen,
        tens,
        hundreds,

    }
} = require('./enumhelper')

function extenso(input) {
    n = ('000000000' + input).substr(-9).match(/^(\d{3})(\d{3})(\d{3})$/);

    switch(n[1].chartAt(0)){
        case 1: 
        let hundredPosition = n[1].chartAt(0)
        console.log(hundreds[hundredPosition])
        break;

    }

    extenso(123456789)
        


























}