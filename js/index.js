
// ================= TYPING EFFECT START =================
const texts = ["Web Developer", "Web Designer", "Software Engineer"];
let textIndex = 0;
let charIndex = 0;
const speed = 100;
const changingText = document.querySelector(".changing-text");

function typeEffect() {
  if(charIndex < texts[textIndex].length){
    changingText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if(charIndex > 0){
    changingText.textContent = texts[textIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(eraseEffect, speed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

// Start typing
typeEffect();
// ================= TYPING EFFECT END =================


// ================= DARK / LIGHT MODE JS START =================
const body = document.body;

// Default mode
body.classList.add('dark-mode');
// ================= DARK / LIGHT MODE JS END =================

// ================= SKILL SECTION JS START =================
window.addEventListener("load", () => {
    let bars = document.querySelectorAll(".fill");
    let percents = document.querySelectorAll(".percent");

    // Bar animation
    bars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        bar.style.width = width;
    });

    // Percentage animation
    percents.forEach(percent => {
        let target = percent.getAttribute("data-target");
        let count = 0;

        let interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
            } else {
                count++;
                percent.innerText = count + "%";
            }
        }, 20); // speed control
    });
});
// ================= SKILL SECTION JS END =================

// ================= CV MODAL JS START =================
function openCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('cvModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
// ================= CV MODAL JS END =================