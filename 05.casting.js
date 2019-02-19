// Casting Numerico

let a = '2'
let b = 2

console.log(a*b)   // automaticamente le cambia el tipo para que se pueda ejecutar la operación
console.log(typeof a)

let c ='Pepe'
let d = c * b     // Da NaN. Hay que controlarlo  por programa. Existe la funcion isNaN()
console.log(d)
console.log(-b/0)

console.log(a+b)   // + concatena y suma. concatenación tiene prioridad . Da 22 string en lugar de 4

console.log(Number(a)+Number(b)) // esto si devuelve 4, number

// parseint, parsear a entero, quedarnos con la parte entera de un numero
console.log(parseInt(a) + b)

// tambien lo podemos hacer con el +, ya que lo convierte a numero
console.log(+a + b)

// Los formularios HTML solo saben recoger string. Por eso suelen ser utilies estas funciones

// Template strings en ES6

let name ='Pepe'
let apellido = "Perez"  // no se recomienda, se usan en html
console.log(name,apellido)

let msg = `Mi nombre es: 
...... ${name}`  // acento frances es un template strings. reconoce formato, retorno carro, tab, ...
console.log(msg)

// CAsting booleano. Cualquier variable que exista, hace casting booleano

let x = '3'
if (x == 3) {
	console.log('ok')   // Daria OK, no es identico, hace el casting
}
if (x ===3) {
	console.log('ok')   // No mostraria el mensaje
}
if (x !== 3) {
	console.log('ok')   // Si  mostraria el mensaje
}
// falsy
let x = false
x = undefined
x=0
x=NaN
x=''
x=null
// True
x = true
x = 'Pepe'
x = Infinity
x = 56
x = {}
if (x) {
	console.log('OK')
} else {
	console.log('Falso')
}

// Operador ternario, enlaza tres operaciones.

console.log(x ? 'OK' : 'Falso')