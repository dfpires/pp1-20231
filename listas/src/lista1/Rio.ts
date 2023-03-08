class Rio{
    constructor(public nome:string, public nivel: number, public poluido: boolean){
    }
    chover(x: number): void{
        this.nivel += x
    }
    ensolarar(x: number): void{
        this.nivel -= x
    }
    limpar(): void{
        this.poluido = false
    }
    sujar(): void {
        this.poluido = true
    }
    mostra(): string {
        return `Nome: ${this.nome} Nível: ${this.nivel.toFixed(2)} Poluído: ${this.poluido ? 'Sim' : 'Não'}`
    }
}
let objRio = new Rio("Rio Grande", 0.6, false)
objRio.chover(0.7)
objRio.sujar()
console.log(objRio.mostra())