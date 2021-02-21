const escola = "Cod3r";

// Retorna o caractere que está no índice 4 da minha string
console.log(escola.charAt(4));

// Se não achar um valor na posição solicitada, ele não da erro e retorna vazio
console.log(escola.charAt(5));

// Retorna o valor do caractere que está o índice informado em código ASCII
console.log(escola.charCodeAt(3));

// Verifica se o caractere informado está dentro da string e retorna a posição do index
console.log(escola.indexOf('o'));

// Retorna os caracteres a partir da posição informada para frente
console.log(escola.substring(1));

// Retorna os caracteres a partir do primeiro índice informado até o segundo índice 
// informado, sem mostrar ele mesmo
console.log(escola.substring(0, 3));

// concat -> serve para concatenar strings, com alternativa do +
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");

// replace -> substitui o índice específico pelo string informado
console.log(escola.replace(3, 'e'));

// converte o string informado para um array, delimitado por um separador
console.log('Ana,Maria,Pedro'.split(','));