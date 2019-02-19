class Persona {
	constructor (nombre, edad, isAlumno) {
	this.nombre = nombre
    this.edad = edad
    this.isAlumno = isAlumno
	}
	saludar (otro = 'amigo') {
		console.log(`Hola ${otro}, soy ${this.nombre}`)
}

let oPersona1 = new Persona('Juan', 30, false)
console.log(oPersona1)
let oPersona2 = new Persona('Rosa', 26, true)
oPersona2.altura = 170
console.log(oPersona2)