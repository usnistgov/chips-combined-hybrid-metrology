// Add event listener to the sections to toggle their visibility
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    const header = section.querySelector('h2');
    header.addEventListener('click', () => {
        section.classList.toggle('collapsed');
    });
});