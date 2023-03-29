import { Animal } from "./Animal";

export class Horse extends Animal{
    private competitor: boolean

    constructor(name: string, competitor: boolean){
        super(name) // chama construtor da classe pai
        this.competitor = competitor
    }
    // getters e setters

    // anulação de método - eu não te quero mas não te largo
    toString(): string {
        return `${super.toString()} Competitor: ${this.competitor ? 'Yes' : 'No'}`
    }

    // anulação de método
    move(): string {
        return 'Glloping  ... '
    }
}