document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html')) {
        document.getElementById('startGame').addEventListener('click', () => {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const age = parseInt(document.getElementById('age').value.trim());

            if (!firstName || !lastName || isNaN(age) || age <= 0) {
                alert("Please fill out all fields correctly.");
                return;
            }

            const playerData = { firstName, lastName, age, attempts: 0 };
            localStorage.setItem('playerData', JSON.stringify(playerData));
            window.location.href = 'game.html';
        });
    }

    if (window.location.pathname.includes('game.html')) {
        let playerData = JSON.parse(localStorage.getItem('playerData')) || { attempts: 0 };
        let attempts = playerData.attempts;
        const blankImage = 'images/blank.png';
        const images = [];

        for (let i = 1; i <= 6; i++) {
            images.push(`images/img${i}.png`);
        }

        let actualImages = [...images, ...images];
        actualImages.sort(() => Math.random() - 0.5);
        const gameGrid = document.getElementById('gameGrid');

        let firstCard = null;
        let secondCard = null;
        let matchedPairs = 0;

        for (let index = 0; index < actualImages.length; index++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = index;
            card.style.backgroundImage = `url('${blankImage}')`;
            card.addEventListener('click', () => revealImage(card, index));
            gameGrid.appendChild(card);
        }

        function revealImage(card, index) {
            if (card.classList.contains('revealed') || secondCard) return;

            card.classList.add('revealed');
            card.style.backgroundImage = `url('${actualImages[index]}')`;

            if (!firstCard) {
                firstCard = { card, index };
            } else {
                secondCard = { card, index };
                attempts++;
                localStorage.setItem('playerData', JSON.stringify({ ...playerData, attempts }));

                setTimeout(checkMatch, 1000);
            }
        }

        function checkMatch() {
            if (actualImages[firstCard.index] !== actualImages[secondCard.index]) {
                firstCard.card.classList.remove('revealed');
                firstCard.card.style.backgroundImage = `url('${blankImage}')`;
                secondCard.card.classList.remove('revealed');
                secondCard.card.style.backgroundImage = `url('${blankImage}')`;
            } else {
                matchedPairs++;
            }

            firstCard = null;
            secondCard = null;

            if (matchedPairs === images.length) {
                localStorage.setItem('playerData', JSON.stringify({ ...playerData, attempts }));
                window.location.href = 'results.html';
            }
        }

        document.getElementById('resetGame').addEventListener('click', () => {
            localStorage.removeItem('playerData');
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname.includes('results.html')) {
        const playerData = JSON.parse(localStorage.getItem('playerData'));
        const playerInfo = document.getElementById('playerInfo');

        if (playerData && playerInfo) {
            playerInfo.innerHTML = `
                <p><strong>Name:</strong> ${playerData.firstName} ${playerData.lastName}</p>
                <p><strong>Age:</strong> ${playerData.age}</p>
                <p><strong>Attempts:</strong> ${playerData.attempts}</p>
            `;
        } else {
            playerInfo.innerHTML = "<p>Error: No player data found.</p>";
        }

        document.getElementById('playAgain').addEventListener('click', () => {
            localStorage.removeItem('playerData');
            window.location.href = 'index.html';
        });
    }
});
