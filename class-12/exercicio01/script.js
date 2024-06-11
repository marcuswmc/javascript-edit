class Carro {
  constructor(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
  }

  display(){
    console.log(`O carro é da marca ${this.marca} e modelo ${this.modelo}`)
  }
}

const cupra = new Carro('Cupra', 'Sport')
cupra.display()

const seat = new Carro('Seat', 'AronaWave')
seat.display()


class Suv extends Carro {
  constructor(marca, modelo, cor){
    super(marca, modelo)
    this.cor = cor
  }

  getCor() {
    console.log(`${this.marca} ${this.cor}`)
  }
}

const toyota = new Suv('Toyota', 'XRC', 'Cinza Escuro')
toyota.display()
toyota.getCor()