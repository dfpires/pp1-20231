import { CellPhone } from "./CellPhone";

export class Client {
    private id: number; private name: string; private cpf: string;
    private cellPhones: CellPhone[] // composição

    constructor( id: number,  name: string,  cpf: string, cellPhone: CellPhone){
        this.id = id; this.name = name; this.cpf = cpf;
        this.cellPhones = [] // aloca espaço para o vetor
        this.addCellPhone(cellPhone) // adiciona o 1o. celular no vetor
    }

    addCellPhone(cellPhone: CellPhone): void{
        this.cellPhones.push(cellPhone)
    }

    getName(): string{
        return this.name
    }
    toString(): string {
        return `{Id: ${this.id} Name: ${this.name} Cpf: ${this.cpf} CellPhones: ${this.cellPhones}}`
    }
}