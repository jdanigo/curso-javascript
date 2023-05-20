//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

window.addEventListener('load', ()=>{

    const btnGuardar = document.getElementById("guardar");
    const btnGenerar = document.getElementById("generar-titulo");
    const titulo = document.getElementsByClassName("titulo");
    const tituloById = document.getElementById("titulo2");
    const h1 = document.getElementsByTagName("h1");
    console.log("mostrando titulo", titulo);
    console.log("mostrando titulo by id", tituloById);
    console.log("mostrando h1", h1);

    let saved = [];
    btnGuardar.addEventListener('click', ()=>{
        const tarea = document.getElementById("tarea");
        const list = document.getElementById("guardados");
        saved.push(tarea.value)
        list.innerHTML = saved;
    })

    btnGenerar.addEventListener('click', ()=>{
        tituloById.innerText = "Soy un titulo modificado"
        tituloById.style = `background: gray; color: white; border: 1px solid red;text-align:center;`
    })


})

