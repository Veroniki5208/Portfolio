// Easter egg: the "Don't Press It" button on the home page hero.
// Ties back to the origin story on the About page — the site's one signature interaction.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('dont-press-it');
  if (btn) {
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
  }

  const originButton = document.getElementById('origin-press-button');
  if (!originButton) return;

  const message = document.querySelector('.origin-interaction__message');
  const log = document.querySelector('.origin-interaction__log');
  let originClicks = 0;

  originButton.addEventListener('mouseenter', () => {
    if (originClicks === 0) originButton.querySelector('span').textContent = 'Seriously.';
  });

  originButton.addEventListener('mouseleave', () => {
    if (originClicks === 0) originButton.querySelector('span').textContent = "DON'T PRESS";
  });

  originButton.addEventListener('click', () => {
    originClicks++;
    originButton.querySelector('span').textContent = 'I knew you would.';

    if (originClicks === 1) {
      message.textContent = 'Curiosity is usually worth following.';
    } else {
      log.textContent = 'Attempt 02: still curious.';
    }
  });
});
