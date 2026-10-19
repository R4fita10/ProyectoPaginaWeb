const elementos = document.querySelectorAll(
    '.contenedor-de-texto, .tarjeta-problema, .tarjeta-personaje'
);

if ('IntersectionObserver' in window) {
    const observar = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementos.forEach(elemento => {
        elemento.classList.add('revelar-al-desplazarse');
        observar.observe(elemento);
    });
} else {
    elementos.forEach(elemento => elemento.classList.add('visible'));
}


/* Me dio flojera crear otro script y se que nose puede :v */

let musicaFondo = document.getElementById("musica-fondo");
let boton = document.getElementById("boton-musica");

musicaFondo.volume = 0.3;

boton.addEventListener("click", () => {
    if (musicaFondo.paused){
        musicaFondo.play();
        boton.textContent = "⏸ Música";
    } else {
        musicaFondo.pause();
        boton.textContent = "🎵 Música"
    }
})
