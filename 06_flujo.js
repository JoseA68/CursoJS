let edad = 40

if (edad < 18) {
	console.log('HOLA CHAVAL')
} else if (edad < 30) {
	console.log('hola joven')
} else {
	console.log('buenos dias')
}

let posicion = 'semi-junior'
switch (posicion) {
	case 'junior':
		console.log('HOLA CHAVAL')
		break;
	case 'semi-junior':
		console.log('hola joven')
		break;
	case 'senior':
		console.log('buenos dias')
		break;
	default:
		break;
}

const aNombres = ['pepe','rosa','elena']

let lista = ''
for (let i = 0; i < aNombres.length; i++) {
	const item = aNombres[i];
	console.log(item)
	lista += item + '; '
}
console.log(lista)