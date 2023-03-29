import { Animal } from "./Animal";

export class Snake extends Animal{
    private poisonous: boolean

    constructor(name: string, poisonous: boolean){
        super(name) // chama construtor da classe pai
        this.poisonous = poisonous
    }
    // getters e setters

    // anulação de método - eu não te quero mas não te largo
    toString(): string {
        return `${super.toString()} Poisonous: ${this.poisonous ? 'Yes' : 'No'}`
    }

    // anulação de método
    move(): string {
        return 'Crawling ... '
    }
}