// === Funciones generales ===
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
  { selector: ".objeto.luchador2", mensaje: "¡El segundo luchador se prepara para luchar!" },
];

alertas.forEach(({ selector, mensaje }) => {
  const el = document.querySelector(selector);
  if (el) el.addEventListener("click", () => alert(mensaje));
});

/*flechaSiguiente.addEventListener('click', () => {
  escenarioActual = (escenarioActual - 1 + escenario.length) % escenarios.length;
  mostrarEscenario(escenarioActual);
});

flechaSiguiente.addEventListener('click', () => {
  escenarioActual = (escenarioActual + 1) % escenario.length;
  mostrarEscenario(escenarioActual);
});
*/

/* carrusel */

const escenas = document.querySelector(".escenas")
const anterior = document.querySelector(".anterior")
const siguiente = document.querySelector(".siguiente")
const miniaturas = document.querySelector(".miniaturas")
let indice = 0

console.log(escenas)
console.log(anterior)
console.log(siguiente)
console.log(miniaturas)

 //funciones

function mostrarEscena(i){
  for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("activa")
  }
  escenas[i].classList.add("activa")
}
indice = i

// para mostrar la pantalla 1 al inciar









