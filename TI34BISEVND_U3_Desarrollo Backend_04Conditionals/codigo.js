// Pregunta 1: Edad suficiente para conducir
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir.");
} else {
    let añosFaltantes = 18 - edad;
    console.log(`Te faltan ${añosFaltantes} años para conducir.`);
}

// Pregunta 2: Comparación de edades
let myAge = prompt("Ingrese su edad:");
let yourAge = prompt("Ingrese la edad de otra persona:");

if (myAge > yourAge) {
    console.log(`Eres ${myAge - yourAge} años mayor que yo.`);
} else if (yourAge > myAge) {
    console.log(`Eres ${yourAge - myAge} años menor que yo.`);
} else {
    console.log("Tenemos la misma edad.");
}

// Pregunta 3: Comparación de a y b
let a = 5;
let b = 3;

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor que b');
}

// Pregunta 4: Determinar la temporada
let mes = prompt("Ingrese un mes:");

switch (mes.toLowerCase()) {
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("La temporada es Otoño.");
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("La temporada es Invierno.");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("La temporada es Primavera.");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("La temporada es Verano.");
        break;
    default:
        console.log("Mes no válido.");
}

// Pregunta 5: Calificación de estudiantes
let puntaje = prompt("Ingrese el puntaje del estudiante:");

if (puntaje >= 80 && puntaje <= 100) {
    console.log("Calificación: A");
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("Calificación: B");
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("Calificación: C");
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("Calificación: D");
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("Calificación: F");
} else {
    console.log("Puntaje no válido.");
}
