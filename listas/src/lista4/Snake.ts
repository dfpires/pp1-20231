import { Animal } from "./Animal";

export class Snake extends Animal{
    private poisonous: boolean
    private smoke: boolean

    constructor(name: string, poisonous: boolean, smoke: boolean){
        super(name) // chama construtor da classe pai
        this.poisonous = poisonous
        this.smoke = smoke
    }
    // getters e setters

    // anulação de método - eu não te quero mas não te largo
    toString(): string {
        return `${super.toString()} Poisonous: ${this.poisonous ? 'Yes' : 'No'} Smoke: ${this.smoke ?  this.fuma() : 'No'})}`
    }

    // anulação de método
    move(): string {
        return 'Crawling ... '
    }

    fuma(): string{
        return `Cool snake, it smoke`
    }
}