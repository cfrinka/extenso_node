const {
    numbers:{
            uptoNineteen,
            tens,
            hundreds,
            
        }
    } = require('./enumhelper')


    let resultado = ''


    function extenso(input) {

        n = ('000000000' + input).substr(-9).match(/^(\d{3})(\d{3})(\d{3})$/);

                
        if ((n[1].charAt(0) == 0 && n[1].charAt(1) == 0) || (n[1].charAt(0) == 0 && n[1].charAt(1) > 0) || n[1].charAt(0) > 1) {

            let centenas = n[1].charAt(0)
            let unit = n[1].charAt(2)
            let dezenas = n[1].charAt(1)
           
            resultado = hundreds[centenas], tens[dezenas], uptoNineteen[unit]

            console.log(resultado)
        }


        
        
        

       
    };


    extenso(123456789)
    