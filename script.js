// script.js

// Function to handle search functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-bar');
    const searchValue = searchInput.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const gameTitle = card.querySelector('a').textContent.toLowerCase();
        if (gameTitle.includes(searchValue)) {
            card.style.display = 'block'; // Show matching game
        } else {
            card.style.display = 'none'; // Hide non-matching game
        }
    });
}

// Function to handle form submissions
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const gameTitle = form.querySelector('#game-title').value;
    const reviewerName = form.querySelector('#reviewer-name') ? form.querySelector('#reviewer-name').value : '';
    const reviewText = form.querySelector('#review-text').value;
    const rating = form.querySelector('#rating') ? form.querySelector('#rating').value : '';

    // Here you can handle the review submission logic, e.g., send to server or display on the page
    console.log(`Game Title: ${gameTitle}, Reviewer: ${reviewerName}, Review: ${reviewText}, Rating: ${rating}`);
    alert('Review submitted successfully!'); // Feedback to user
}

// Event listeners for search bar
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Event listeners for review forms
    const reviewForms = document.querySelectorAll('form');
    reviewForms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });
});