function agregarItem(){

    const item = document.querySelector('#item');
    var lista = document.querySelector('#lista');
    var nuevoItem = document.createElement("li");
    
    nuevoItem.appendChild(document.createTextNode(item.value));
    lista.appendChild(nuevoItem);
    document.getElementById("item").value = "";
}