//Scope Local
//Cuando una variable se declara dentro de una funcion, tiene un alcance local y solo se puede acceder dentro de esa función.

let nombre;
function sayHello(){
    let nombre = "Daniel";
    console.log("Hola " +nombre);
    function sayHello2(){
        let nombre = "Jose";
        let apellido = "Jose";
        console.log("Hola "+ nombre);
        console.log("Hola "+ apellido);
    }
    console.log(apellido);
    sayHello2();
}
sayHello();
sayHello2();
console.log(nombre);
