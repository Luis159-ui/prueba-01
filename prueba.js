document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("miBoton");
    const titulo = document.getElementById("titulo");

    boton.addEventListener("click", () => {
        // Cambiamos el texto y el color del título al hacer clic
        if (titulo.textContent === "¡Hola Mundo!") {
            titulo.textContent = "¡Has hecho clic!";
            titulo.style.color = "#28a745"; // Verde
            boton.textContent = "Volver al original";
        } else {
            titulo.textContent = "¡Hola Mundo!";
            titulo.style.color = "#0056b3"; // Azul original
            boton.textContent = "Haz clic aquí";
        }
    });
});