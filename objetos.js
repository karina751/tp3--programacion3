//BASICO:
 /* 1.Has hecho una compra y sabes el precio del producto ($300) y su iva (21%). 
 Haz un script que te calcule el precio total que vas a pagar por tu compra.
 Recordar que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.*/

// Calcular precio total mas el IVA
let precio = 300;
let iva = 21;
let total = precio + (precio * iva / 100);
console.log("Precio total con IVA: $" + total);

/* 2. En una variable tienes el lado de un cuadrado, debes escribir un programa que 
te calcule el área y el perímetro del cuadrado.*/

// Calcular el Área y Perímetro de un cuadrado
let lado = 5;
let area = lado * lado;
let perimetro = lado * 4;
console.log("Área: " + area);
console.log("Perímetro: " + perimetro);

/* 3. Un poco de interactividad. En este ejercicio debes escribir un programa que lea 
el nombre del usuario y salude con un "Hola" seguido del nombre del usuario. 
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu 
nombre" */

// Hola al usurio
let nombre = prompt("Escribe tu nombre:");
alert("Hola, como estas " + nombre);

/* 4. Pedir al usuario que teclee tres números enteros y el script mostrará como 
resultado el valor promedio de los tres. */

// Promedio de tres números
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));
let promedio = (num1 + num2 + num3) / 3;
alert("Tu promedio seria: " + promedio);

/* 5. Escribe un programa que solicite al usuario ingresar el número de litros de nafta 
consumidos por su coche, luego le pide el número de kilómetros recorridos. El 
script debe mostrar el consumo de combustible por kilómetro.*/

// Consumo de combustible por kilómetro

let litros = parseFloat(prompt("¿Cuántos litros de nafta consumiste en tu auto?"));
let kilometros = parseFloat(prompt("¿Cuántos kilómetros recorriste con el?"));
let consumo = litros / kilometros;
alert("Consumo total por kilómetro de tu vehiculo es: " + consumo.toFixed(2) + " l/km");



