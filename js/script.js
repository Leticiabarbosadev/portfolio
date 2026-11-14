
/* ========================================
   BRILHO COLORIDO QUE ACOMPANHA O MOUSE
======================================== */

const root = document.documentElement;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

let animationFrame = null;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    if (!animationFrame) {
        animationFrame = requestAnimationFrame(animateAurora);
    }

});

function animateAurora() {

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    root.style.setProperty("--mouse-x", `${currentX}px`);
    root.style.setProperty("--mouse-y", `${currentY}px`);

    const distance =
        Math.abs(mouseX - currentX) +
        Math.abs(mouseY - currentY);

    if (distance > 0.5) {

        animationFrame = requestAnimationFrame(animateAurora);

    } else {

        animationFrame = null;

    }

}

/* ========================================
   MENU COM ROLAGEM SUAVE
======================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
