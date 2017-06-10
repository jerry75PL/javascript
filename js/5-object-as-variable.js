'use strict';

/*obiekty jako zmienne*/

var student = {
    imie: "Kaja",
    wzrost: 152,
    wyswietlDane: function () { console.log(this.wzrost) }
}

student.wyswietlDane();

console.log(student);