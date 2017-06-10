'use strict';
/*petla*/

for (var liczba = 0; liczba < 10; liczba++) {
    console.log(liczba + " ");
}

var i = 0;
while (i < 10) {
    console.log("Pętla while [i = " + i + "]");
    i++;
}

var i = 0;
do {
    console.log("Pętla do...while [i = " + i + "]");
} while (i++ < 9);


//liczba + " " zamienia liczbę na tekst

for (var i = 0; i < 4; i++) {
    console.log(i + " ");
}

for (var i = 4; i >= 0; i--) {
    console.log(i);
}


var it = 0;
while (it < 5) {
    console.log(it + " ");
    it++;
}

var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 10);


var a = 0;
while (a < 5) {
    console.log(++a);

    if (a == 3) {
        break;
    }
}

console.log('------');
console.log('------');
//  preinkrementacja vs postinkrementacja

for (var i = 1; i < 4;) {
    console.log(++i);
}

console.log('------');

for (var i = 1; i < 4;) {
    console.log(i++);
}

console.log('---continue---');

//continue

for (var b = 0; b < 6; ++b) {
    if (b == 3) {
        console.log("big three");
        continue;
        
    } else {
        console.log(b);

    }
    console.log("--");
}