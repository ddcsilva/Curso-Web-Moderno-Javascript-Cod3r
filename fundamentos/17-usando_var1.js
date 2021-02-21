{ 
    { 
        { 
            { 
                var sera = 'Será???';
                console.log(sera);
            } 
        }
    } 
}

console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}

teste();

// Será gerado um erro, a variável var se estiver declarada dentro de uma função, 
// ela será visível apenas dentro da função.
// console.log(local);