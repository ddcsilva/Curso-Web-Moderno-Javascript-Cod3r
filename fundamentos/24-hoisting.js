console.log('a =', a);
var a = 2;
console.log('a =', a);

// Mesmo que:

var a;
console.log('a =', a);
a = 2;
console.log('a =', a);

// Na Function, o efeito seria o mesmo

function teste() {
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
}

teste();

// O efeito de Hoisting não tem efeito quando usado o let