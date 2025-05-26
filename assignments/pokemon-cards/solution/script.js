let packElement = document.getElementById("pack");
let packContainer = document.querySelector(".pack-container");
let collectedGrid = document.getElementById("collectedGrid");

packElement.addEventListener("click", function() {
    packElement.classList.add("pack-opening");
    setTimeout(() => {
        packContainer.classList.add("behind");
    }, 2000); // Match animation duration
});

document.querySelectorAll('.card').forEach(card => {
    // Only flip if back is clicked
    card.querySelector('.card-back').addEventListener('click', function (e) {
        card.classList.add('flipped');
        e.stopPropagation();

        // After flip animation, fly away and add to grid
        setTimeout(() => {
            card.classList.add('fly-away');
            setTimeout(() => {
                // Add to grid as a small card (front image)
                let frontImg = card.querySelector('.card-front img').cloneNode();
                frontImg.className = '';
                let gridCard = document.createElement('div');
                gridCard.className = 'collected-card';
                gridCard.appendChild(frontImg);
                collectedGrid.appendChild(gridCard);

                // Remove the card from the main area
                card.remove();
            }, 800); // Match fly-away animation
        }, 600); // Wait for flip animation
    });
});