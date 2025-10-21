//1. cpatura de variables
const aumentos = document.querySelectorAll(".objeto")
const tablero = document.querySelector(".hud")
let counter = 0

aumentos.forEach(item => {

    item.addEventListener("click", () => {
        item.style.filter ="grayscale(1)"
        item.classList.add("saltar")
        counter++
        tablero.textContent = counter
    })
    

})

//funciones
   