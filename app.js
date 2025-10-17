// Variables contadoras iniciales
let florCount = 0;
let hojasCount = 0;

// Referencias a los elementos del HUD
const florContador = document.getElementById('florCount');
const hojasContador = document.getElementById('hojasCount');

// Referencias a los objetos clickeables
const florObjeto = document.querySelector('.flor');
const hojaObjeto = document.querySelector('.hoja');

// Evento para la flor
florObjeto.addEventListener('click', () => {
  florCount++;
  florContador.textContent = florCount;

  // Pequeña animación visual
  florObjeto.style.transform = 'scale(1.3)';
  setTimeout(() => {
    florObjeto.style.transform = 'scale(1)';
  }, 200);
});

// Evento para las hojas
hojaObjeto.addEventListener('click', () => {
  hojasCount++;
  hojasContador.textContent = hojasCount;

  // Pequeña animación visual
  hojaObjeto.style.transform = 'scale(1.3)';
  setTimeout(() => {
    hojaObjeto.style.transform = 'scale(1)';
  }, 200);
});


