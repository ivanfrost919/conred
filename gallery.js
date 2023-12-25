const carousel = document.getElementById('carousel');

for (let i = 1; i <= 39; i++) {
    let div = document.createElement('div');
    div.classList.add('carousel-item')
    if (i == 1) {
        div.classList.add('active');
    }
    let img = document.createElement('img');
    img.classList.add('d-block');
    img.classList.add('w-100');
    img.src = 'img/gallery/' + i + '.jpg';

    div.appendChild(img);
    carousel.appendChild(div);
}