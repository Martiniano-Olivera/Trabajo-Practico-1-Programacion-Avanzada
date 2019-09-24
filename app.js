//! Ejercicio 1

/* let edad = prompt('Ingrese su edad: ');
console.log(`Su edad es ${edad}`);
 */
//? Ejercicio 2
/* let a = prompt('Ingrese primer numero: ');
let b = prompt('Ingrese segundo numero: ');
let suma = parseInt(a) + parseInt(b);
console.log(`${a} + ${b} = ${suma}`);
console.log(`${a} - ${b} = ${a-b}`);
console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${a/b}`); */

//*Ejercicio 3 y 4
/* 
let sexo = prompt('Indique sexo F o M: ');

if ((edad >= 60 && sexo.toLowerCase() === 'f') || (edad >= 65)) {
    console.log('Está en edad de jubilarse.');
} else {
    console.log('No está en edad de jubilarse.');
}
 */
//todo Ejercicio 5

/* let cuenta, edad;

for (cuenta = 0; cuenta < 10; cuenta++) {
    edad = prompt('Ingrese su edad: ');
    edad = parseInt(edad);
    if (edad >= 18) {
        console.log('Sos mayor de edad.');
    } else {
        console.log('No sos mayor de edad.');
    }
}
 */

//!Ejercicio 6

/* function fondoRojo() {
    document.bgColor = "#c0392b";
}

function fondoVerde() {
    document.bgColor = "#2ecc71";
}

function fondoAzul() {

    document.bgColor = "#2980b9";
} */
/* 
//? Ejercicio 7 

function alumnadoUADER() {
    var alumnos = [];

    alumnos[0] = 'Martiniano';
    alumnos[1] = 'Mariano';
    alumnos[2] = 'Martin';
    alumnos[3] = 'Matias';
    alumnos[4] = 'Maximiliano';

    let buscado = prompt('Ingrese alumno para buscar:');
    let encontrado = false;
    let cont = 0;



    for (let index = 0; index < alumnos.length; index++) {
        encontrado = buscado == alumnos[index];
         
        ! Buscar ->console.log(`Alumnos[index]: ${alumnos[index]}`);
        ! no va console.log(`Buscado: ${buscado}`);
        !no va console.log(`Encontrado: ${encontrado}`);


        !no va alumnos[index] === buscado ? encontrado : console.log('No existe pa');
        if (encontrado) {
            console.log('Ese alumno existe.');
            return true;
        }
    }
    if (!encontrado) {
        alert('Ese alumno no existe.');
    }
}

alumnadoUADER(); */