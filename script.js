function menu() {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let html = document.querySelector('html');
    let menuIcon = document.querySelector('.menu-icon');
    let setaIcon = document.querySelector('.seta-icon');
    let search = document.querySelector('.search');

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        setaIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        search.style.display = 'none';        
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';       
    } 
    else {
        menu.style.display = 'none';
        body.style.overflow = 'auto';
        html.style.overflow = 'auto';
        menuIcon.style.display = 'block';
        search.style.display = 'flex';
        setaIcon.style.display = 'none'; 
    }
}