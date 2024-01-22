const carousel = document.getElementById('carousel');

const PATH = "img/gallery/";

async function isValidImage(src) {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = src

        img.onload = (a) => {
            resolve(true)
        }
        img.onerror = (a) => {
            resolve(false)
        }
    })
};


(async () => {
    for (let i = 1; i <= 999; i++) {
        const src = PATH + i + ".jpg";

        const isValid = await isValidImage(src);
        if (!isValid) break;

        let div = document.createElement('div');
        div.classList.add('carousel-item')
        if (i == 1) {
            div.classList.add('active');
        }
        let img = document.createElement('img');
        img.classList.add('d-block');
        img.classList.add('w-100');
        img.src = src;

        div.appendChild(img);
        carousel.appendChild(div);
    }
})();