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


 let toggle = document.getElementById('toggle');
 let label_toggle = document.getElementById('label_toggle');
 
 toggle.addEventListener('change', (event) => {
     let checked = event.target.checked;
     document.body.classList.toggle('white');
 
     // Si el fondo es blanco, cambia el color del texto de label_toggle a negro
     if (checked) {
         label_toggle.style.color = 'black';
     } else {
         // Si el fondo no es blanco, devuelve el color del texto de label_toggle a su valor original
         // Puedes cambiar 'color-original' al color original que desees
         label_toggle.style.color = '#00FFCC';
     }
 });