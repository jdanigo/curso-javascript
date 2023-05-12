//Tipos de variables

/* VAR
se utiliza para declarar una variable de alcance global o local
sin embargo puede ser reasignada en cualquier momento.
una de las diferencias que tenemos al declarar una variable con var
es que tiene un alcance de función, significa que declara dentro de una función, solo se puede acceder a ella dentro de esa misma función
además var puede ser redeclarada sin error.
*/
var token; // valor en memoria es undefined
var token = "123" // valor en memoria es 123

/* LET
// se utiliza para declarar una variable con alcande de bloque y puede ser reasignada en cualquioer momento
// como ya dijmos, su alcance es a nivel de bloque, significa que si declaro una variable let dentro de un bloque
// no puedo utilizar esa variable por fuera de ese bloque, sin embargo si dentro de ese bloque tuviera mas bloques o subbloques, si podria usarla.
*/
let x = 10;

/* CONST
// es una palabra reservada de javascript, que se utiliza para declarar una variable de tipo constante que no podra ser reasignada en el futuro
// sin embargo el alcance que tiene const, es el mismo que tiene let, funciona a nivel de bloque, cuando decimos que no puede ser reasignada, significa
// que su valor ni su tipo puede ser cambiado en el futuro, despues de ser declarada e inicializada.
*/
const apellido = "Garces";

//CONCLUSION
/*
Las variables de tipo "var" se utilizan para declarar variables de alcance global o local,sin embargo estas pueden ser reasignadas en el futuro
Las variables de tipo "let" se usan para ara declarar variables de alcance de tipo bloque, su valor puede ser reasignado en el futuro
Las variables de tipo "const" se usan para declarar variables de tipo constante, su valor no podra ser cambiado ni de tipo ni de valor en el futuro.

Deben evitar el uso de var a toda costa.
1) El alcance de esta variable no es claro del todo. es demasiado peligroso usar var en un proyecto javascript.
2) Dificulta el trabajo en equipo, el uso de var puede hacer que el código sea mas difícil de leer y mantener, además entorpecerá el trabajo en equipo, dando lugar a fallos.
3) Permite la sobreescritura, asi es , la variable de tipo var, permite sobreescribir la definición e inicialización de la misma, en cualquier parte del archivo, sin importar el alcance
*/
