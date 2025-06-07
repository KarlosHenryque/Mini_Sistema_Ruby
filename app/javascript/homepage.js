document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel'),
        prevBtn = document.getElementById('prevBtn'),
        nextBtn = document.getElementById('nextBtn'),
        links = document.querySelectorAll('.nav-left a'),
        sections = document.querySelectorAll('section');
  let currentSlide = 0,
      totalSlides = 2;

  const update = () => {
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  };

  prevBtn.addEventListener('click', () => currentSlide > 0 && (currentSlide--, update()));
  nextBtn.addEventListener('click', () => currentSlide < totalSlides - 1 && (currentSlide++, update()));
  update();

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = document.getElementById(link.getAttribute('href').slice(1));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (links[0]) links[0].classList.add('active');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (pageYOffset >= s.offsetTop - 70) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });
});
