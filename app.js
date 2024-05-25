const ratingCard = document.getElementById('ratingCard');
const thankYouCard = document.getElementById('thankYouCard');
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submitBtn');
const ratingValueSpan = document.getElementById('ratingValueSpan');

let selectedRating = 0;

ratingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    resetRatingButtons();
    btn.classList.add('selected');
    selectedRating = parseInt(btn.dataset.rating);
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedRating !== 0) {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
    ratingValueSpan.textContent = selectedRating;
  }
});

function resetRatingButtons() {
  ratingButtons.forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedRating = 0;
  submitBtn.disabled = true;
}