// script.js
const slider = document.querySelector('.slider');
let angle = 0;

// Rotate manually using left and right arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    angle -= 60; // Rotate clockwise
  } else if (e.key === 'ArrowLeft') {
    angle += 60; // Rotate counter-clockwise
  }
  slider.style.transform = `rotateY(${angle}deg)`;
});

// Play/Pause button functionality
document.getElementById('playButton').addEventListener('click', function() {
  var song = document.getElementById('song');
  if (song.paused) {
    song.play();
    this.textContent = 'Pause';
  } else {
    song.pause();
    this.textContent = 'Play';
  }
});
