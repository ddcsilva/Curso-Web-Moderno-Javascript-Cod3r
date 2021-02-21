// Recurso incluído no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Se não for encontrado, será undefined. Também é possível adicionar um valor padrão.
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// Será gerado um erro, por tentar acessar uma coisa que não é objeto, ele é nulo
const { conta: { ag, num } } = pessoa;
console.log(ag, num);