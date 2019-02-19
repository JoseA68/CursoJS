const oDatos = {
	nombre: 'Pepe',
	edad: 23,
	isAlumno : true,
	direccion : {
		calle: 'Pez',
		numero: 13,
		ciudad: 'Madrid'
	}
}

oDatos.direccion.numero = 16

console.log(oDatos.nombre)

// Otra notacion a los objetos por corchetes

const aNombres = ['Juan','Rosa','Elena']

console.log(aNombres[1])

let propiedad = 'isAlumno'
console.log(oDatos[propiedad])

const oDatos2 = {
	nombre: 'Ernesto',
	edad: 37,
	isAlumno: true,
	saludar : function (otro = 'amigo') {
		console.log(`Hola ${otro}, soy ${this.nombre}`)
	}
	}


for (const key in oDatos2) {
		const item = oDatos2[key]
		if (typeof item !== 'function'){
		console.log(`La propiedad ${key} vale ${item}`)	
		}
}

for (const key in oDatos2) {
		console.log(`La propiedad ${key} vale ${oDatos2[key]}`)
}

oDatos2.saludar('Luis')

// PAra excluir las funciones del bucle  => typeof

console.log(typeof oDatos2.saludar)