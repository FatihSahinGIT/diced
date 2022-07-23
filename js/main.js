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
  distance: "350px",
  duration: 1800,
  delay: 200,
  reset: true,
});

aboutConclusionText.reveal("#about-conclusion-text");


