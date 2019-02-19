let aNumbers = [2, 5, 7, 8, 12, 15]

// Funcion rollback

aNumbers.forEach(
	
	(item, i) => {console.log(`La posicion .${i}.. vale ${item}`)
	
});

// Funcion Map => Proyectar un array, pero con la transformacion que queramos

let aCuadrados = aNumbers.map (
	(item) => {return item * item}
)

console.log(aCuadrados)

// No modifica nunca los valores, no es un map, filtra, si cumple la condición, devuelve un booleano
let aCuadradosImpares = aCuadrados.filter(
	item => (item%2)
)
console.log(aCuadradosImpares)