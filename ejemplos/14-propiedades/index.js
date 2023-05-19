//Ejemplos de propiedades

//length -> permite saber la longitud de un array
let arr = ["daniel", "pedro", "juan", "camilo"];
let arr2 = ["samanta", "estefania", "camila", "fernanda"];
console.log(arr.length);
console.log(arr)

//push -> agrega uno o mas elementos al final de un array y devuelve
// la nueva longitud del array
arr.push("miguel");
console.log(arr.length)
console.log(arr)

//pop -> eliminar el ultimo elemento de un array
arr.pop();
console.log(arr.length)
console.log(arr)

//shift -> elimina el primer elemento del array y lo devuelve
arr.shift();
console.log(arr.length)
console.log(arr)

//unshift -> agrega uno o mas elemento al inicio del array
arr.unshift("nicolas");
console.log(arr.length)
console.log(arr)

//concat -> combina uno o mas arrays y devuelve un solo array combinado
let newArr = arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(newArr);

//slice -> devuelve una copia superficial de una porcion del array
let newSliceArr = newArr.slice(1,5);
console.log(newSliceArr)

//splice -> cambia el contenido de un array, eliminandolo, reemplazandolo o agregando elementos.
// modifica el array original y devuelve un nuevo array con los elementos modificados o eliminados.

let deletedElements = newArr.splice(6,2)
console.log(newArr)
console.log(deletedElements)

//filter -> crea un nuevo array con todos los elementos que pasen la evaluacion.

let personas = [
    {
        nombre: "Daniel",
        apellido : "Garces",
        edad: 50
    },
    {
        nombre: "Miguel",
        apellido : "Ospina",
        edad: 50
    },
    {
        nombre: "Daniel",
        apellido : "Alfaro",
        edad: 50
    },
    {
        nombre: "Samuel",
        apellido : "Suarez",
        edad: 50
    }
]

let nuevasPersonas = personas.filter((data)=> data.nombre == 'Daniel');
console.log(nuevasPersonas)

// find -> permite encontrar el primer elemento que cumpla con la condicion

console.log(personas.find((data)=> data.nombre == "Daniel"));

//indexOf -> devuelve el primer indice que se encuentre dentro de un elemento especificado
// devuelve -1 si el elemento que se busca no está presente.
console.log(newArr)
console.log(newArr.indexOf("juan"))

console.log(personas)
let resultadoPersonas = personas.map((data)=>data.nombre+' '+data.apellido).indexOf("Daniel Garces");
console.log(resultadoPersonas)