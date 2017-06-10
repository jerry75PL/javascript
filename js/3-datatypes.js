'use strict';

/*
typ liczbowy
*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*
typ łancuch znaków - string
*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + "\n" + premiaStr;

console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + " \"dodajemy\" " + premiaStr;

console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + ' "dodajemy" ' + premiaStr;

console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + " 'dodajemy' " + premiaStr;

console.log(calkowitaWyplataStr);


/*
metody */

var imieStudenta = " Michał";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());


/*
tyo logiczny boolean*/

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa :)");
}

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa :)");
}

