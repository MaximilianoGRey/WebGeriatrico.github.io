document.addEventListener("DOMContentLoaded", function () {
    const extensions = ['jpg', 'png', 'gif', 'jpeg'];
    const images = document.querySelectorAll('.dynamic-image');

    images.forEach(image => {
        const baseName = image.getAttribute('data-base-name');
        let imageLoaded = false;

        for (let ext of extensions) {
            let imgSrc = `${baseName}.${ext}`;
            let img = new Image();

            img.onload = function () {
                if (!imageLoaded) {
                    image.src = imgSrc;
                    imageLoaded = true;
                }
            };

            img.onerror = function () {
                console.log(`No se pudo cargar la imagen con extensión ${ext}`);
            };

            img.src = imgSrc;

            if (imageLoaded) break;
        }
    });
   

});


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
