const photoResize = document.querySelector('.profile_photo');
photoResize.addEventListener('click', () => {
    photoResize.classList.toggle('photo-resize');

});


const elements = [
    { key: 'a', element: document.getElementById('a') },
    { key: 'b', element: document.getElementById('b') },
    { key: 'c', element: document.getElementById('c') },
    { key: 'd', element: document.getElementById('d') },
];

elements.forEach(({ key, element }) => {
    window.addEventListener('keydown', (e) => {
        if (e.key === key) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});