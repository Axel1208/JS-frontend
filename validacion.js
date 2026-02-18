let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let mensaje = document.getElementById("mensaje");
let loginForm = document.getElementById("loginForm");

// ===== PREVENIR ENVÍO DEL FORMULARIO =====
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
});

// ===== USUARIO =====
usuario.addEventListener("input", function () {
  this.value = this.value.toLowerCase();

  // Permitir letras, números, guiones y puntos
  const regexValido = /^[a-z0-9.-]*$/;

  if (!regexValido.test(this.value)) {
    mensaje.textContent = "Caracter no permitido. Solo letras, números, '-' y '.'";
    this.style.border = "2px solid red";
  } else if (this.value.length > 0 && this.value.length < 3) {
    mensaje.textContent = "Usuario muy corto. Mínimo 3 caracteres";
    this.style.border = "2px solid orange";
  } else if (this.value.length >= 3) {
    mensaje.textContent = "Usuario válido";
    this.style.border = "2px solid green";
  } else {
    mensaje.textContent = "Campo requerido";
    this.style.border = "2px solid gray";
  }

  // Eliminar caracteres no permitidos
  this.value = this.value.replace(/[^a-z0-9.-]/g, "");
});

// ===== CONTRASEÑA =====
password.addEventListener("input", function () {
  if (this.value.length === 0) {
    mensaje.textContent = "Campo requerido";
    this.style.border = "2px solid gray";
  } else if (this.value.length < 10) {
    mensaje.textContent = "Contraseña inválida. Mínimo 10 caracteres";
    this.style.border = "2px solid red";
  } else {
    mensaje.textContent = "Contraseña válida";
    this.style.border = "2px solid green";
  }
});
