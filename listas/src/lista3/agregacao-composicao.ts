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
        return `Car Item: {Product: ${this.product.toString()} Quantity: ${this.quantity} Total Price: ${this.calculateTotalPrice()}}`
    }
}
const obj1CarItem = new CarItem(obj1Product, 2)
console.log(obj1CarItem.toString())
const obj2CarItem = new CarItem(obj2Product, 5)
console.log(obj2CarItem.toString())

class ShoppingCart {
    private id: number
    private carItens: CarItem[]
}