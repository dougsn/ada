type Produto = {
    nome: string
    valor: number
}

class Estabelecimento {
    constructor(public endereco: string, public setor: string, private produtos: Produto[]
    ) {
    }
}

const padaria = new Estabelecimento("Endereço 1", "alimentação", [
    { nome: "pão", valor: 0.8 },
    { nome: "arroz", valor: 1.8 },
    { nome: "leite", valor: 5 },
])

console.log(padaria)    