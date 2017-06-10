'use strict';
/*obiekty*/

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function () {
        console.log(this.imie)
    }
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function () {
        console.log(this.imie)
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(krystian);
console.log(krystian.wzrost);

/*Klasy obiektów (tak jakby funkcja do tworzenia nowych obiektów*/

function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietlInfo = function () {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
        }
    }
    var krystian = new Osoba('Krystian', 'Dziopa'); // stwórz nową instancję obiektu Osoba
    krystian.wyswietlInfo(); //Wypisze „Imię: Krystian, Nazwisko: Dziopa
        
    var lukasz = new Osoba('Łukasz', 'Badocha'); // stwórz nową instancję obiektu Osoba
    lukasz.wyswietlInfo(); //Wypisze „Imię: Łukasz, Nazwisko: Badocha

console.log(krystian.nazwisko);
console.log(Osoba.nazwisko);

console.log('czytać dużo bo średnio kumam');