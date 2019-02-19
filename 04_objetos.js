/* 
En ES6 ademas de let podemos usar const
*/

const EDAD = 34
// edad++ daria un error, no se puede cambiar el valor de una constante

const oDatos = {nombre:'Pepe'}
console.log(oDatos)

JSON.stringify(oDatos)

function cambiarNombre (o) {
	o.nombre = 'anonimo'
}

cambiarNombre(oDatos)
console.log(oDatos)

