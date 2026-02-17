let usuario = document.getElementById("usuario")
let password = document.getElementById("password")
let mensaje = document.getElementById("mensaje")

// ===== USUARIO =====
usuario.addEventListener("input", function (evento) {
  this.value = this.value.toLowerCase()

  if (/[^a-z]/g.test(this.value)) {
    mensaje.textContent = "Esta tratando de ingresar un valor incorrecto"
    this.style.border = "2px solid red"
  }
  else if (this.value) {
    mensaje.textContent = "usuario correcto"
  }
  else {
    mensaje.textContent = "campo requerido"
    this.style.border = "2px solid green"
  }

  this.value = this.value.replace(/[^a-z]/g, "")
})

// ===== CONTRASEÑA =====
password.addEventListener("input", function (evento) {

  if (this.value.length < 10 && this.value.length > 0) {
    mensaje.textContent = "Contraseña inválida"
    this.style.border = "2px solid red"
  }
  else if (this.value.length >= 10) {
    mensaje.textContent = "Usuario correcto"
    this.style.border = "2px solid green"
  }
  else {
    mensaje.textContent = "campo requerido"
    this.style.border = "2px solid red"
  }

})
