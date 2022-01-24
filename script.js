function menu() {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let menuIcon = document.querySelector('.menu-icon');
    let setaIcon = document.querySelector('.seta-icon');
    let search = document.querySelector('.search');

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        setaIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        search.style.display = 'none';        
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';        
    } 
    else {
        menu.style.display = 'none';
        body.style.overflow = 'auto';
        menuIcon.style.display = 'block';
        search.style.display = 'flex';
        setaIcon.style.display = 'none';
        body.style.position = 'relative'; 
    }
}