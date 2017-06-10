'use strict';
/*funkcje*/

function multiply(parametr1, parametr2, parametr3) {
    var results;
    results = parametr1 * parametr2 * parametr3;
    return results;
}

var wynik = multiply(3, 9, 10);

console.log('wynik: ' + wynik);

wynik = multiply(35, 2, 10);

console.log('wynik: ' + wynik);

var funkcja = function(){
    return "wynik :)";
};

console.log( funkcja );
console.log( funkcja() );
