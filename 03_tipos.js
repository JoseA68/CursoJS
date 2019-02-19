/* 
Tipos de variables:
- number : Tipo primitivo. Almacenan los valores en una zona de memoria, la asignción es por valor
- string : Tipo primitivo
- boolean : Tipo primitivo 
- undefined, por defecto sino tienen tipo
- object (incluyendo array)  . Son variables por referencia

*/

let name = 4
console.log(typeof name)
name = 'Pepe'  // El tipado es variable. Puedo hacerlo, aunque no siginfica que sea buena idea
console.log(typeof name)
name = true
console.log(typeof name)
name = {}
console.log(typeof name)
name = [1,2,3]
console.log(typeof name)

let a=3
let b=a
a *=a // a vale 9 y b vale 3
console.log(b)

let oDatos = {nombre: 'Pepe'}
let oMasDatos = oDatos
oDatos.nombre = 'Ramon'
console.log(oMasDatos)