//Estructuras de datos
/*
En javascript hay varias estructuras de datos, se utilizan para almacenar
y organizar los datos de forma eficiente.
Dentro de las estructuras de datos de tipo array, en TODOS los lenguajes de programacion
siempre siempre siempre, se van iniciar desde cero.
*/


//Arrays
const arr = [
1,2,3,4,5,6
]; // 1 sola dimensión

const arrBi = [
"manzana",
"pera",
 { personas: ["daniel","juan","pedro","camilo"] },
1,
["platanos", "yucas", "aguacates"],
2,
4,
null,
undefined
 
]; // bi dimensional


// console.log(arrBi[2].personas[1]);
console.log(arrBi[2]["personas"][1]);

//Objects

let obj = {
    clave : "valor"
}

let people = {
    nombre: "Daniel",
    apellidos: {
        apellido1: "Garces",
        apellido2: "Ospina",
        alternativo: {
            soltero: "Garces Ospina",
            casado: "Garces Garces"
        },
        "custom:userName" : "jdanigo",
        "custom:userEmail" : "jdanigo@cloudsoft.site",
        "custom:userRole": "Admin"
    }
} // people.nombre -> Daniel
// people.nombre.apellidos.apellido1 -> Garces
// people.nombre.apellidos.apellido2 -> Ospina
// people.nombre.apellidos.alternativo.casado -> Garces Garces
// people.apellidos["custom:userName"]

console.log(people.apellidos["custom:userEmail"]);


//VALIDACIONES


//VALIDANDO UN ARRAY

/*
Los arrays, se pueden validar o evaluar de acuerdo a su longitud.
se usa el comando .length
*/

let nombres = ["daniel", "camilo", "juan"];
// console.log(nombres.length)
// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[2])

// if(nombres.length > 0){

// }

if(nombres && nombres.length > 0){
    console.log(nombres.length)
}

// VALIDANDO UN OBJETO

let mascota = "pecas";

// FORMA ERRONEA DE VALIDAR UN OBJETO
if(mascota){
    console.log("tengo mascota")
}

// SINTAXIS DE UN OBJETO : clave, valor

//obteniendo las claves de mi objeto
console.log(Object.keys(mascota))
//obteniendo los valores de mi objeto
console.log(Object.values(mascota));

//FORMA CORRECTA DE VALIDAR SI UN OBJETO NO ESTA VACIO

if(mascota && typeof(mascota) == 'object' && Object.keys(mascota).length > 0){
    console.log("objeto valido")
}else{
    console.log("objeto invalido");
}
