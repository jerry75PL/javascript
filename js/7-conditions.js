    'use strict';



    var x = 1;
    if (x == 1) {

        console.log('Liczba równa się 1');
    }

    var wzrostMateusz = 180;
    var wzrostOlgi = 170;

    if (wzrostMateusz > wzrostOlgi) {
        console.log("olga jest niższa :) prosty if");

    }

    if (wzrostOlgi > wzrostMateusz) {

        console.log("olga jest wyższa :)if 2");

    } else {

        console.log("Olga jest niższa else");
    }


    var wzrostMateusz = 170;
    var wzrostOlgi = 170;

    if (wzrostOlgi > wzrostMateusz) {

        console.log("olga jest wyższa 1");

    } else if (wzrostOlgi == wzrostMateusz) {

        console.log("Olga jest tak wysoka jak Mateusz 2");

    } else {

        console.log("Olga jest niższa 3");
    }



    var kolor = 'zielony';

    switch (kolor) {
        case 'czerwony':
            console.log('kolor czerwony');
            break;
        case 'zielony':
            console.log('kolor zielony');
            break;
        case 'niebieski':
            console.log('kolor niebieski');
            break;
        default:
            console.log('inny kolor');

    }