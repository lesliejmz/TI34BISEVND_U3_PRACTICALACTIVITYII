// Declaración de variables
let firstName = "Lesli";
let lastName = "Jimenez";
let country = "Mex";
let city = "Tabasco";
let age = 20;
let isMarried = false;
let year = 2023;

// Uso de typeof
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Verificación de typeof '10' es igual a 10
console.log(typeof '10' === typeof 10);

// Verificación de parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10);

// Verificación de cualquier valor booleano true o false
console.log(5 > 3);
console.log('hello' !== 'world');
console.log(10 === 10);
console.log(2 === '2');
console.log(15 < 10);
console.log(false === 0);

// Expresiones de comparación con console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Objeto Date
let today = new Date();
console.log("Año actual: " + today.getFullYear());
console.log("Mes actual (número): " + (today.getMonth() + 1));
console.log("Fecha actual: " + today.getDate());
console.log("Día actual (número): " + today.getDay());
console.log("Hora actual: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
console.log("Minutos actuales: " + today.getMinutes());
console.log("Segundos transcurridos desde 1970: " + today.getTime() / 1000);

// Cálculo de área de un triángulo
let base = prompt("Ingrese la base del triángulo:");
let altura = prompt("Ingrese la altura del triángulo:");

let area = 0.5 * base * altura;
console.log("El área del triángulo es: " + area);

// Cálculo del perímetro de un triángulo
let ladoA = prompt("Ingrese el lado a del triángulo:");
let ladoB = prompt("Ingrese el lado b del triángulo:");
let ladoC = prompt("Ingrese el lado c del triángulo:");

let perimetro = parseInt(ladoA) + parseInt(ladoB) + parseInt(ladoC);
console.log("El perímetro del triángulo es: " + perimetro);
