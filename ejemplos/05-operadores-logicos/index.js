//Operadores logicos y de comparacion

/*
== : hace referencia a igual, comparar si dos valores son iguales
=== : hace referencia a estrictamente igual, compara que dos valores sean iguales incluyendo su tipo
!= : hace referencia a no igual, compara si dos valores no son iguales
!== : hace referencia a estrictamente no igual
! : hace referencia a la negacion

< : menor que
> : mayor que 
<= : menor o igual que
>= : mayor o igual que
|| : hace referencia a ó , en inglés OR
&& : hace referencia a y , en inglés AND

*/

// ==
let nombre = "daniel";
if(nombre == "daniel"){
    console.log("verdadero");
}

// ===
let edad2 = 50;
if(edad2 == "50"){
    console.log("verdadero");
}

// ===
let numero = "50";
if(edad === 50){
    console.log("verdadero");
}else{
    console.log("falso");
}


// ===
let edad = "50";
if(typeof(edad) == 'number' && edad === 50 || typeof(edad) == 'string' && edad == "50"){
    console.log("verdadero");
}

// !=
let apellido = "Garces";
if(apellido != "Garces"){
    console.log("verdadero");
}else{
    console.log("falso");
}

// !==
let telefono = "3122898647";
if(telefono !== "3122898647"){
    console.log("verdadero");
}else{
    console.log("falso");
}


// !==
let numeroLargo = 123456789456123123456789n;
if(numeroLargo !== 123456789456123123456789n){
    console.log("verdadero");
}else{
    console.log("falso");
}

// !
let casado = true
if(!casado){
    console.log("no es casado");
}else{
    console.log("es casado");
}

// < : menor que
let edad3 = 16;
if(edad3 < 18){
    console.log("es menor de edad")
}

// <= : menor o igual que
let edad4 = 18;
if(edad4 <= 18){
    console.log("es mayor de edad")
}

// > : mayor que
let edad5 = 28;
if(edad5 > 18){
    console.log("es mayor de edad")
}

// >= : mayor o igual que
let edad6 = 28;
if(edad6 >= 28){
    console.log("es mayor de edad")
}

let a = 28;
let b = 10;
let c = 30;
let d = 20;
if(a >= b){
    console.log("es mayor ")
}else{
    console.log("es menor")
}

// || : hace referencia a ó , en inglés OR
// && : hace referencia a y , en inglés AND
if(a < b || b > a){
    console.log("logica aqui")
}

if(a < b && c > d || a > b && c > d){
    console.log("logica aqui")
}

console.log(typeof(edad))