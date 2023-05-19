//Un callback en javascipt, es una funcion, que se pasa como argumento a otra función
//y  se invoca dentro de función.
// En javascript las funciones son objetos de primera clase, lo que 
//significa que se pueden asignar variables, pasarsen como argumentos y devolver valores.

//Ejemplo 1

function sayHello(fn){
     console.log("Hola mundo")
    fn(); // 
}

function printMessage(){
    console.log("hola mundo2")
}

sayHello(printMessage);

// Ejemplo 2

function temporizator(fn){
    console.log("se ha iniciado un temporizador")
    setTimeout(()=>{
        fn()
    },2000)
}

function finish(){
    console.log("Operacion finalizada");
}

temporizator(finish)

// Ejemplo 3

function procesarEdad(edad, callback){
    console.log("mostrando edad", edad);
    callback(edad);
}

function esMayorEdad(edad){
    if(edad >= 18){
        console.log("es mayor de edad")
    }else{
        console.log("es menor de edad")
    }
}

procesarEdad(18, esMayorEdad);


// Ejemplo 4

function main(edad, callback){
   if(edad > 18){
    return callback("es mayor")
   }
   
   if(edad > 20){
    return callback("es menor aun")
   }
}

function secondary(result){
    console.log("mostrando resultado: ", result)
}

main(40, secondary);


function main(edad, callback){
    if(edad > 18){
     return callback("es mayor")
    }
    
    if(edad > 20){
     return callback("es menor aun")
    }
 }

 function multiplicar(numero, callback){
    callback(numero*2);
 }

 function dividir(numero, callback){
    callback(numero/2);
 }
 
 main(40, (result)=>{
    if(result == "es mayor"){
        multiplicar(20, (data)=>{
            console.log("mostrando resultado de multiplicar:", data)
            dividir(80, (data)=>{
                console.log("mostrando resultado de dividir:", data)
            })
        })
    }
});