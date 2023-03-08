class Cliente {
    nroConta: number
    nroAgencia: number
    nome: string
    saldo: number

    constructor(nroConta: number, nroAgencia: number, nome: string, saldo: number){
        this.nroConta = nroConta
        this.nroAgencia = nroAgencia
        this.nome = nome
        this.saldo = saldo
    }
    depositar(x: number): void {
        this.saldo = this.saldo + x
    }
    sacar(x: number): void {
        this.saldo -= x
    }
    dadosCliente(): string {
        return `Conta: ${this.nroConta} Nome: ${this.nome} Saldo: ${this.saldo}`
    }
}
let obj1Cliente = new Cliente(123, 456, "Pedro", 1000)
let obj2Cliente = new Cliente(321, 654, "Julia", 3000)
obj1Cliente.depositar(500)
obj2Cliente.depositar(900)
obj1Cliente.sacar(100)
obj2Cliente.sacar(400)
console.log(obj1Cliente.dadosCliente())
console.log(obj2Cliente.dadosCliente())