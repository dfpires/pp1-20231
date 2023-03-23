export class CellPhone {
    private id: number; private nro: number; private operator: string;
    constructor( id: number, nro: number, operator: string){
        this.id = id; this.nro = nro; this.operator = operator
    }

    toString(): string {
        return `{Id: ${this.id} Nro: ${this.nro} Operator ${this.operator}}`
    }
}