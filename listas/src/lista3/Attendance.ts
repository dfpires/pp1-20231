import { Client } from "./Client";
import { Employee } from "./Employee";
import { Service } from "./Service";

class Attendance {
    private id: number; private date: Date;
    private client: Client; // agregação
    private employee: Employee; // agregação
    private service: Service; // agregação
    constructor ( id: number,  date: Date, client: Client, employee: Employee,
         service: Service ){
            this.id = id; this.date = date; this.employee = employee; this.service = service; this.client = client;
         }
    
    getService(): Service {
        return this.service
    }

    toString(){
        return `{Id: ${this.id} date: ${this.date} client: ${this.client.toString()} employee: ${this.employee.toString()} service ${this.service.toString()}`
    }  
}

let objClient = new Client(1, "Leandro", "1234")
let objEmployee = new Employee(1, 100, "Vinicius")
let objService = new Service(1, "Escova", 80)

let objAttendance = new Attendance(1, new Date(), objClient, objEmployee, objService)
console.log(objAttendance.toString())
// lição de casa
// 1. mostrar apenas o preço do serviço prestado no atendimento
console.log(objAttendance.getService().getPrice())
// 2. mostrar apenas o nome do cliente atendido

// 3. mostrar apenas o nome do empregado que atendeu