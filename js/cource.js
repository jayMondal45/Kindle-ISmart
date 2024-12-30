const sliderWrapper = document.querySelector('.slider-wrapper');
const dotsContainer = document.querySelector('.dots');
const totalBoxes = document.querySelectorAll('.box').length;
const visibleBoxes = 2; // Number of boxes visible at a time
const totalDots = Math.ceil(totalBoxes / visibleBoxes);
let currentIndex = 0;

// Create dots
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.dataset.index = i; // Attach index to dot
  dotsContainer.appendChild(dot);
}

// Update active dot
function updateDots() {
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelector(`.dot[data-index="${currentIndex}"]`).classList.add('active');
}

// Attach click event to dots
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index, 10);
    currentIndex = index;
    const scrollAmount = index * sliderWrapper.clientWidth / totalDots;
    sliderWrapper.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    updateDots();
  });
});
