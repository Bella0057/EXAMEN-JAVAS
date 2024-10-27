let usuarios = {
  usuario1: "password1",
  usuario2: "password2",
};

let usuarioActual = null;

function iniciarSesion() {
  const usuario = prompt("Ingrese su nombre de usuario:");
  const contrasena = prompt("Ingrese su contraseña:");

  if (usuarios[usuario] && usuarios[usuario] === contrasena) {
    usuarioActual = usuario;
    alert("Inicio de sesión exitoso.");
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
