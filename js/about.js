// ================= DARK / LIGHT MODE JS START =================
const body = document.body;

// Default mode
body.classList.add('dark-mode');
// ================= DARK / LIGHT MODE JS END =================

// SKILL SECTION JS


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


