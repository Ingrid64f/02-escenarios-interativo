function desaparecerYReaparecer(el, tiempo = 700) {
  el.style.visibility = "hidden";
  setTimeout(() => (el.style.visibility = "visible"), tiempo);
}

// Función contador infinito + sonido
function aplicarContador(selector, contadorId, audioId) {
  const elementos = document.querySelectorAll(selector);
  const contadorEl = document.getElementById(contadorId);
  const audioEl = document.getElementById(audioId);
  let total = 0;

  elementos.forEach((el) => {
    el.addEventListener("click", () => {
      desaparecerYReaparecer(el);
      total++;
      if (contadorEl) contadorEl.textContent = total;
      if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
      }
    });
  });
}

/* ======== ESCENARIO 1 ======== */
aplicarContador(".objeto.flor", "florCount", "sndPop");
aplicarContador(".objeto.muñeco", "muñecoCount", "sndPop");
aplicarContador(".objeto.caracol", "", "sndCaracol");
aplicarContador(".objeto.piedras", "", "sndPiedras");

/* ======== ESCENARIO 2 ======== */
aplicarContador(".objeto.arma", "armaCount", "sndSonidoApuñalada");
aplicarContador(".objeto.dedos", "", "sndHuesoRoto");
aplicarContador(".objeto.personaje1", "", "sndRisaDeHombre");

/* ======== ESCENARIO 3 ======== */
aplicarContador(".objeto.silla", "sillaCount", "sndSilla");
aplicarContador(".objeto.luchador1", "", "sndPuño");
aplicarContador(".objeto.luchador2", "", "sndPuño");

/* ======== ALERTAS ======== */
const alertas = [
  { selector: ".objeto.caracol", mensaje: "¡El caracol se esconde en su caparazón!" },
  { selector: ".objeto.piedras", mensaje: "¡Has tocado las piedras del bosque!" },
  { selector: ".objeto.personaje1", mensaje: "El personaje te observa desde la sombra..." },
  { selector: ".objeto.dedos", mensaje: "Has encontrado los dedos del mal..." },
  { selector: ".objeto.luchador1", mensaje: "¡El luchador entra en acción, corre!" },
  { selector: ".objeto.luchador2", mensaje: "¡El segundo luchador se prepara para atacar wio wio!" },
];

alertas.forEach(({ selector, mensaje }) => {
  const el = document.querySelector(selector);
  if (el) el.addEventListener("click", () => alert(mensaje));
});

/* ================= CARRUSEL ================= */

const escenarios = document.querySelectorAll(".escenario");
const anterior = document.querySelector(".flecha.anterior");
const siguiente = document.querySelector(".flecha.siguiente");
const miniaturas = document.querySelectorAll(".miniatura");

let indice = 0;

function mostrarEscena(i) {
  if (i < 0) i = escenarios.length - 1;
  if (i >= escenarios.length) i = 0;

  escenarios.forEach(e => e.classList.remove("activo"));
  miniaturas.forEach(m => m.classList.remove("activaMini"));

  escenarios[i].classList.add("activo");
  if (miniaturas[i]) miniaturas[i].classList.add("activaMini");

  indice = i;
}

siguiente.addEventListener("click", () => mostrarEscena(indice + 1));
anterior.addEventListener("click", () => mostrarEscena(indice - 1));

miniaturas.forEach((m, i) => {
  m.addEventListener("click", () => mostrarEscena(i));
});

mostrarEscena(0);

