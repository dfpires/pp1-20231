import { Horse } from "./Horse";
import { Snake } from "./Snake";

let objSnake = new Snake('Cobrinha do bem', false)

let objHorse = new Horse('Cavalo matador', true)

console.log(objSnake.toString())
console.log(objSnake.move())

console.log(objHorse.toString())
console.log(objHorse.move())