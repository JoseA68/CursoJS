function suma(a = 0, b = 0) {
	let r = a + b
	return r
}

// Asignacion de funciones a variables

let oDatos = {}

let resta = function (a , b){
	let r = a - b
	return r
}

// En ES6 existen las Arrow functions, se quita la palabra function y se pone =>

let producto = (a, b) => {	return a * b}

// cuando ocurre esto tambien se puede escribir:

// let producto = (a, b) => a * b
let cuadrado = (a) => a * a    // en este caso se puede escribir sin parentesis


console.log(suma(2, 2))
console.log(suma())
