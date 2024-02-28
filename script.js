
let nclicks = 0;
const imagen = document.querySelector(".imagen");
const intruso = document.querySelector("#intruso");
const clicks = document.querySelector(".clicks");
const alerta = document.querySelector(".alerta")
const alertaMensaje = document.querySelector(".alerta-mensaje")

intruso.style.backgroundColor = "rgba(0,0,0,0)";

intruso.addEventListener("click", function() {
    imagen.style.border = "10px solid green";
    imagen.style.borderRadius = "5%";
    imagen.style.backgroundColor = "green";
    alerta.style.display = "flex";
    
    if (nclicks == 1) {
        alertaMensaje.textContent = "Eres un crack, encontraste al impostor a la primera";
    } else if (nclicks < 11) {
        alertaMensaje.textContent = `Buen trabajo, encontraste al impostor después de ${nclicks}`;
    } else {
        alertaMensaje.textContent = "Eres un ciego, pero igual lo lograste";
    }
})

imagen.addEventListener("click", function() {
    nclicks = nclicks + 1;
    if (nclicks == 1) {
        clicks.style.color = "green";
    } else if (nclicks < 11) {
        clicks.style.color = "yellow";
    } else {
        clicks.style.color = "red";
    }
    clicks.textContent = `Clicks: ${nclicks}`;
})

function recargar () {
    location.reload()
}