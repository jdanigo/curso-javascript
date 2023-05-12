//Asincronismo
// una operación asíncrona es aquella que permite que el código continúe
// ejecutándose sin bloquear mientras la operación se está realizando
// en lugar de esperar a que la operación se complete
// se proporciona una devolución de llamada a esto se le conoce como callback o promesa

console.log("hola");
setTimeout(()=>{
    console.log("soy una operacion asincrona")
},5000)
console.log("hola mundo")