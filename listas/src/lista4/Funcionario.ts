export class Funcionario {
    protected nome: string; protected endereco: string
    protected cpf: string; protected salario: number

    constructor( nome: string,  endereco: string, cpf: string,  salario: number){
        this.setNome(nome); this.endereco = endereco;
        this.cpf = cpf; this.salario = salario
    }

    setNome(nome: string){
        this.nome = nome
    }
    toString(): string{
        return `{Nome: ${this.nome} Endereço: ${this.endereco} Cpf: ${this.cpf} Salário ${this.salario}}`
    }

    calculaSalario(): number{
        return this.salario
    }
}