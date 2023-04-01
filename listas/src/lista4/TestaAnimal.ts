import { Animal } from "./Animal";
import { Horse } from "./Horse";
import { Snake } from "./Snake";



function exemploPolimorfismo( camaleao: Animal){
    console.log(camaleao.move())
    console.log(camaleao.toString())

}

let objSnake = new Snake('Cobrinha do bem', false, true)

let objHorse = new Horse('Cavalo matador', true)

exemploPolimorfismo(objSnake)
exemploPolimorfismo(objHorse)

//console.log(objSnake.toString())
//console.log(objSnake.move())
//console.log(objHorse.toString())
//console.log(objHorse.move())