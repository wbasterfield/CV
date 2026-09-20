
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('[data-search]');
  const cards = [...document.querySelectorAll('[data-card]')];
  if (!input || !cards.length) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      card.style.display = (!q || card.textContent.toLowerCase().includes(q)) ? '' : 'none';
    });
  });
});
