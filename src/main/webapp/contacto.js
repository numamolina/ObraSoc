document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var nombreError = document.getElementById('nombreError');
    var correoError = document.getElementById('correoError');
    var mensajeError = document.getElementById('mensajeError');
    
    var valid = true;

    nombreError.textContent = '';
    correoError.textContent = '';
    mensajeError.textContent = '';

    if (!nombre) {
        nombreError.textContent = 'El campo de nombre no puede estar vacío';
        valid = false;
    } else if (nombre.length < 3 || nombre.length > 100) {
        nombreError.textContent = 'El nombre debe tener entre 3 y 100 caracteres';
        valid = false;
    }

    if (!correo) {
        correoError.textContent = 'El campo de correo no puede estar vacío';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        correoError.textContent = 'El formato del correo es incorrecto';
        valid = false;
    }

    if (!mensaje) {
        mensajeError.textContent = 'El campo de mensaje no puede estar vacío';
        valid = false;
    } else if (mensaje.length < 10) {
        mensajeError.textContent = 'El mensaje debe tener al menos 10 caracteres';
        valid = false;
    }

    if (valid) {
        // Mostrar mensaje de agradecimiento
        document.title = "Mensaje Enviado";
        document.querySelector('.contacto').style.display = 'none';
        document.getElementById('graciasMsj').style.display = 'block';
    }
});
