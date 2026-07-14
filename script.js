// ==============================
// Birthday Website Script
// ==============================

const startBtn = document.getElementById("startJourney");
const landing = document.getElementById("landing");
const journey = document.getElementById("journey");
const timeline = document.getElementById("timeline");
const music = document.getElementById("bgMusic");
const gift = document.getElementById("giftBox");

// Hide timeline initially
journey.style.display = "none";

// ------------------------------
// Begin Journey
// ------------------------------

startBtn.addEventListener("click", () => {

    // Play music
    music.play().catch(() => {
        console.log("Music autoplay blocked until interaction.");
    });

    // Fade landing
    gsap.to(landing, {
        opacity: 0,
        duration: 1,
        onComplete: () => {

            landing.style.display = "none";

            journey.style.display = "block";

            gsap.from(".title", {
                y: -60,
                opacity: 0,
                duration: 1
            });

            window.scrollTo({
                top: journey.offsetTop,
                behavior: "smooth"
            });

        }
    });

});

// ------------------------------
// Reveal Cards on Scroll
// ------------------------------

const cards = document.querySelectorAll(".card");

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealCards);

revealCards();

// ------------------------------
// Floating Hearts
// ------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1200);

// ------------------------------
// Gift Surprise
// ------------------------------

gift.addEventListener("click", () => {

    // Fireworks
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

    // Animate Gift
    gsap.to(gift, {
        scale: 1.4,
        rotation: 20,
        duration: 0.5,
        yoyo: true,
        repeat: 1
    });

    // Final Message
    setTimeout(() => {

    document.querySelector(".final-section").scrollIntoView({
        behavior:"smooth"
    });

    typingText.innerHTML = "";

    i = 0;

    setTimeout(typeWriter,800);

},1500);

});

// ------------------------------
// Moon Animation
// ------------------------------

gsap.to(".moon", {

    y: 15,

    repeat: -1,

    yoyo: true,

    duration: 4,

    ease: "power1.inOut"

});

// ------------------------------
// Landing Animation
// ------------------------------

gsap.from(".landing-content h3", {

    y: -50,

    opacity: 0,

    duration: 1

});

gsap.from(".landing-content h1", {

    scale: .5,

    opacity: 0,

    delay: .3,

    duration: 1

});

gsap.from(".landing-content p", {

    opacity: 0,

    y: 30,

    delay: .8,

    duration: 1

});

gsap.from("#startJourney", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    clearProps: "all"
});

// ==============================
// Typewriter Message
// ==============================

const message = `Dear Cupcake,

Happy Birthday ❤️

Thank you for being such an amazing part of my life.

Every picture on this website reminds me that memories aren't measured by time—they're measured by the happiness they bring.

I hope this birthday gives you endless smiles, beautiful moments, success in everything you do, and the strength to chase every dream.

Please keep smiling, because your smile truly makes the world around you brighter.

Thank you for being you.

Happy Birthday once again.

With lots of love,

Faau ❤️`;

const typingText = document.getElementById("typingText");

let i = 0;

function typeWriter(){

    if(i < message.length){

        if(message.charAt(i) === "\n"){

            typingText.innerHTML += "<br>";

        }else{

            typingText.innerHTML += message.charAt(i);

        }

        i++;

        setTimeout(typeWriter,40);

    }

}