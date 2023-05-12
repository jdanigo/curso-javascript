//Tipos de funciones
/*
Son bloques de codigo reutilizables para realizar tareas específicas.
Las funciones hacen parte de los conceptos fundamentales del lenguaje de javascript
sin embargo tenemos varios tipos de funciones
*/

// Funciones declarativas
function saludar(){
    console.log("saludando")
}

// Funciones expresivas
const saludando = function(numeroa, numerob){
    console.log("la suma es",numeroa+numerob)
}

// Funciones de flecha (arrow functions) forma larga
const restar = (a,b) => {
    return a-b;
}

// Funciones de flecha (arrow functions) forma corta
const multiplicar = (a,b) => a*b

//Funciones de constructor
function Persona(){
    this.nombre = "Daniel";
    this.apellidos = "Garces";
    this.telefono = 312;
}

const persona = new Persona();
console.log(persona);


/*
NOTA:
Las funciones en javascript, permiten recibir argumentos o parametros.
estos son valores que se pasan dentro de la función, para luego ser usados dentro de la misma.
los tipos de argumentos o parametros, pueden ser de tipos primitivos o compuestos.
*/

const fnSaludar = (apellido, nombre ) => {
console.log(`Hola ${nombre} ${apellido}`)
}

fnSaludar("Jose", "Ospina");


const fnSaludar2 = function(obj){
    console.log(obj);
}

let persona2 = {
    nombres: "Daniel",
    apellidos: "Garces"
}
fnSaludar2(persona2);
