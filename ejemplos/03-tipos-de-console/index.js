//Tipos de console en javascript

// console.log()
console.log("muestra un mensaje en consola sin ningun formato")

// console.error()
console.error("muestra un mensaje en consola, en formato de error de color rojo")

// console.info()
console.info("muestra un mensaje en consola, en formato de informacion de color azul")

// console.warning()
console.warn("muestra un mensaje en consola, en formato de alarma o atención de color amarillo")

// console.table()
const arr = [
    {id: 1, nombre: "Daniel",  edad: 50},
    {id: 2, nombre: "Felipe",  edad: 25},
    {id: 3, nombre: "Lucia",  edad: 30},
    {id: 4, nombre: "Samuel",  edad: 37},
    {id: 5, nombre: "Gina",  edad: 89},
]
console.table(arr) // muestra en la consola, de forma organizada tomando como datao de entrada un array de parametros

// console.group()

console.group("Personas");
console.log("Persona 1");
console.log("Persona 2");
console.log("Persona 3");
console.log("Persona 4");
console.log("Persona 5");
console.groupEnd();