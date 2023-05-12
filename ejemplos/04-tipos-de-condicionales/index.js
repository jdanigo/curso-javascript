//Tipos de condicionales
/*
Son estructuras de control de flujo, estas permiten tomar decisiones basadas en un resultado
estas decisiones, son tomadas en base a una evaluacion, por defecto una condicional, siempre siempre va devolver un valor booleano, verdadero o falso
se conforma de un bloque if en caso que sea verdadero, un bloque else, en caso que sea falso.
por lo que entenderiamos que su sintaxtis basica seria if(){}else{}
*/

//Tipo de condicional comun
let edad = 50;

if(edad == 20){
    //bloque en caso de ser verdadera la evaluacion
}else{
    //bloque en caso de ser false la evaluacion
}

//Tipo de condicional comun anidado o con multiples evaluaciones
if(edad == 20){
    //bloque en caso de ser verdadera la evaluacion
}else if(edad = 30){
    //bloque en caso de ser verdadera la evaluacion
}else if(edad = 35){
    //bloque en caso de ser verdadera la evaluacion
}else if(edad = 40){
    //bloque en caso de ser verdadera la evaluacion
}else{
    //bloque en caso de ser false la evaluacion
}

//Alternativas a if

//switch case

let diaSemana = 14;

switch(diaSemana){
    case 1:
        //....
        console.log("Es lunes")
    break;

    case 2:
        //....
        console.log("Es martes")
    break;

    case 3:
        //....
        console.log("Es miercoles")
    break;

    case 4:
        //....
        console.log("Es jueves")
    break;

    case 5:
        //....
        console.log("Es viernes")
    break;

    case 6:
        //....
        console.log("Es sabado")
    break;

    case 7:
        //....
        console.log("Es domingo")
    break;

    default: console.log("Dia no válido")
}


//Operador ternario, o condicional ternario
//sintaxis del condicional ternario
//variable -> evaluacion ? bloque verdadero : bloque falso;

let nombre = "Ramiro";
nombre == "Daniel" ? true /* bloque verdadero */ : false /* bloque falso */ ;

edad == 40 ? console.log("ya es mayor") : console.log("todavia no es mayor");

edad >= 18 ? console.log("ya es mayor de edad") : console.log("todavia no es mayor de edad");

//Operador ??
// se utiliza para proporcionar un valor predeterminado si un valor es null o undefined

edad == 20 // undefined o null

edad == 20 ?? ""

// si edad fuera undefined o null, va representar un string vacio

let apellido = null;
let resultado = apellido ?? "El apellido esta nulo";
console.log(resultado);