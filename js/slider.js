
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPosition = 0;
const slideWidth = document.querySelector('.slider_container').offsetWidth;
const totalWidth = Array.from(document.querySelectorAll('.slide')).reduce(function (acc, slide) {
  return acc + slide.offsetWidth;
}, 0);
const maxPosition = -(totalWidth - slideWidth);

function updateButtons() {
  prevBtn.disabled = currentPosition === 0;
  nextBtn.disabled = currentPosition <= maxPosition;
}

prevBtn.addEventListener('click', function () {
  currentPosition += slideWidth;
  if (currentPosition > 0) currentPosition = 0;
  slider.style.transform = 'translateX(' + currentPosition + 'px)';
  updateButtons();
});

nextBtn.addEventListener('click', function () {
  currentPosition -= slideWidth;
  if (currentPosition < maxPosition) currentPosition = maxPosition;
  slider.style.transform = 'translateX(' + currentPosition + 'px)';
  updateButtons();
});

updateButtons();
