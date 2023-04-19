class Esporte {
    protected nome: string
    constructor(nome: string){
        this.setNome(nome)
    }
    setNome(nome: string){
        this.nome = nome
    }
    getNome(){
        return this.nome
    }
    toString(){
        return `Nome: ${this.nome}`
    }
}
class Tenis extends Esporte {
    private tipoRaquete: string
    constructor(nome: string, tipoRaquete: string){
        super(nome)
        this.setTipoRaquete(tipoRaquete)
    }
    setTipoRaquete(tipoRaquete: string){
        this.tipoRaquete = tipoRaquete
    }
    getTipoRaquete(){
        return this.tipoRaquete
    }
    toString(): string {
        return super.toString() + `Tipo da raquete: ${this.tipoRaquete}`
    }
}

class Basquete extends Esporte {
    private distanciaLinha3: number
    constructor(nome: string, distanciaLinha3: number){
        super(nome)
        this.setDistanciaLinha3(distanciaLinha3)
    }
    setDistanciaLinha3(distanciaLinha3: number){
        this.distanciaLinha3 = distanciaLinha3
    }
    getDistanciaLinha3(){
        return this.distanciaLinha3
    }
    toString(): string {
        return super.toString() + ` distância da linha de 3 ${this.distanciaLinha3}`
    }
}

function poli(esporte: Esporte){
    console.log(esporte.toString())
}

poli(new Basquete("Basquete 3x3", 6.5))
poli(new Tenis("Tênis de dupla", "Raquete de alumínio"))