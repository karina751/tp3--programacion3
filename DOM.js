// Ejercicio 9 - Cambiar texto
function cambiarTexto() {
    document.getElementById("titulo").innerText = "Hola Mundo con Javascript";
}

// Ejercicio 10 - Cambiar estilo
function cambiarEstilo() {
    const titulo = document.getElementById("titulo");
    titulo.style.color = "red";
    titulo.style.textAlign = "center";
    
}

// Ejercicio 11 - Crear div
function creaDiv() {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.innerText = "Javascript permite crear páginas dinámicas.";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.style.marginTop = "10px";
    document.body.appendChild(nuevoDiv);
}

