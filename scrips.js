

const main_img = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.thumbnail'); // Cambié 'thumbnail' a 'thumbnails' para mayor claridad

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
        const active = document.querySelector('.thumbnail.active'); // Asegúrate de seleccionar correctamente
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active');
        main_img.src = this.src; // Cambia la imagen principal
    });
});

const totalImages = document.querySelectorAll('.contenedor').length;
document.querySelector('.slider').style.width = `${totalImages * 100}vw`;

function activar() {
    const slider = document.querySelector('.slider');
    let index = 0;
    const totalImages = document.querySelectorAll('.contenedor').length;

    setInterval(() => {
        if (index < totalImages - 1) {
            index++;
        } else {
            index = 0;
        }
        slider.style.transform = `translateX(-${index * 100}vw)`; // Mueve las imágenes en el eje X
    }, 2000);
}

activar();
