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

// OBJETOS:

// 6. Clase Ficha
class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }

    anotar(kms) {
        this.sesiones.push(kms);
        this.numsesiones++;
    }

    media() {
        const total = this.sesiones.reduce((a, b) => a + b, 0);
        return total / this.numsesiones;
    }
}

// 7. Clase Factura
class Factura {
    constructor(idCliente, total) {
        this.idCliente = idCliente;
        this.total = total;
        this.estado = "pendiente";
    }

    cobrar() {
        this.estado = "pagada";
    }

    imprimir() {
        const cliente = clientes[this.idCliente];
        console.log(`Factura:
        Cliente: ${cliente.nombre}
        Email: ${cliente.email}
        Teléfono: ${cliente.telefono}
        Total: $${this.total}
        Estado: ${this.estado}`);
    }
}

const clientes = [
    { nombre: "Karina", email: "bravokarina51@gmail.com", telefono: "3875222620" },
    { nombre: "Alejandra", email: "alejandra@gmail.com", telefono: "3875222621" },
    { nombre: "Bravo", email: "bravo@gmail.com", telefono: "3875222622" }
];

const factura1 = new Factura(0, 5000);
factura1.cobrar();
factura1.imprimir();

// 8. Clases Proveedor y Articulo
class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Articulo {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    telefono() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

const proveedor1 = new Proveedor("Preventista Bravo", "bravo@proveedor.com", "3875222623");
const articulo1 = new Articulo("Teclado", 2500, proveedor1);
console.log(articulo1.telefono());
