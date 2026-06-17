document
.getElementById("openBtn")
.addEventListener("click",()=>{
const music = document.getElementById("bgMusic");
    music.currentTime = 0;

music.play()
.then(() => {
    console.log("Music started");
})
.catch(err => {
    console.log(err);
});
    confetti({
        particleCount:300,
        spread:180,
        origin:{y:0.6}
    });

    document
    .getElementById("curtain-screen")
    .classList
    .add("open");

    setTimeout(()=>{

        document
        .getElementById("curtain-screen")
        .style.display = "none";

    },3000);

});

const weddingDate = new Date("July 2, 2026 10:30:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML = `
        <div class="time-box">
            <h2>${days}</h2>
            <p>Days</p>
        </div>

        <div class="time-box">
            <h2>${hours}</h2>
            <p>Hours</p>
        </div>

        <div class="time-box">
            <h2>${minutes}</h2>
            <p>Minutes</p>
        </div>

        <div class="time-box">
            <h2>${seconds}</h2>
            <p>Seconds</p>
        </div>
    `;

}, 1000);

const icons = ["🌸","💖","💕","💗","❤️","💞"];

function createParticle(){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.innerHTML =
    icons[Math.floor(Math.random()*icons.length)];

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.fontSize =
    (20 + Math.random()*20) + "px";

    particle.style.animationDuration =
    (6 + Math.random()*6) + "s";

    document
    .getElementById("particles")
    .appendChild(particle);

    setTimeout(()=>{
        particle.remove();
    },12000);
}

setInterval(createParticle,500);
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

});
const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        bgMusic.play();
        musicBtn.style.display = "none";

        musicBtn.innerHTML =
        "🔇 Stop Music";

        playing = true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML =
        "🎵 Play Wedding Vibes";

        playing = false;

    }

});
for(let i=0;i<40;i++){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";

    s.style.animationDelay=
    Math.random()*5+"s";

    document.body.appendChild(s);

}
const slides =
document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current]
.classList.remove("active");

current=
(current+1)%slides.length;

slides[current]
.classList.add("active");

},4000);
const quotes = [
"Made for this moment ❤️",
"Two hearts, one journey ✨",
"Love begins here 💍",
"Forever starts today 🌹",
"Together is beautiful 💖",
"Blessed beyond measure ✨"
];

function createQuote(){

const q=document.createElement("div");

q.className="floatingQuote";

q.innerText=
quotes[Math.floor(Math.random()*quotes.length)];

q.style.left=Math.random()*80+"%";

document.body.appendChild(q);

setTimeout(()=>{
q.remove();
},12000);
}

setInterval(createQuote,2500); 
let index = 0;
const slide = document.querySelectorAll(".slide");

setInterval(() => {
    slide[index].classList.remove("active");
    index = (index + 1) % slide.length;
    slide[index].classList.add("active");
}, 3000);

const quote = [

"Where there is love there is life",

"Together is a beautiful place to be",

"Love grows stronger every day",

"Forever starts with friendship"

];
const quoteBoxes =
document.querySelectorAll(".card-quote");
quoteBoxes.forEach((box,index)=>{

    const quote =
    quotes[index];

    const words =
    quote.split(" ");

    let i = 0;

    function animateQuote(){

        box.innerHTML = "";

        i = 0;

        const typing =
        setInterval(()=>{

            if(i < words.length){

                box.innerHTML +=
                words[i] + " ";

                i++;

            }else{

                clearInterval(typing);

                setTimeout(
                    animateQuote,
                    3000
                );

            }

        },300);

    }

    animateQuote();

});
const form = document.getElementById("wishForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("guestName").value;

    const wish =
    document.getElementById("guestWish").value;

    const card =
    document.createElement("div");

    card.classList.add("wish-card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${wish}</p>
    `;

    document
    .getElementById("wishWall")
    .prepend(card);

    form.reset();
});
const openBtn = document.querySelector(".open-btn");
const modal = document.getElementById("invitationModal");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".fade-img");

  images.forEach((img, index) => {

    setTimeout(() => {

      img.classList.add("show");

    }, index * 2500);

  });

});
