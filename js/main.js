/* === SCROLL ANIMATIONS === */
const mainHeader = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2100,
  delay: 200,
});

mainHeader.reveal("#main-header");

const mainSubtext = ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 1700,
  delay: 600,
});

mainSubtext.reveal("#main-subtext");

const mainText = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2100,
  delay: 600,
});

mainText.reveal(".main-text");

const philoText = ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 1900,
  delay: 500,
  reset: true,
});

philoText.reveal("#philo-header");

const aboutHeader = ScrollReveal({
  origin: "top",
  distance: "150px",
  duration: 1500,
  delay: 200,
  reset: false,
});

aboutHeader.reveal("#about-header");

const aboutConclusionText = ScrollReveal({
  origin: "bottom",
  distance: "290px",
  duration: 1800,
  delay: 200,
  reset: true,
});

aboutConclusionText.reveal("#about-conclusion-text");

const stepsHeader = ScrollReveal({
  origin: "left",
  distance: "200px",
  duration: 1500,
  delay: 400,
  reset: false,
});

stepsHeader.reveal("#steps-header");

const contactHeader = ScrollReveal({
  origin: "right",
  distance: "500px",
  duration: 2150,
  delay: 300,
  reset: false,
});

contactHeader.reveal(".contact-text");

const questionMark = ScrollReveal({
  origin: "right",
  distance: "200px",
  duration: 2150,
  delay: 900,
  reset: false,
});

questionMark.reveal("#strong");

const prevEvents = ScrollReveal({
  distance: "400px",
  duration: 1500,
  delay: 400,
  reset: true,
});

prevEvents.reveal("#prev-events-header");

// SLIDES
const slides = document.querySelectorAll(".slide");
const slideBtn = document.querySelectorAll(".btn");

let curSlide = 1;

const manualNav = (manual) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slideBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  slideBtn[manual].classList.add("active");
};

slideBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    curSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      slideBtn[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
