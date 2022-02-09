console.log(
  "0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos"
);

//Crear una variable para almacenar tu nombre
var nombre = "Guzman";
//Crear una variable para almacenar tus apellidos
var apellidos = "Suarez Alvarez";
//Crear una variable para almacenar tu edad
var edad = 22;
//Almacenar en una constante tu nombre y apellidos
const NOMBRE_APELLIDOS = "Guzman Suarez alvarez";
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Hola, mi nombre es: " + NOMBRE_APELLIDOS);
//Muestra por pantalla el valor de una constante vacía
const VACIA = "";
console.log(VACIA);
//Muestra por pantalla el valor de una constante sin definir
//console.log(sin_definir);
//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
//NOMBRE_APELLIDOS="Juan";
//console.log(NOMBRE_APELLIDOS);
//Comprueba el tipo de dato de la variable con tu edad
console.log(typeof edad);
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;
if (edad >= 18) {
  mayorDeEdad = true;
}
console.log(mayorDeEdad);
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorDeEdad2 = false;
if (edad >= 18) {
  mayorDeEdad2 = true;
}
console.log(mayorDeEdad2);
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1 = 10;
var num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
var suma = "suma: " + (num1 + num2);
var resta = "resta: " + (num1 - num2);
var multiplicacion = "multiplicacion: " + num1 * num2;
var division = "division: " + num1 / num2;
var resto = "resto: " + (num1 % num2);
let operaciones = [suma, resta, multiplicacion, division, resto];
for (var oper of operaciones) {
  console.log(oper);
}
//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
let base = prompt("Introduce la base del triangulo");
let altura = prompt("Introduce la altura del triangulo");
console.log("La base es " + base + " y la altura es " + altura);
console.log("El area del tringulo es " + (base * altura) / 2);
//Calcular el área de una circunferencia para un radio dado
let radio = prompt("Introduce el radio de la circunferencia");
console.log("El radio introducido es " + radio);
console.log("El area de la circunferencia es " + Math.PI * radio * radio);
//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
const GRAVEDAD = 9.8;
let alturaObj = prompt("Introduce la altura en metros desde la que cae");
var velocidad = Math.sqrt(2 * GRAVEDAD * alturaObj);
var tiempo = velocidad / GRAVEDAD;
console.log(
  "El tiempo de caida es de " +
    tiempo +
    " segundos, para un objeto desde una altura de " +
    alturaObj +
    " metros"
);
//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
const RADIOTIERRA = 6371000;
const RADIOLUNA = 1737400;
const VOLTIERRA = 1.25 * Math.PI * Math.pow(RADIOTIERRA, 3);
const VOL_LUNA = 1.25 * Math.PI * Math.pow(RADIOLUNA, 3);
console.log("El volumen de la tierra es de " + VOLTIERRA + " m^3");
console.log("El volumen de la luna es de " + VOL_LUNA + " m^3");
console.log(
  "El volumen de la tierra es " +
    VOLTIERRA / VOL_LUNA +
    " veces mayor que el de la luna"
);
