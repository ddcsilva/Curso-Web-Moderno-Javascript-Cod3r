// Elementos doa array, são separados por vírgula
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Não da erro, é retornado undefined

valores[4] = 10;
console.log(valores);

// Verifica quantos elementos existe no array
console.log(valores.length);

// Adiciona novos elementos ao array e não precisa ter o mesmo tipo
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// Remove o último elemento do valor
console.log(valores.pop());

// Remove o elemento do array no índice informado
delete valores[0];
console.log(valores);

// Array é do tipo Object
console.log(typeof valores);