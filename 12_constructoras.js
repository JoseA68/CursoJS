const oPersona = {
	nombre: 'Pepe',
	edad: 23,
	isAlumno: true,
	saludar: function (otro = 'amigo') {
		console.log(`Hola ${otro}, soy ${this.nombre}`)
	}
}

console.log(oPersona)

// ¿como instanciamos? Con las funciones constructoras, podemos instanciar tantos objetos como queramos

// El operador new convierte a una funcion cualquiera en una funcion constructora
function Persona (nombre, edad, isAlumno) {
	this.nombre = nombre
	this.edad = edad
	this.isAlumno = isAlumno
}

Persona.prototype.saludar = function (otro = 'amigo') {
	console.log(`Hola ${otro}, soy ${this.nombre}`)
}

let oPersona1 = new Persona('Juan',30,false) 
console.log(oPersona1)
let oPersona2 = new Persona('Rosa',26, true)
oPersona2.altura = 170
console.log(oPersona2)
oPersona2.saludar(oPersona1.nombre)

// Las funciones dentro de los objetos, son hiper-redundantes. Podemos sacar las funciones del objeto.
// con el prototipo