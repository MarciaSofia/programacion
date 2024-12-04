/* 
 Ejercicio 1: Información del usuario
Pide al usuario que ingrese su nombre, edad y si es cliente (sí/no). Luego, muestra esta información en una estructura de objeto usando console.log.
 */
let nombreUsuario = prompt("Hola Usuario, ingrese su nombre")
let apellidoUsuario = prompt("Ingrese su apellido")
let edadUsuario = prompt("Ingrese su edad")
let situacionCliente = prompt("¿Es usted cliente? Ingrese SI o NO");
let usuario = {
    nombre : nombreUsuario,
    apellido : apellidoUsuario,
    edad : edadUsuario,
    cliente : situacionCliente,
};
console.log(usuario);

/*
 Ejercicio 2: Cálculo de área de un rectángulo (base x altura)
Pide al usuario que ingrese el largo y el ancho de un rectángulo. Luego, calcula el área y muestra el resultado utilizando alert.
 */
let baseRectangulo = prompt("Ingrese el ancho del rectángulo")
let alturaRectangulo = prompt("Ingrese el largo del rectángulo")
let areaRectangulo = baseRectangulo * alturaRectangulo
alert(`El área del rectángulo es: ${areaRectangulo}`);

/* 
Ejercicio 3: Lista de frutas favoritas
Pide al usuario que ingrese tres de sus frutas favoritas, una por una, y guárdalas en un array. Luego, utiliza un método básico de arrays para mostrar las frutas separadas por comas en una alerta.
*/
let primerFruta = prompt(`Hey ${nombreUsuario}, ingrese su primer fruta favorita`)
let segundaFruta = prompt(`Hey ${nombreUsuario}, ingrese su segunda fruta favorita`) 
let tercerFruta = prompt(`Hey ${nombreUsuario}, ingrese su tercer fruta favorita`)
let frutasFavoritas = [];
frutasFavoritas.push(primerFruta)
frutasFavoritas.push(segundaFruta)
frutasFavoritas.push(tercerFruta);
/* tambien podria ser
frutasFavoritas = [primerFruta, segundaFruta, tercerFruta]
*/
alert(`Tus frutas favoritas son: ${frutasFavoritas.join(", ")}`);
