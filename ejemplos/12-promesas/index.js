// Que son las promesas en javascript
/*
 Es un objeto de javascript que representa la terminación o el fracaso eventual de una operación
 esta operación puede ser asíncrona, esencialmente es un valor devuelto por una operacón que aún no se ha completado
 Ej: consultar datos en una base de datos, consultar información en una api externa, manipular archivos etc
 Las promesas en javascript tienen diferentes estados, pendiente, cumplida, rechazada
 las mas comunes y las que conoces actualmente son rejected (rechazada) resolve (aprobada)

 Un dato muy importante a tener en cuenta es que las promesas en javascript son inmutables
 significa que una vez que una promesa resuelve o rechaza, su estado y valor no pueden cambiar
 sin embargo es de mencionar que una promesa puede ser encadenada o anidada a otra promesa.
 */


 //Promesa básica

let promesa = new Promise((resolve, reject)=>{
    let condicion = true;
    if(condicion)
    {
        setTimeout(()=>{resolve("Soy una promesa resuelta")},5000)
        
    }else{
        reject("Soy una promesa rechazada")
    }
})

//Vias para manejar una promesa

// Opcion 1 - legacy form o forma viejita o forma feita
// la opcion 1 devuelve una promesa
promesa
.then(response => console.log("promesa2",response)) // llega lo que la promesa resolvió o aprobó
.catch(error => console.log(error)) // llega lo que la promesa no resolvió o rechazó

// Opción 2 - forma moderna aplicando asyn/await
// la opcion 2 devuelve un objeto con el resultado de la promesa
// esta es una función declarativa
async function asyncFunctionTest(){
    try {
        const result = await promesa;
        console.log("mostrando result", result)
    } catch (error) {
        console.log(error)
    }
}

// funcion de flecha asincrona
const otherAsyncFunction = async () => {
    try {
        const result = await promesa;
        console.log("mostrando result", result)
    } catch (error) {
        console.log(error)
    }
}

// funcion anonima

let otherAsyncFunction2 = async function(){
    try {
        const result = await promesa;
        console.log("mostrando result", result)
    } catch (error) {
        console.log(error)
    }
}

asyncFunctionTest();
console.log("promesa1",promesa);


// Promesas anidadas

let promesa1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promesa1 resuelta")},1000)
})

let promesa2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promesa2 resuelta")},3000)
})

let promesa3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promesa3 resuelta")},5000)
})

promesa1
.then((response) => {
    console.log("mostrando promesa1",response)
    promesa2
    .then((response2) => {
        console.log("mostrando promesa2",response2, "resultado de la promesa1", response)
        promesa3.then((response3)=>{
            console.log("mostrando promesa3",response3)
        })
        .catch(error3 => console.log("mostrando error 3",error3))
    })
    .catch(error2 => console.log("mostrando error 2",error2))
})
.catch(error1 => console.log("mostrando error 1",error1))

// Todo o nada

// Forma 1 de todo o nada

Promise.all([promesa1, promesa2, promesa3])
.then(response => console.log("mostrando response todo o nada", response))
.catch(error => console.log("mostrando error de todo o nada", error))

// Forma 2 de todo o nada "destructurando"

const resultadoPromesas = async () => {
    try {
        const resultados  = await Promise.all([promesa1,promesa2, promesa3]);
        console.log("mostrando resultados", resultados);    
    } catch (error) {
        console.log("mostrando error de resultados", error);
    }
    
}
resultadoPromesas()



