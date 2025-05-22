//review input
const reviewInput = document.getElementById('reviewInput');
const charCount = document.getElementById('charCount');

reviewInput.addEventListener('input', () => {
  const remaining = 200 - reviewInput.value.length;
  charCount.textContent = `${remaining} characters left`;
});

 //like / dislike function
function likeReview(button) {
  const span = button.querySelector('span');
  span.textContent = parseInt(span.textContent) + 1;
}

function dislikeReview(button) {
  const span = button.querySelector('span');
  span.textContent = parseInt(span.textContent) + 1;
}

  //submit review
document.querySelector('.review-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const newReview = reviewInput.value.trim();
  if (newReview) {
    const reviewsContainer = document.querySelector('.reviews');
    const reviewBlock = document.createElement('div');
    reviewBlock.classList.add('review');
    reviewBlock.innerHTML = `<p>${newReview}</p><button onclick="likeReview(this)">👍 <span>0</span></button> <button onclick="dislikeReview(this)">👎 <span>0</span></button>`;
    reviewsContainer.appendChild(reviewBlock);
    reviewInput.value = '';
    charCount.textContent = '200 characters left';
  }
});
