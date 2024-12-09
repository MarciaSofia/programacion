/* 
FUNCION PARA CALCULAR PROMEDIO
(Cuando ya tengo un array definido)
*/
let numeros = [10, 20, 30, 40]
function calcularPromedio(numeros) {
    let suma = numeros.reduce((acumalador,numero) => acumalador + numero, 0);
    let promedio = suma / numeros.length;
    return promedio;
}
calcularPromedio(numeros)

/* 
FUNCION PARA CALCULAR PROMEDIO
(Cuando pido al usuario)
*/
function calcPromedio() {
    let numUser = prompt("Ingresa los numeros a calcular separados por una , (coma)");
    //convierto la entrada del usuario numUser(10,20,30) en un array de cadenas de texto["10","20","30"], y luego con el metodo map(Number) convierto ese array de cadena de texto en un array de numeros [10, 20, 30]
    let numerosUser = numUser.split(",").map(Number);
    let suma1 = numerosUser.reduce((acum1, num1) => acum1 + num1, 0);
    let prom = suma1 / numerosUser.length;
    alert(`El promedio es: ${prom}`);    
}
calcPromedio();

/* 
FUNCION PARA CALCULAR PROMEDIO
(Cuando pido al usuario que el ingreso sea de a 1 por vez hasta terminar con una letra)
*/
function calculadorProm() {
    // creo el array vacio para almacenar los num que ingrese el usuario
    let numeros1User = [];   
    // creo un bucle para que ingrese num hasta que ingrese una letra
    while (true) {
        let num1User = prompt("Ingresa un número o una letra para terminar");
        // creo la "traba"
        if (isNaN(num1User)|| num1User === "") {
            break;
        }
        // agrego estos numeros al array vacio con metodo push
        numeros1User.push(Number(num1User));
    }
    // esto lo hgo para comprobar que el array no siga vacio y se hayan ingresado numeros 
    if (numeros1User.length > 0) {
        let sum1 = numeros1User.reduce((acum2, num2) => acum2 + num2, 0);
        let prom2 = sum1 / numeros1User.length;
        alert(`El promedio es: ${prom2}`)
    } else {
        alert("No se ingresaron números válidos")
    }    
}
calculadorProm();

/* 
Ejercicio adicional:
1) Descripción del ejercicio:
• Diseña una función en JavaScript que reciba un array de números.
• La función debe devolver un nuevo array que contenga pares de números del array original.
*/
function paresDeNumeros(numeros4) {
    // reduce(acum, elem actual_(ya que no lo utilizo), indice,array)
    return numeros4.reduce((pares, _, index) => {
        if (index % 2 === 0 && index + 1 < numeros4.length){
            pares.push([numeros4[index], numeros4[index + 1]])
        }
        return pares //sera mi acum para guardar los indices pares
    }, [])
}
console.log("Probando...");
console.log(paresDeNumeros([12, 20, 12, 25, 20, 26, 27]));

/* 
Si usara ciclo for
*/
function crearPares(numeros5) {
    // para guardar el nuevo array en pares
    let pares5 = [];
    // itero sobre el array numeros5 y lo voy saltando de dos en dos
    for (let i = 0; i < numeros5.length; i+= 2) {
        if (i + 1 < numeros5.length){
            //si el numeros5 es un array par y no quedan elementos sin pareja por ende
            pares5.push([numeros5[i], numeros5[i + 1]])
            // agrego el par de umeros al array pares5
        } else {
            // si es array impar y me queda el ultimo sin pareja entonces que complete automaticamente con un guion medio
            pares5.push([numeros5[i], "-"])
        }
    }
    return pares5
}
console.log("probando con ciclo for");
console.log(crearPares([12, 20, 12, 25, 20, 26,27]));

/* 
2) Descripción del ejercicio:
• Crear una función que reciba un array de strings y un número entero como parámetros.
• La función debe devolver un nuevo array que contenga solo aquellos strings del array original que tengan una longitud mayor al valor dado.
*/
function filtarArray(array1, num10) {
    return array1.filter(string => string.length >= num10);
}
console.log("Probando ej array...");
console.log(filtarArray(["casas", "pero", "gatro", "coce", "bicicleta"], 5))

function compararArray(arraystring, num0) {
    let nuevoArray = []
    for (let i = 0; i < arraystring.length; i++) {
        if (arraystring[i].length >= num0) {
            nuevoArray.push(arraystring[i])
        }
    }
    return nuevoArray
}
console.log("Probando ej array...");
console.log(compararArray(["casa", "perro", "gato", "coche", "bicicleta"], 5))