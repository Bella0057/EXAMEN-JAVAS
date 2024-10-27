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

    function calcularCostoEstacionamiento(horas) {
    let costo;
    if (horas < 2) {
        costo = horas * 3000;
    } else if (horas <= 5) {
        costo = horas * 2500;
    } else {
        costo = horas * 2000;
    }
    return costo;
}

function mostrarTotalEstacionamiento(costo) {
    alert(`El costo total del estacionamiento es: $${costo}`);
}

function sistemaEstacionamiento() {
    iniciarSesion();

     if (usuarioActual) {
        let continuar = true;

        while (continuar) {
            const horasEstacionadas = capturarHorasEstacionamiento();
            const costo = calcularCostoEstacionamiento(horasEstacionadas);
            mostrarTotalEstacionamiento(costo);

                    continuar = confirm("¿Desea calcular el costo para otro vehículo?");
        }
    }
}