// ================= Floating Hearts =================
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// ================= Love Slider =================
const slider = document.getElementById('loveSlider');
const loveValue = document.getElementById('loveValue');
const heartBar = document.getElementById('heartBar');

slider.addEventListener('input', () => {
  const value = slider.value;
  heartBar.style.width = value + '%';

  let message = '';
  if (value <= 40) message = 'A little low no? 😅';
  else if (value <= 50) message = 'You like me huh 💖';
  else if (value <= 70) message = 'Getting there... 🌸';
  else if (value <= 90) message = 'OOO now we are talking😏';
  else message = 'Time to marry you girl😚';

  loveValue.textContent = value + '% - ' + message;
});

// ================= Magic Compliment Generator =================
const complimentBtn = document.getElementById('complimentBtn');
const complimentText = document.getElementById('complimentText');

complimentBtn.addEventListener('click', () => {
  // Fixed single compliment
  complimentText.textContent = "You’re a good girl ;)";
});
