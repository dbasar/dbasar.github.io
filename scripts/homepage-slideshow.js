// ANASAYFADA GEÇİŞ YAPAN RESİMLER İÇİN

// Asıl kutu content elemanı. Her bir resim, kutunun içinde absolute pozisyonunda yerleşik, yukarı kayan css animasyon hareketine sahip birer arkaplan resmine sahip küçük divler. Kayma işlemi için küçük div kutularının yüksekliği, content kutusundan biraz daha büyük. (Kutular orjinal pozisyonundayken kutuların tabanı content kutusunun tabanına değiyor, kayma sırasında yukarıda kalan ve görünmeyen kısım aşağıya iniyor.) Content kutusunda overflow: hidden; var. 
// Her bir yeni kutunun animasyonu 7 (artık 10) sn sürüyor. Sayfa yüklendikten sonra her 8 sn de bir, kutu kopyalanıyor, kopya kutuya yeni arka resim ekleniyor, eski kutunun önüne geçmemesi için onun gerisine yerleştiriliyor. Eski kutunun opacitysi de 2 sn süren bir transition ile (css te her bir kutunun opacity transitionu var) 0 hale getiriliyor. 2 sn nin sonunda eski kutu yok ediliyor. (8 sn boyunca kayması ve 2 sn de yok olması ile eski kutunun 10 sn lik animasyonu bitmiş oluyor.)

const heroHeader = document.getElementById('hero-header');
const heroLink = document.getElementById('hero-link');
const slideImages = ['./images/background-image.jpeg',
                     './images/furniture/furniture-11.jpeg',
                     './images/industrial-design/design-2.jpeg',
                     './images/furniture/furniture-7.jpeg'];
let slideImageNum = 0;

function imageChange() {

    heroLink.classList.add('fade');

    if (slideImageNum === 3) {
        slideImageNum = 0;
    } else {
        slideImageNum += 1;
    }
    const imgNode = document.querySelector('.image-div');
    const replacerImgNode = imgNode.cloneNode();

    replacerImgNode.style.backgroundImage = 'url(' + slideImages[slideImageNum] + ')';
    // main.insertBefore(replacerImgNode, main.children[1]);
    heroHeader.insertBefore(replacerImgNode, heroHeader.firstElementChild);
    imgNode.style.opacity = "0";

    window.setTimeout(function () {
        imgNode.remove();
    }, 2000);

    assignLink(slideImageNum);
}

function assignLink(slideImageNum) {
    window.setTimeout(function() {
        heroLink.classList.remove('fade');
        if (slideImageNum === 0 || slideImageNum === 2) {
            heroLink.firstElementChild.setAttribute('href', '/industrial-design.html');
            heroLink.firstElementChild.firstElementChild.textContent = 'ÜRÜN';
        } else {
            heroLink.firstElementChild.setAttribute('href', '/furniture.html');
            heroLink.firstElementChild.firstElementChild.textContent = 'MOBİLYA';
        }    
    }, 1000)
}

window.addEventListener('load', function() {
    window.setInterval(imageChange, 8000);
    this.document.querySelector('.image-div').style.opacity = '1';
    assignLink(0);
});

