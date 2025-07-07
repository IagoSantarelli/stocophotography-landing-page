const message: string = 'Bem-vindo à StocoPhotography!';

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('hero-heading');
  if (heading) {
    heading.textContent = message;
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});
