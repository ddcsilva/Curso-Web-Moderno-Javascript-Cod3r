// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // Se faltar valor para o parâmetro, será Undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Ele irá setar a quantidade de parâmetros e ignorará o restante
imprimirSoma(); // É possível chamar a função sem informar o valor dos parâmetros sem erro

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 5));
console.log(soma(2)); // O segundo parâmetro tem valor default 0
console.log(soma()); // Se faltar valor de todos os parâmetro, será retornado Undefined
