// Tipo de dados: Infinity
console.log(7 / 0);

// Tenta converter a string em number e faz o cálculo
console.log('10' / 2);

// Tipo de dados: NaN -> Not a Number
console.log('Show!' * 2);

// Imprecisão com a pontos flutuantes
console.log(0.1 + 0.7);

// Não é possível um number escrito de forma literal utilizar a função toString()
// console.log(10.toString()); -> Irá gerar um erro

// Se eu envolver o número literal com (), é possível utilizar as funções de Number
console.log((10.345).toFixed(2));