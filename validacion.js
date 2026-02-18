let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let mensajeUsuario = document.getElementById("mensajeUsuario");
let mensajePassword = document.getElementById("mensajePassword");
let contadorPassword = document.getElementById("contadorPassword");
let btnLogin = document.getElementById("btnLogin");
let togglePassword = document.getElementById("togglePassword");

let intentos = 0;
let bloqueoActivo = false;

// ===== USUARIO =====
usuario.addEventListener("input", function () {
    this.value = this.value.toLowerCase();
    const regexValido = /^[a-z0-9.-]*$/;

    if (!regexValido.test(this.value)) {
        mensajeUsuario.textContent = "Caracter no permitido";
        this.style.border = "2px solid red";
    } else if (this.value.length < 3) {
        mensajeUsuario.textContent = "Mínimo 3 caracteres";
        this.style.border = "2px solid orange";
    } else {
        mensajeUsuario.textContent = "Usuario válido";
        this.style.border = "2px solid green";
    }

    this.value = this.value.replace(/[^a-z0-9.-]/g, "");
});

// ===== PASSWORD =====
password.addEventListener("input", function () {
    contadorPassword.textContent = `${this.value.length} caracteres`;

    if (this.value.length < 10) {
        mensajePassword.textContent = "Mínimo 10 caracteres";
        this.style.border = "2px solid red";
    } else if (!/[A-Z]/.test(this.value) || !/[0-9]/.test(this.value) || !/[^A-Za-z0-9]/.test(this.value)) {
        mensajePassword.textContent = "Incluye mayúsculas, números y símbolos";
        this.style.border = "2px solid orange";
    } else {
        mensajePassword.textContent = "Contraseña fuerte";
        this.style.border = "2px solid green";
    }
});

// ===== MOSTRAR / OCULTAR =====
togglePassword.addEventListener("click", function () {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.textContent = password.type === "password" ? "Mostrar" : "Ocultar";
});

// ===== LOGIN =====
btnLogin.addEventListener("click", function () {
    if (bloqueoActivo) return;

    const usuarioValido = usuario.value.length >= 3;
    const passwordValida =
        password.value.length >= 10 &&
        /[A-Z]/.test(password.value) &&
        /[0-9]/.test(password.value) &&
        /[^A-Za-z0-9]/.test(password.value);

    if (usuarioValido && passwordValida) {
        alert("✅ Login exitoso");
        intentos = 0;
    } else {
        intentos++;
        alert(`❌ Datos incorrectos. Intento ${intentos} de 3`);

        if (intentos === 3) {
            bloqueoActivo = true;
            btnLogin.disabled = true;
            alert("🔒 Bloqueado por 30 segundos");

            setTimeout(() => {
                bloqueoActivo = false;
                btnLogin.disabled = false;
                intentos = 0;
            }, 30000);
        }
    }
});
