document.querySelectorAll('.button-1').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));

document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/hamburger-animation.json'
});

var atStart = true;

document.getElementById('lottie-animation').addEventListener('click', function() {
  if (atStart) {
    // Reproduce el segmento de la animación desde el frame actual hasta el frame 40
    animation.playSegments([animation.currentFrame, 30], true);
    atStart = false;
  } else {
    // Reproduce el segmento de la animación desde el frame 40 de regreso al frame 0
    animation.playSegments([30, 0], true);
    atStart = true;
  }
});

// Referencia a la animación Lottie
LottieInteractivity.create({
    player: '#dark-mode-animation',
    mode: 'cursor',
    actions: [
      {
        type: "toggle",
        frames: [40, 80]
      }
    ]
});
LottieInteractivity.create({
    player: '#scroll-animation',
    mode: 'scroll',
    actions: [
      {
        visibility: [0,1],
        visibility: [0.50, 1.0],
        type: 'seek',
        container: 'scroll',
        frames: [0, 40],
      }
    ]
});

  
  

