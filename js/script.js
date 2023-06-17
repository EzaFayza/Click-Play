let slideIndex = 1;
let intervalId;

showSlide(slideIndex);

function nextSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex += 1);
}

function prevSlide() {
  clearInterval(intervalId);
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const indicators = document.getElementsByClassName("indicator");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    indicators[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  indicators[slideIndex - 1].classList.add("active");

  // Set interval to automatically switch slides every 5 seconds
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Start the initial slideshow
showSlide(slideIndex);
