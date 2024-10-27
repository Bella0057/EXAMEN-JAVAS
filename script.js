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

function capturarHorasEstacionamiento() {
    const horaEntrada = prompt("Ingrese la hora de entrada (HH:MM):");
    const horaSalida = prompt("Ingrese la hora de salida (HH:MM):");

    const [horasEntrada, minutosEntrada] = horaEntrada.split(':').map(Number);
    const [horasSalida, minutosSalida] = horaSalida.split(':').map(Number);

    const fechaEntrada = new Date(2023, 0, 1, horasEntrada, minutosEntrada);
    const fechaSalida = new Date(2023, 0, 1, horasSalida, minutosSalida);

    return (fechaSalida - fechaEntrada) / (1000 * 60 * 60);