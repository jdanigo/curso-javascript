//Hoisting
/*
El hoisting en javascript es un comportamiento que nos permite hacer que las 
declaraciones de variables y funciones se muevan automáticamente al scope mas alto durante
la fase de compilación
*/

console.log(x) // undefined
var x = 10;
console.log(x) // 10

foo() // Saludar

function foo(){
    console.log("hola")
}