// ANA ELEMANLAR 
const main = document.querySelector('main');
const topBar = document.getElementById('top-bar');
const links = document.querySelectorAll('a[href]');

localStorage;


function pageChange(event) {
    event.preventDefault();
        
    let target = this.getAttribute('href'); 
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

    document.body.classList.add('fade');

    window.setTimeout(function() {
        window.location = path + target;
    }, 300);        
}


links.forEach(link => {
    link.addEventListener('click', pageChange);
});









