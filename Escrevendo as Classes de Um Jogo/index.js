class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  atacar() {
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}
let ataque
let personagem = new heroi('Mayron', '22', 'guerreiro')

if (personagem.tipo == 'mago') {
  ataque = 'magia'
} else if (personagem.tipo == 'guerreiro') {
  ataque = 'espada'
} else if (personagem.tipo == 'monge') {
  ataque = 'artes marciais'
} else {
  ataque = 'shuriken'
}

personagem.atacar()
