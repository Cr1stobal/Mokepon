let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById('botonFuego')
  botonFuego.addEventListener('click', ataqueFuego)
  let botonAgua = document.getElementById('botonAgua')
  botonAgua.addEventListener('click', ataqueAgua)
  let botonTierra = document.getElementById('botonTierra')
  botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascotaJugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "hipodoge";
  } else if (inputCapipepo.checked) {
    alert("Selecionaste a Capipepo");
  } else if (inputRatigueya.checked) {
    alert("Seleccionaste Ratigueya");
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

function ataqueFuego() {
  ataqueJugador = 'Fuego'
  ataqueAleatorioEnemigo()

  function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
  }

  function ataqueTierra() {
    ataqueJugador = ('Tierra')
    ataqueAleatorioEnemigo()
  }

  function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
      ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
      ataqueEnemigo('Agua')
    } else {
      ataqueEnemigo = "Tierra"
    }
  }


  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  window.addEventListener("load", iniciarJuego)
