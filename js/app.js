const accordionTiles = document.querySelectorAll('.accordion-title');

accordionTiles.forEach((accordionTile) => {
    accordionTile.addEventListener('click', () => {
        const height = accordionTile.nextElementSibling.scrollHeight;

        accordionTile.classList.toggle('active-header');
        if (accordionTile.classList.contains('active-header')) {
            accordionTile.nextElementSibling.style.maxHeight = `${height}px`;
            accordionTile.nextElementSibling.style.paddingTop = '10px';
        }
        else {
            accordionTile.nextElementSibling.style.maxHeight = '0px';
            accordionTile.nextElementSibling.style.paddingTop = '0px';
        }
    });
});