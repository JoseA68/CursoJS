let curso = 'JavaScript'
let aNumbers = []
let oDatos = {nombre: 'Pepe'}

aNumbers.push(3)
oDatos.nombre

// Objeto envolvente. Exsten un monton de métodos "objetos" de tipo string
let cursoM = curso.toUpperCase()
console.log(curso, typeof cursoM)
console.log(cursoM, typeof cursoM)

// interesante el metodo split, ya que nos devuelve un array no una cadena
let frase = 'un anilllo para gobernarlos a todos'
// let aFrase = frase.split(' ')

let aFrase = frase.toUpperCase().split(' ')
console.log(aFrase.length)  // me devuelve el numero de palabras
console.log(aFrase)  // me devuelve el numero de palabras


// Quitar los espacios del array
let cadena = aFrase.join('')
console.log(cadena)

// operaciones con arrays como colas o pilas: pop shift unshift

aNumbers[aNumbers.length] = 9
console.log(aNumbers)

aNumbers2 = [3,7,3]

let aTotal = aNumbers.concat(aNumbers2)
console.log(aTotal)

// funciones de arrays muy interesantes, de gestion de arrays, basadas en programacion funcional
