document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('button-menu');
    const navWrapper = document.getElementById('nav');
    const menuItems = document.querySelectorAll('.link-item');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('close');
        navWrapper.classList.toggle('show');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navWrapper.classList.remove('show');
            toggleButton.classList.remove('close');
        });
    });

    navWrapper.addEventListener('click', e => {
        if (e.target.id === 'nav') {
            navWrapper.classList.remove('show');
            toggleButton.classList.remove('close');
        }
    });

    const toggleArrows = document.querySelectorAll('.toggleArrow');
    const contents = document.querySelectorAll('.content');

    toggleArrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            contents[index].style.display = contents[index].style.display === 'none' || contents[index].style.display === '' ? 'block' : 'none';
            arrow.classList.toggle('rotate');
        });
    });
});