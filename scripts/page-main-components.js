// ANA ELEMANLAR 
const main = document.querySelector('main');
const topBar = document.getElementById('top-bar');
const links = document.querySelectorAll('a[href]');

localStorage;

links.forEach(link => { 
    link.addEventListener('click', event => {
        event.preventDefault();
        
        let target = link.getAttribute('href'); 
        let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

        document.body.classList.add('fade');

        window.setTimeout(function() {
            window.location = path + target;
        }, 300);        
    }); 
});









