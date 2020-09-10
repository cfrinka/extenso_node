const {
    numbers:{
            uptoTwenty,
            tens,
            hundreds
        }
    } = require('./enumhelper')


function extenso(num) {
    if ((num = num.toString()).length > 9)
        return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    console.log(n)
    if (!n)
        return;
    let str = '';
    str += (n[1] != 0) ? (uptoTwenty[Number(n[1])] || tens[n[1][0]] || hundreds[n[5][0]] + ' ' + uptoTwenty[n[1][1]]) + ' milhões ' : '';
    str += (n[2] != 0) ? (uptoTwenty[Number(n[2])] || tens[n[2][0]] || hundreds[n[6][0]] + ' ' + uptoTwenty[n[2][1]]) + ' mil ' : '';
    str += (n[3] != 0) ? (uptoTwenty[Number(n[3])] || tens[n[3][0]] || hundreds[n[7][0]] + ' ' + hundreds[n[3][1]]) : 'cem ';
    str += (n[4] != 0) ? (uptoTwenty[Number(n[4])] || tens[n[4][0]] || hundreds[n[8][0]] + ' ' + uptoTwenty[n[4][1]]) : '';
    str += (n[5] != 0) ? ((str != '') ? ' e ' : '') + (uptoTwenty[Number(n[5])] || tens[n[5][0]] + ' ' + uptoTwenty[n[5][1]]) : '';

    console.log(str)
    return;
}

extenso(4563214789)