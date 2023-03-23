export class Employee {
    private id: number; private code: number; private name: string;
    constructor( id: number,  code: number, name: string){
        this.id = id; this.code = code; this.name = name;
    }

    getName(): string {
        return this.name
    }
    
    toString(): string {
        return `{Id: ${this.id} Code: ${this.code} Name: ${this.name}}`
    }
}