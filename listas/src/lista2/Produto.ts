class ProdutoEncap{
    public id: number
    public descricao: string
    private qtde: number
    private preco: number
    constructor(id: number, descricao: string, qtde: number, preco: number){
        this.id = id; this.descricao = descricao; 
        this.setQtde(qtde); this.setPreco(preco)
    }
    setQtde(qtde: number): void{
        if (qtde >= 0){
            this.qtde = qtde
        }
        else {
            console.log('Qtde negativa não pode.')
        }
    }
    setPreco(preco: number): void{
        if (preco >= 0){
            this.preco = preco
        }
        else {
            console.log('Preço negativo não pode.')
        }
    }
    getQtde(): number {
        return this.qtde
    }
    getPreco(): number{
        return this.preco
    }
    comprar(x: number): void{
        this.qtde += x
    }
    vender(x: number): void{
        // this.setQtde(8 - 10) 
        // this.setQtde(-2)
        this.setQtde(this.qtde - x)
    }
    subir(x: number): void{
        this.preco += x
    }
    descer(x: number): void{
        this.setPreco(this.preco -x) // encapsulado
    }
    mostra(): string {
        return `Id: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`
    }
}
let obj1ProdEncap = new ProdutoEncap(1, 'X Bacon Salada', 5, 28)
let obj2ProdEncap = new ProdutoEncap(2, 'Lazanha a Bolonheza', 10, 22)
obj1ProdEncap.comprar(3)
obj1ProdEncap.vender(10)
obj1ProdEncap.descer(48)
console.log(obj1ProdEncap.mostra())
obj2ProdEncap.vender(4)
obj1ProdEncap.subir(3)
obj2ProdEncap.descer(3)
console.log(obj1ProdEncap.mostra())
console.log(obj2ProdEncap.mostra())

obj1ProdEncap.setQtde(-40)
obj2ProdEncap.setPreco(-90)
obj1ProdEncap.setQtde(40)
obj2ProdEncap.setPreco(90)

let obj3ProdEncap = new ProdutoEncap(3, "Celular", 30, 1700)

console.log(`Qtde: ${obj3ProdEncap.getQtde()} e Preço: ${obj3ProdEncap.getPreco()}
}`)