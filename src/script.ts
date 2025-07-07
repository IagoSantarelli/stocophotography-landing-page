const message: string = 'Welcome to StocoPhotography!';

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('hero-heading');
  if (heading) {
    heading.textContent = message;
  }
});
