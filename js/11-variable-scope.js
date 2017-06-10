'use strict';
/* zasieg zmiennych zmienne lokalne i globalne - do przepisania ze zdjęć*/

var Krzysiek = 3500;
var Jurek = 5000;
var Jola = 7500;
var Sergio = 2500;

var sumaKasy;

function policzSumeKasy(skladowa1, skladowa2, skladowa3, skladowa4)
{
    var sumaKasy;
    sumaKasy = skladowa1 + skladowa2 + skladowa3 + skladowa4;

    return sumaKasy;
}
sumaKasy = policzSumeKasy(Krzysiek, Jurek, Jola, Sergio);
console.log(sumaKasy);