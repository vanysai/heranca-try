// Foi utilizado como contexto, criar um espaço de PetShop, onde vemos a classe pai Animal e as suas heranças, os bichos que estão presentes no PetShop são: Gato, Cachorro e Pato.
class Animal{
    constructor(nome, idade, especie, caracteristica){
        this.nome = nome,
        this.idade = idade,
        this.especie = especie,
        this.caracteristica = caracteristica
    }

    // Comer(){
    //     console.log('O cachorro comeu cenoura')
    // }

    // Correr(){
    //     return 10
    //     console.log()
    // }

    // Fazerxixi(){
    //     console.log('O cachorro fez xixi na geladeira')
    // }
}

class Gato extends Animal{
    constructor(nome, idade, especie, caracteristica, comida){
    super(nome, idade, especie, caracteristica, comida)
        this.comida = comida
    }

    Comer(Peixe){
        console.log(`O James comeu ${Peixe} peixe`)
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, especie, caracteristica, cor){
    super(nome, idade, especie, caracteristica, cor)
        this.cor = cor
    }
    correr(km){
        return ' Bill correu ' +km+  ' kms '
    }
}

class Pato extends Animal{
    constructor(nome, idade, especie, caracteristica, asas){
    super(nome, idade, especie, caracteristica, asas)
        this.asas = asas
}
    Falar(Quack){
        console.log(`Qua vociferou ${Quack}`)
    }
}

let James = new Gato ('James', '4', 'Gato', 'É fofinho', 'Peixe')
console.log(James)
James.Comer("rodrigo, o")

let Bill = new Cachorro ('Bill', '7', 'Cachorro', 'Come muito', 'Preto')
console.log(Bill)
console.log(Bill.correr(8))

let Qua = new Pato ('Qua', '3', 'Pato', 'Ele voa, nada e anda', '2 asas')
console.log(Qua)
Qua.Falar("Quack Quack Quack")