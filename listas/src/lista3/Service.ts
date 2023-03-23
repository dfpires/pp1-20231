export class Service {
    private id: number; private name: string; private price: number;
    constructor( id: number,  name: string, price: number){
        this.id = id; this.name = name; this.price = price
    }
    getPrice(): number {
        return this.price
    }
    toString(): string{
        return `{Id: ${this.id} Name: ${this.name} Price: ${this.price}}`
    }
}