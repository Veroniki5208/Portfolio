// Easter egg: the "Don't Press It" button on the home page hero.
// Ties back to the origin story on the About page — the site's one signature interaction.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('dont-press-it');
  if (!btn) return;

  const messages = [
    "I told you not to.",
    "Still pressing?",
    "That's kind of the whole point.",
    "Okay, you get it now.",
    "This is basically my personality."
  ];
  let count = 0;

  btn.addEventListener('click', () => {
    btn.textContent = messages[Math.min(count, messages.length - 1)];
    count++;
  });
});
