const cursor = new MouseFollower({
    iconSvgSrc: '/assets/img/sprites/svgsprites.svg',
    iconSvgClassName: 'my-spritesheet',
    iconSvgNamePrefix: '-',
});
const el = document.querySelector('.my-element');

el.addEventListener('mouseenter', () => {
    cursor.setIcon('arrow-left');
});

el.addEventListener('mouseleave', () => {
    cursor.removeIcon();
});