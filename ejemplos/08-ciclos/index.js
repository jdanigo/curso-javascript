//Ciclos o bucles en javascript

/*
Los ciclos son una estructura de control en javascript que nos permite realizar tareas
repetitivas, en un bloque de codigo, N cantidad de veces, segun sea la condición específica.
Los bucles son útiles cuando necesitamos realizar tareas repetitivas sin tener que escribir varias veces el mismo codigo.

3 tipos de bucles

while -> se repite mientras una condicion sea verdadera, este evalua la condición al principio
do while -> es similar al while, pero se evalua la condición al final
for -> es una estructura de bucle mas compacta que combina la inicialización, la condición y la actualización en línea.
tiene una ventaja frente a los demás y es que me permite indicar exactamente la cantidad de veces que quiero que se repita dicha acción


while(condicion){

}

do {

} while(condicion);

for(inicializacion; condicion; actualizacion){

}

map() -> no se le considera un bucle, pero es una función de orden superior que se utiliza
conmumente para iterar sobre elementos de un arreglo.
la ventaja de map, es que genera un nuevo arreglo pudiendo permitir la salida del resultado.
sin embargo este proceso no altera en absoluto el array inicial.

forEach() -> es otra funcion de orden superior que permite iterar elementos de un arrelgo, parecido como lo hace map, recibe argumentos, 
permite ejecutar una funcion para cada uno de ellos, sin embargo foreach no devuelve un arreglo nuevo, si no que se utiliza
principalmente  para realizar una accion o ejecutar una operacion sobre cada elemento del arreglo

*/


//EJEMPLO DE WHILE

let contador = 0;

while(contador < 5){
    console.log(contador);
    contador++;
}

// EJEMPLO DE DO-WHILE

do {
    console.log(contador);
    contador++;
} while(contador < 5)


// EJEMPLO DE FOR

let frutas = ["manzana","pera", "banano", "guayaba", "piña", "cereza"];

for(let i = 0; i < frutas.length; i++){
    const element = frutas[i];
    console.log(element);

}


let personas = ["daniel", "ramon", "jose", "julio", "mario", "gustavo", "raquel", "natalia"];

let resultado = personas.map((data,index)=>{
    console.log(index)
    return {
        nombre: data,
        indice: index
    }
})
console.log(personas);
console.log(resultado);

let nombres = ["daniel", "garces", "jose", "aguilera"];

let resultadoPersonas = nombres.map((data, index)=>{
    if(index % 2 === 0){
        return{
            nombre: data,
            apellido: nombres[index+1]
        }
    }
    
})

console.log(resultadoPersonas);

let apellidos = ["garces", "garcia", "franco", "mendez", "jimenez"];

apellidos.forEach((data, index)=>{
    console.log(data, index)
})

//GENERADOR DE NOMBRES Y APELLIDOS

let arrNombres = ["daniel", "ramon", "jose", "julio", "mario", "gustavo", "raquel", "natalia"];
let arrApellidos = ["garces", "garcia", "franco", "mendez", "jimenez"];

let nuevaPersona = arrNombres.map((data)=>{
    let apellido = arrApellidos[Math.floor(Math.random() * arrApellidos.length)];
    return {
        nombre: data,
        apellido: apellido
    }
})

console.log(nuevaPersona)
