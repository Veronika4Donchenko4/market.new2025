const spans = document.querySelectorAll('.animated-text span');

function restartAnimation() {
  spans.forEach((span, index) => {
    span.style.animation = 'none';
    setTimeout(() => {
      span.style.animation = '';
    }, 50);
  });
}

setInterval(restartAnimation, 3000);
