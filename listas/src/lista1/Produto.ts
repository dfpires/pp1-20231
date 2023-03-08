class Produto{
    public id: number
    public descricao: string
    public qtde: number
    public preco: number
    constructor(id: number, descricao: string, qtde: number, preco: number){
        this.id = id; this.descricao = descricao; this.qtde = qtde; this.preco = preco
    }
    comprar(x: number): void{
        this.qtde += x
    }
    vender(x: number): void{
        this.qtde -= x
    }
    subir(x: number): void{
        this.preco += x
    }
    descer(x: number): void{
        this.preco -=x
    }
    mostra(): string {
        return `Id: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`
    }
}
let obj1Prod = new Produto(1, 'X Bacon Salada', 5, 28)
let obj2Prod = new Produto(2, 'Lazanha a Bolonheza', 10, 22)
obj1Prod.comprar(3)
obj2Prod.vender(4)
obj1Prod.subir(3)
obj2Prod.descer(3)
console.log(obj1Prod.mostra())
console.log(obj2Prod.mostra())

