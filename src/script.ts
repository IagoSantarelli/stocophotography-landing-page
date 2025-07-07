const message: string = 'Bem-vindo à StocoPhotography!';

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('hero-heading');
  if (heading) {
    heading.textContent = message;
  }
});
