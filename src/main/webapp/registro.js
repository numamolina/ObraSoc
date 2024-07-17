document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nomyApe = document.getElementById('nomyApe').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var nomyApeError = document.getElementById('nomyApeError');
    var telefonoError = document.getElementById('telefonoError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    
    var valid = true;

    nomyApeError.textContent = '';
    telefonoError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (!nomyApe) {
        nomyApeError.textContent = 'El campo de nombre y apellido no puede estar vacío';
        valid = false;
    } else if (nomyApe.length < 3 || nomyApe.length > 100) {
        nomyApeError.textContent = 'El nombre y apellido debe tener entre 3 y 100 caracteres';
        valid = false;
    }

    if (!telefono) {
        telefonoError.textContent = 'El campo de teléfono no puede estar vacío';
        valid = false;
    } else if (!/^\d{10}$/.test(telefono)) {
        telefonoError.textContent = 'El telefono deben ser 10 numeros';
        valid = false;
    }

    if (!email) {
        emailError.textContent = 'El campo de email no puede estar vacío';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'El formato del email es incorrecto';
        valid = false;
    }

    if (!password) {
        passwordError.textContent = 'El campo de contraseña no puede estar vacío';
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        valid = false;
    }

    if (valid) {
        // Mostrar mensaje de agradecimiento
        document.title = "Registro Exitoso";
        document.querySelector('.registrarse').style.display = 'none';
        document.getElementById('graciasMsj').style.display = 'block';
    }
});
