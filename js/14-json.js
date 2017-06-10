'use strict';
/*JSON*/

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "gotowanie"
                }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "gotowanie"
                },
                {
                    nazwa: "języki"
                }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "programowanie"
                },
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "języki"
                }
            ]

        }
    ]
}

console.log(jsonOsoby);

console.log('taka przerwa dla jasności - next');

jsonOsoby.osoby[2].zainteresowania.forEach(function (element, index) {
    console.log(element.nazwa);
});

console.log('taka przerwa dla jasności - next');

jsonOsoby.osoby[0].zainteresowania.forEach(function (element, index) {
    console.log(element.nazwa);
});

console.log('taka przerwa dla jasności - next');

console.log(jsonOsoby.osoby[1].wzrost);

console.log('taka przerwa dla jasności - next');

