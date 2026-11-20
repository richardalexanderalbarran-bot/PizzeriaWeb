const carrito = [];

const titulo = document.querySelector("#carrito-titulo");
const lista = document.querySelector("#carrito-lista");
const total = document.querySelector("#carrito-total");
const contador = document.querySelector("#contador");

function dibujarCarrito() {
    titulo.textContent = "Mi carrito (" + carrito.length + ")";
    contador.textContent = carrito.length;
    lista.innerHTML = "";

    if (carrito.length === 0) {
        const vacio = document.createElement("li");
        vacio.className = "vacio";
        vacio.textContent = "Tu carrito está vacío. Agrega una pizza del menú.";
        lista.appendChild(vacio);
    }

    carrito.forEach((pizza, indice) => {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = pizza.nombre + " - $" + pizza.precio + " MXN";

        const quitar = document.createElement("button");
        quitar.type = "button";
        quitar.className = "quitar";
        quitar.textContent = "Quitar";
        quitar.addEventListener("click", () => {
            carrito.splice(indice, 1);
            dibujarCarrito();
        });

        item.append(texto, quitar);
        lista.appendChild(item);
    });

    const suma = carrito.reduce((acum, pizza) => acum + pizza.precio, 0);
    total.textContent = "Total: $" + suma + " MXN";
}

document.querySelectorAll(".pizza button").forEach((boton) => {
    boton.addEventListener("click", () => {
        carrito.push({
            nombre: boton.dataset.nombre,
            precio: Number(boton.dataset.precio)
        });
        dibujarCarrito();
    });
});

dibujarCarrito();