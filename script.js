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




    document.addEventListener("DOMContentLoaded", function () {
        const correctPassword = "Fuckyou"; // 🔒 Apna password yahan set karo

        function askPassword() {
            let userPass = prompt("Sahi Password Daliye Please :");
            
            if (userPass === correctPassword) {  
                document.getElementById("content").style.display = "block"; // ✅ Website content show karo
                document.getElementById("overlay").style.display = "none"; // ❌ Black Screen Remove
            } else {
                alert("Galt Pass mt dalo nhi pta to try mt kro");
                askPassword(); // ❌ Dubara password maange
            }
        }

        askPassword(); // 🔓 Har refresh pe password maangega

        // ❌ Right Click Disable
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        // ❌ Inspect Element (F12, Ctrl+Shift+I, Ctrl+U) Disable
        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 123 || 
                (event.ctrlKey && event.shiftKey && event.keyCode === 73) || 
                (event.ctrlKey && event.keyCode === 85)) {
                event.preventDefault();
                closeWindow(); // 🔥 Direct Site Close
            }
        });

        // ❌ Console Open Detection (Agar console open kiya toh site band)
        setInterval(function() {
            if (window.outerWidth - window.innerWidth > 200 || 
                window.outerHeight - window.innerHeight > 200) {
                closeWindow(); // 🔥 Direct Site Close
            }
        }, 500);

        // 🔥 Site Band Karne ka function
        function closeWindow() {
            document.body.innerHTML = ""; // Pura page blank
            alert("Security Violation! Closing the site...");
            window.close(); // Browser tab close
            window.location.href = "about:blank"; // Black page redirect
        }
    });


