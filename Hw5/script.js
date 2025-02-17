document.addEventListener('DOMContentLoaded', () => {
    const blankImage = 'images/blank.png'; // Path to blank image in the local image folder
    const images = [];

    // Load 12 unique images from the local image folder
    for (let i = 1; i <= 12; i++) {
        images.push(`images/img${i}.png`);
    }

    // Duplicate images to create pairs and shuffle them
    let actualImages = [...images, ...images].sort(() => Math.random() - 0.5);

    // Ensure both arrays are of size 12
    actualImages = actualImages.slice(0, 12);
    const blankImages = new Array(12).fill(blankImage);

    const gameGrid = document.getElementById('gameGrid');

    // Set grid layout for 4x3 display
    gameGrid.style.display = 'grid';
    gameGrid.style.gridTemplateColumns = 'repeat(4, 100px)';

    blankImages.forEach((_, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.style.backgroundImage = `url('${blankImage}')`;
        card.addEventListener('click', () => revealImage(card, index));
        gameGrid.appendChild(card);
    });

    function revealImage(card, index) {
        if (!card.classList.contains('revealed')) {
            card.classList.add('revealed');
            card.style.backgroundImage = `url('${actualImages[index]}')`;
        }
    }
});
