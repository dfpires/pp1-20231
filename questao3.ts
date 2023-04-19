class SalaAula {
    private nro: number
    constructor(nro: number){
        this.setNro(nro)
    }
    setNro(nro: number){
        this.nro = nro
    }
    getNro(){
        return this.nro
    }
    toString(){
        return `{nro: ${this.nro}}`
    }
}

class Faculdade {
    private nome: string
    private salas: SalaAula[]
    constructor(nome: string){
        this.setNome(nome)
        this.salas = [] // inicializa
    }
    setNome(nome: string){
        this.nome = nome
    }
    addSala(nro: number){
        this.salas.push(new SalaAula(nro))
    }
    toString(){
        return ` Nome: ${this.nome} Salas: ${this.salas}`
    }
}

let facu1 = new Faculdade("Uni-FACEF")
facu1.addSala(201)
facu1.addSala(202)
facu1.addSala(203)
console.log(facu1.toString())