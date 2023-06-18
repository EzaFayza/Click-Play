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


  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
}


showSlide(slideIndex);




const navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach(link => {

  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

window.addEventListener('popstate', function() {
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

