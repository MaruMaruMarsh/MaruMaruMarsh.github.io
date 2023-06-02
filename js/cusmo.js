const cursor = new MouseFollower();
const el = document.querySelector('.maru');

el.addEventListener('mouseenter', () => {
    cursor.hide();
});

el.addEventListener('mouseleave', () => {
    cursor.show();
});