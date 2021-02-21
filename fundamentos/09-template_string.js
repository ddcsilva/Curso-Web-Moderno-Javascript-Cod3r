const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

// Tudo que está dentro das chaves, ele vai interpolar, ou seja, interpretar na linguagem
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// Utilização de expressões numéricas em Template String
console.log(`1 + 1 = ${1 + 1}`);

// Utilização de Arrow Function em uma Template String
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);