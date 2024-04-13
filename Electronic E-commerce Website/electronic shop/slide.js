let slideIndex = 0;
slideshow();

function slideshow() {
  let slides = document.querySelectorAll('.slides img'); // Select all images within the container with class "slides"
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideshow, 2000); // Change image every 2 seconds
}
document.querySelector('.heart').addEventListener('click', function() {
  this.querySelector('.fa-heart').classList.toggle('fas');
});
