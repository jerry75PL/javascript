'use strict';
/* tablice */


var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

console.log('hdadakjshdjka');

imiona[3] = "Tania";
imiona[2] = 'Ela';

console.log(imiona);
console.log('hdadakjshdjka');

imiona.push('Geralt');

console.log(imiona);
console.log('hdadakjshdjka');

imiona.pop();
imiona.pop();

console.log(imiona);
console.log('hdadakjshdjka');

console.log(imiona.unshift('Robert'));

console.log(imiona);
console.log('hdadakjshdjka');

console.log(imiona.shift());

console.log(imiona);
console.log('hdadakjshdjka');

console.log(imiona);
console.log(imiona.length);
console.log('hdadakjshdjka');

for (var i = 0; i < imiona.length; i++) {
    console.log(imiona[i]);
}

console.log('hda*-*-/-/djka');

imiona.forEach(function (element, index) {
    console.log('Element nr ' + index + ' = ' + element);
})


console.log('hd*******jka');


console.log(imiona.join(" - "));
console.log(imiona.join(" + "));


console.log('hd*******jka');


var imiona2 = [ 'Marcin', 'Ania', 'Piotrek', 'Grześ' ];
imiona2.sort(); // podstawowa wersja metody
console.log( imiona2 ); // wypisze się "Ania, Grześ, Marcin, Piotrek"

console.log('hd*******jka');

imiona2.reverse();
console.log( imiona2 );

console.log('akj*******dh :-)');


var imionaMeskie =['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona2);

console.log(zbiorImion);

console.log('akj*******dh :-)');

console.log(zbiorImion);

