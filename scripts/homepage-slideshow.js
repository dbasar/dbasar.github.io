// ANASAYFADA GEÇİŞ YAPAN RESİMLER İÇİN

// Asıl kutu content elemanı. Her bir resim, kutunun içinde absolute pozisyonunda yerleşik, yukarı kayan css animasyon hareketine sahip birer arkaplan resmine sahip küçük divler. Kayma işlemi için küçük div kutularının yüksekliği, content kutusundan biraz daha büyük. (Kutular orjinal pozisyonundayken kutuların tabanı content kutusunun tabanına değiyor, kayma sırasında yukarıda kalan ve görünmeyen kısım aşağıya iniyor.) Content kutusunda overflow: hidden; var. 
// Her bir yeni kutunun animasyonu 7 (artık 8) sn sürüyor. Sayfa yüklendikten sonra her 6 sn de bir, kutu kopyalanıyor, kopya kutuya yeni arka resim ekleniyor, eski kutunun önüne geçmemesi için onun gerisine yerleştiriliyor. Eski kutunun opacitysi de 1 sn süren bir transition ile (css te her bir kutunun opacity transitionu var) 0 hale getiriliyor. 1 sn nin sonunda eski kutu yok ediliyor. 

const slideImages = ['../images/background-image.jpeg',
                     '../images/furniture/furniture-11.jpeg',
                     '../images/furniture/furniture-7.jpeg',
                     '../images/industrial-design/design-2.jpeg'];
let slideImagesCount = 0;

function change() {

    if (slideImagesCount === 3) {
        slideImagesCount = 0;
    } else {
        slideImagesCount += 1;
    }
    const imgNode = document.querySelector('.image-div');
    const replacerImgNode = imgNode.cloneNode();

    replacerImgNode.style.backgroundImage = 'url(' + slideImages[slideImagesCount] + ')';
    main.insertBefore(replacerImgNode, main.children[1]);
    imgNode.style.opacity = "0";

    window.setTimeout(function () {
        imgNode.remove();
    }, 1000);
}

window.addEventListener('load', function() {
    this.document.querySelector('.image-div').style.opacity = '1';
});

window.setInterval(change, 6000);