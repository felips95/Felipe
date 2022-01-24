function menu() {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let menuIcon = document.querySelector('.menu-icon');
    let setaIcon = document.querySelector('.seta-icon');

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menuIcon.style.display = 'none';
        setaIcon.style.display = 'block';
        body.style.overflow = 'hidden';        
    } 
    else {
        menu.style.display = 'none';
        body.style.overflow = 'auto';
        menuIcon.style.display = 'block';
        setaIcon.style.display = 'none';
    }
}