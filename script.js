const bar = document.getElementById('mobile_menu');
const close = document.getElementById('close');
const nav = document.getElementById('nav');


// let button = document.getElementById('toCart');
// let quentity = document.getElementById('quentity');
// let price = document.getElementById('price');
// let namePro = document.getElementById('name-pro');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
};
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
};


// Details Of Product in Sproduct.html

let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('sm-img');

smallImg[0].onclick = () => {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    mainImg.src = smallImg[3].src;
}



