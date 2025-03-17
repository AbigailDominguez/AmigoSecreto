// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación de datos de entrada
    if (nombre === '' || !isNaN(nombre)) {
        alert('Por favor, ingrese un nombre válido (no vacío y sin números).');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    input.value = ''; // Limpiar el campo de texto
    actualizarLista(); // Actualizar la lista de amigos
    input.focus(); // Seleccionar el campo de entrada
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para mostrar/ocultar elementos
function toggleVisibility(selector, isVisible) {
    const element = document.querySelector(selector);
    element.style.display = isVisible ? 'flex' : 'none';
}

// Función para actualizar el botón
function actualizarBoton(contenido, onClick) {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = `<button class="button-draw" onclick="${onClick}">${contenido}</button>`;
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agregue nombres primero.');
        return;
    }

    // Escoger un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;

    // Limpiar el array y actualizar la interfaz
    amigos = [];
    toggleVisibility('.input-wrapper', false);
    toggleVisibility('.section-title', false);
    actualizarBoton('Volver a jugar', 'reiniciarJuego()');

    // Seleccionar el botón "Volver a jugar"
    const button = document.querySelector('.button-draw');
    button.focus(); // Seleccionar el botón
}

// Función para reiniciar el juego
function reiniciarJuego() {
    toggleVisibility('.input-wrapper', true);
    toggleVisibility('.section-title', true);
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = []; // Reiniciar el array

    // Restaurar el botón "Sortear amigo"
    const buttonContent = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    actualizarBoton(buttonContent, 'sortearAmigo()');
}