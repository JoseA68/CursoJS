function calcular (a = 0, b = 0, callback){
	let r = callback(a, b)
	console.log(r)
}

// Callback como función anonima

calcular(2,2,function (x,y){
	return x+y
})

// Calcular como arrow function anonima
calcular(2, 2,  (x, y) => x - y)

// Callback como funcion con nombre

function producto (a, b) {
	return a * b
}

calcular (2, 2, producto) 

/*  Ejemplo setTimeout(). Siempre disponible en NODE y en el navegador. 
Es asincrono, espera 4 seg, pero continua con la linea siguiente
*/

setTimeout (() => {console.log('Por fin')},4000)

console.log('ultima linea')
// FUNCIONES ANIDADAS. Me permite encapsular codigo, sin utilizar clases como en JAVA.

function externa (){
	let globalExterna = 23
	function interna () {
		console.log(globalExterna)
	}

	interna()
}

externa()
