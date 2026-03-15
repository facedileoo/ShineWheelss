window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ============================
// SCROLL SUAVE EN EL MENU
// ============================
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    const seccion = document.querySelector(id);

    seccion.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ============================
// BOTONES PEDIR TURNO
// ============================
const botonesTurno = document.querySelectorAll(".plan button");

botonesTurno.forEach((boton) => {
  boton.addEventListener("click", () => {
    const plan = boton.parentElement.querySelector("h3").textContent;

    const numero = "542612728874";
    const mensaje = `Hola! Quiero pedir un turno para el ${plan}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});

// ============================
// BOTONES PEDIR PRODUCTO
// ============================
const botonesProducto = document.querySelectorAll(".producto button");

botonesProducto.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement.querySelector("h3").textContent;

    const numero = "542612728874";
    const mensaje = `Hola! Quiero comprar el producto: ${producto}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});

// ============================
// ANIMACION AL HACER SCROLL
// ============================
const secciones = document.querySelectorAll("section");

const mostrarSeccion = () => {
  const trigger = window.innerHeight * 0.85;

  secciones.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", mostrarSeccion);
mostrarSeccion();

// ============================
// HEADER CAMBIA AL SCROLLEAR
// ============================
const header = document.querySelector(".headerSection");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("headerScroll");
  } else {
    header.classList.remove("headerScroll");
  }
});
