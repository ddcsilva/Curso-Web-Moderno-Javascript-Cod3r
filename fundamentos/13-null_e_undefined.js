let valor; // Undefined -> Não inicializada
console.log(valor);

valor = null; // Null -> Ausência de valor
console.log(valor);

// console.log(valor.toString()); -> Irá gerar um erro

const produto = {};
console.log(produto.preco); // Undefined -> Não está definido
console.log(produto);

produto.preco = 3.50
console.log(produto)

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco; -> Remove o atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)