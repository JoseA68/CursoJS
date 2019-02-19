// Comentario en linea

/* 
	Esto es un comentario multilinea
*/

/* Alt+May+A => Crear un comentario */
/* Convenio de letras : 
variables: camelCase escepto las Constructoras que usan PascalCase 
CONSTANTES con mayusculas
No es recomendacion de estilo incluir un ; al final
*/ 

'use strict'

var num = 23 // variable global

/*Es un lenguaje de tipos debiles, tenemos que asignarle el valor cuando la declaramos*/
/*JS es un leguaje muy funcional, van a estar presentes en muchas partes, se declaran con function*/
function algo() {
	var num = 12   // variable local
	var interna = 44
	console.log(num)
	console.log(interna)
}

/* En ES6 se añade la palabra reservada let para definir variables locales en nuevos ámbitos entre {}
   Hoy en dia Var ya no se utiliza, siempre se pone let, hace lo mismo que var, pero perimite definir ambitos locales
   distintos de la función
*/

function algoES6() {
	if (true) {
	    let condi = 34
	}
	console.log(condi)
}
algo()
console.log(num)
// console.log(interna) daria error, es local

/*Es un lenguaje interpretado, lee una linea y la ejecuta. 
El interpretado del lenguaje busca todas las funciones y las eleva al principio, se llama alzamiento*/
