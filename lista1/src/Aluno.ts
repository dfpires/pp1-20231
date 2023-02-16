class Aluno {
    nroAluno: number;
    nome: string;
    idade: number;
    p1: number;
    p2: number;
    // método construtor - criar objetos
    constructor(nroAluno: number, nome: string, idade: number, 
        p1: number, p2: number){
            this.nroAluno = nroAluno;
            this.nome = nome;
            this.idade = idade;
            this.p1 = p1;
            this.p2 = p2;
    }
    //calcula e retorna a média
    calculaMedia(): number {
        return (this.p1 + this.p2) / 2
    }
    // verifica se o aluno passou
    passou(): void {
        if (this.calculaMedia() >= 6){
            console.log('Aluno aprovado')
        }
        else {
            console.log('Aluno reprovado')
        }
    }
    dadosAluno(): string {
        return `Nro do aluno:  ${this.nroAluno} Nome: ${this.nome} Idade: ${this.idade} Nota final: ${this.calculaMedia()}`
    }
}

// constroe obj1
let objAluno = new Aluno(123, "João", 20, 6.5, 7.0)
console.log(objAluno)
objAluno.passou()
console.log(objAluno.dadosAluno())