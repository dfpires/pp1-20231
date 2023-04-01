import { Funcionario } from "./Funcionario";

export class Assistente extends Funcionario {
    private horaExtra: number

    constructor (nome: string,  endereco: string, cpf: string,  salario: number, horaExtra: number){
        super(nome,  endereco, cpf,  salario)
        this.horaExtra
    }

    toString(): string {
        return  `${super.toString()} Hora extra ${this.horaExtra}`
    }

    calculaSalario(): number {
        return this.salario + (this.horaExtra * 20)
    }
}