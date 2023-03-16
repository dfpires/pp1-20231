// classe parte Product
class Product {
    private name: string
    private price: number
    constructor(name: string, price: number){
        this.name = name; this.price = price
    }
    // liçao de casa: fazer os métodos getters e setters
    getPrice(): number{
        return this.price
    }
    // método que converte objeto em string
    toString(): string {
        return `{ Name: ${this.name} Price: ${this.price} }`
    }
}
const obj1Product = new Product('Alexa', 400)
const obj2Product = new Product('Bola de basquete', 200)

// class Todo para a associação com Product
class CarItem {
    private product: Product // agregação
    private quantity: number
    constructor (product: Product, quantity: number){
        this.product = product; this.quantity = quantity
    }
    // liçao de casa: fazer os métodos getters e setters
    setProduct(product: Product){
        this.product = product
    }
    getProduct(): Product{
        return this.product
    }
    // método que calcula o valor total do item do carrinho
    calculateTotalPrice(): number {
        return this.quantity * this.product.getPrice()
    }
    // método que converte objeto em string
    toString(): string {
        return `\n Car Item: {Product: ${this.product.toString()} Quantity: ${this.quantity} Total Price: ${this.calculateTotalPrice()}}`
    }
}
const obj1CarItem = new CarItem(obj1Product, 2)
//console.log(obj1CarItem.toString())
const obj2CarItem = new CarItem(obj2Product, 5)
//console.log(obj2CarItem.toString())

class ShoppingCart {
    private id: number
    private carItens: CarItem[] // representação de um vetor de CarItem

    constructor(id: number){ // o construtor vai receber apenas 1 parâmetro
        this.id = id
        this.carItens = [] // apenas aloca espaço na memória
    }
    addCarItem(carItem: CarItem): void {
        // insere um item de carrinho no carrinho de compras
        this.carItens.push(carItem)
    }
    // método que converte objeto em string
    toString(): string{
        return `{Id: ${this.id} Itens do carrinho: ${this.carItens}}`
    }
    calcuteTotalShoppingCart(){
        /* percorre o vetor
         ES 5 e 6 */
        let soma: number = 0
        this.carItens.forEach(carItem => {
            soma = soma + carItem.calculateTotalPrice()
        })
        return soma
    }
}
let obj1ShoppingCart = new ShoppingCart(1)
obj1ShoppingCart.addCarItem(obj1CarItem)
obj1ShoppingCart.addCarItem(obj2CarItem)
console.log(obj1ShoppingCart.toString())
console.log(obj1ShoppingCart.calcuteTotalShoppingCart())
