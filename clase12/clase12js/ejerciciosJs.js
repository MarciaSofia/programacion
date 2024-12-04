/*
Ejercicio 1: Crea un programa que solicite al usuario su nombre y apellido. Luego, muestra una alerta con su nombre completo (nombre y apellido concatenados) utilizando template strings.
*/
let nombre = prompt("¿Cuál es su nombre?")
let apellido = prompt("¿Cuál es su apellido?")
let nombreApellido = `Hola que tal ? Que bueno conocerte ${nombre} ${apellido}!`
alert(nombreApellido);

/*
Ejercicio 2: Pide al usuario que ingrese una frase. Luego, muestra en la consola la longitud de la frase utilizando template strings.
*/
let frase = prompt("Ingrese una frase")
let longitudFrase = frase.length
console.log(`La longitud de la frase es ${longitudFrase}`);

/*
Ejercicio 3: Solicita al usuario que ingrese dos palabras. Concatena las dos palabras y muestra el resultado en la consola. Además, calcula la longitud total de las dos palabras concatenadas y muestra el resultado en la consola.
Recordar que en estos ejercicios debemnos utilizar template strings para la concatenación de cadenas de texto, también usar prompt, console.log y alert para interactuar con el usuario y mostrar los resultados.
*/
alert(`Hey ${nombre} voy a pedirte que ingreses dos palabras, acepta para seguir`)
let primerPalabra = prompt("Ingrese la primer palabra")
let segundaPalabra = prompt("Ingrese la segunda palabra")
let dosPalabras = primerPalabra +" "+ segundaPalabra
console.log(`Las dos palabras ingresadas son ${dosPalabras}`);
console.log(`Esta es otra forma de mostrarlas: ${primerPalabra} ${segundaPalabra}`);