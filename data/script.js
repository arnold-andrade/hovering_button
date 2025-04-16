const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.classList.add('hovered');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.classList.remove('hovered');
});
