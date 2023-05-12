//Tipos de datos en javascript

//Tipos de datos primitivos
// son datos simples y no tienen propiedades ni métodos
// se almacenan directamente sobre una variable, cuando se asignan a otra variable se copia el valor.

//number
let edad = 26; // numero entero
let altura = 2.34; // numero decimal

//string
let nombre = "Daniel"; //forman una cadena de caracteres
let apellido = "Garces";

//boolean
let casado = false // representa un valor verdadero o falso

//null
let direccion = null; //representa un valor nulo o vacio.

//undefined
let correo = undefined //representa un valor no definido o desconocido.

//symbol
let uniqueID = Symbol("1234"); // representa un valor único e inmutable, que se utiliza como clave de propiedad

//bigint
let numeroGrande = 9009009009004005006007008001000n; // representa un número entero grande y se le conoce si al final tiene la letra n


//Tipos de datos compuestos
// Los tipos de datos compuestos en javascript, son aquellos que pueden 
// contener multiples valores o elementos y estos mismos se pueden combinar con los tipos de datos primitivos.
// Principalmente tenemos 3 tipos de datos compuestos en javascript

// Array
let arr = [];
let numeros = [1,2,3,4,5,6];
let colores = ["rojo", "amarillo", "verde"];
let personas = ["daniel", "jorge", "carlos"];

// Object
let obj = {};
let persona = {
    nombre: "Daniel",
    apellido: "Garces",
    edad: 40,
    direccion: null,
    telefono: undefined,
    casado: false,
    saludar: function(){console.log("saludar") },
    amigos: [
        "felipe",
        "emilio",
        "zacarias"
    ]
}


// Function
function sayHello();