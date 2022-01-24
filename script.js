function menu() {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let menuIcon = document.querySelector('.menu-icon');
    let setaIcon = document.querySelector('.seta-icon');
    let search = document.querySelector('.search');

    if (menu.style.display === 'none') {

        menu.style.display = 'block';
        search.style.display = 'none';        
        body.style.overflow = 'hidden';
        header.style.position = 'fixed'; 

        setaIcon.style.display = 'block';
        menuIcon.style.display = 'none';
     
    } 
    else {
        menu.style.display = 'none';
        body.style.overflow = 'auto';        
        search.style.display = 'flex';
        header.style.position = 'relative';

        menuIcon.style.display = 'block';
        setaIcon.style.display = 'none'; 
    }
}