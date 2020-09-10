const {
    numbers:{
            uptoNineteen,
            tens,
            hundreds,
            
        }
    } = require('./enumhelper')


function extenso(num) {

    
    
    n = ('000000000' + num).substr(-9).match(/^(\d{3})(\d{3})(\d{3})$/);
    console.log(n)

    string = ''

    if (n[1] = 0) {
        return
    }

    else if (n[1] === 1) {
        string = `1 milhão `
    }


    else if (n[1] >= 2) {
        string = `${uptoTwenty[n[1]]} milhões`

    }
    console.log(string)
}

extenso(8000000)