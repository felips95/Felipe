const icone = document.querySelector('.asdf');
icone.addEventListener('click', () => {
    icone.classList.toggle('change')
    menu()
});

function menu() {
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const top = document.querySelector('.top');

    if (menu.style.display === 'none') {

        menu.style.display = 'block';
        body.style.overflow = 'hidden';
        top.style.position = 'fixed';
    }
    else {
        menu.style.display = 'none';
        body.style.overflow = 'auto';
        top.style.position = 'relative';
    }
}


