document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var valid = true;

    emailError.textContent = '';
    passwordError.textContent = '';

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
    }

    if (valid) {
        // Mostrar mensaje de agradecimiento
        document.title = "Muchas Gracias! Revisa tu correo";
        document.querySelector('.loguearse').style.display = 'none';
        document.getElementById('graciasMsj').style.display = 'block';
    }
    
});
