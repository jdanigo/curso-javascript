//Scope en javascript

/*
Scope se le conoce como el alcance que tienen las declaraciones de variables.
El alcance se refiere a la accesibilidad que tienen las variables y las funciones en diferentes partes del codigo.
Scope (alcance) y tenemos 2 tipos de alcance
Alcance Global (Global Scope)
Alcance Local (Block Scope)

*/

// Cuando una variable se declara por fuera de una función, tiene un alcance global
//y se puede acceder a ella desde cualquier parte del codigo
var globalVar = "Variable global";

function sayHello(){
    console.log(globalVar+1)
}

console.log(globalVar+2);

sayHello();

//NOTA: Toda variable que sea global, puede ejecutarse en ambos sentidos, es decir:

//se puede ejecutar tanto en el scope global, como en un scope local