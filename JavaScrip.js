document.getElementById('myFrom').addEventListener('submit', function (event) {
    event.preventDefault();

    const Nombre = document.getElementById('Nombre').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const DNI = document.getElementById('DNI').value.trim();
    const Gmail = document.getElementById('Gmail').value.trim();
    const Direccion = document.getElementById('Direccion').value.trim();
    const Telefono = document.getElementById('Telefono').value.trim();
    const GeneroSeleccionado = document.querySelector('input[name="genero"]:checked');
    const estado = document.getElementById('mensaje-estado');

    estado.textContent = '';
    estado.className = '';

    if (Nombre === "" || DNI === "" || Gmail === "" || fechaNacimiento === "" || Direccion === "" || Telefono === "") {
        estado.textContent = "Error: Todos los campos obligatorios deben estar completos.";
        estado.className = 'error';
        return;
    }

    if (!Gmail.includes('@') || !Gmail.includes('.')) {
        estado.textContent = "Ingrese un correo electrónico válido.";
        estado.className = 'error';
        return;
    }

    if (DNI.length < 8) {
        estado.textContent = "El DNI debe tener al menos 8 caracteres.";
        estado.className = 'error';

        return;
    }

    if (!GeneroSeleccionado) {
        estado.textContent = "Por favor, seleccione una opción en Género.";
        estado.className = 'error';
        return;
    }
    
    document.querySelectorAll('.btn-primary').forEach(boton => {
        boton.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'Formulario.html';
        });
    });

    estado.textContent = "¡Preinscripción enviada con éxito!";
    estado.className = 'exito';

    document.getElementById('myFrom').reset();
});