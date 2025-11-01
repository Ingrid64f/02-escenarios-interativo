
function desaparecerYReaparecer(el, tiempo = 700) {
  el.style.visibility = "hidden";
  setTimeout(() => (el.style.visibility = "visible"), tiempo);
}

function aplicarContador(selector, contadorId) {
  const elementos = document.querySelectorAll(selector);
  const contadorEl = document.getElementById(contadorId);
  let total = 0;

  elementos.forEach((el) => {
    let clics = 0;
    el.addEventListener("click", () => {
      if (clics >= 3) return;
      clics++;
      desaparecerYReaparecer(el);
      total++;
      if (contadorEl) contadorEl.textContent = total;
      if (clics >= 3) {
        el.style.opacity = "0.5";
        el.style.pointerEvents = "none";
      }
    });
  });
}

aplicarContador(".objeto.flor", "florCount");
aplicarContador(".objeto.muñeco", "muñecoCount");
aplicarContador(".objeto.arma", "armaCount");
aplicarContador(".objeto.silla", "sillaCount");


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


if (!escenarios || escenarios.length === 0) {
  console.error("No se encontraron elementos con la clase .escenario. Revisa el HTML.");
} else {

  function mostrarEscena(i) {
  
    if (i < 0) i = escenarios.length - 1;
    if (i >= escenarios.length) i = 0;

   
    escenarios.forEach(e => e.classList.remove("activo"));
    miniaturas.forEach(m => m.classList.remove("activaMini"));


    escenarios[i].classList.add("activo");
    if (miniaturas[i]) miniaturas[i].classList.add("activaMini");

    indice = i;
  }

  // Eventos botones 
  if (siguiente) {
    siguiente.addEventListener("click", () => mostrarEscena(indice + 1));
  } else {
    console.warn("Botón .flecha.siguiente no encontrado.");
  }

  if (anterior) {
    anterior.addEventListener("click", () => mostrarEscena(indice - 1));
  } else {
    console.warn("Botón .flecha.anterior no encontrado.");
  }

  // Miniaturas
  miniaturas.forEach((m, i) => {
    m.addEventListener("click", () => mostrarEscena(i));
  });

  // Mostrar primero
  mostrarEscena(0);
}
