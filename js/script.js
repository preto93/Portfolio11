/*  Scroll reveal */

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200

 });


 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, portfolio-box, contact form', { origin:'bottom'});
 ScrollReveal().reveal('.about-img, about-content h3', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, about', { origin: 'right' });
