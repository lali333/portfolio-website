window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


window.addEventListener("scroll", () => {
  const title = document.querySelector(".concept-one h1");
  const scrollY = window.scrollY;
  const fadeEnd = 500; 
  const opacity = Math.max(1 - scrollY / fadeEnd, 0);
  const blur = Math.min(scrollY / 60, 10);

  title.style.opacity = opacity;
  title.style.filter = `blur(${blur}px)`;
});

const butterfly = document.getElementById("butterfly");

if (butterfly) {
  const home = { x: window.innerWidth / 2, y: window.innerHeight * 0.35 }; 
  const moveRange = 25; // 

  document.addEventListener("mousemove", (e) => {
    const dx = e.clientX - home.x;
    const dy = e.clientY - home.y;
    const moveX = Math.max(Math.min(dx / 30, moveRange), -moveRange);
    const moveY = Math.max(Math.min(dy / 30, moveRange), -moveRange);

    butterfly.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  });

  document.addEventListener("mouseleave", () => {
    butterfly.style.transform = "translate(-50%, -50%)";
  });
}



const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      document.body.style.transition = "background 1s ease";
      document.body.style.background = section.dataset.bg;
    }
  });
});



  const home = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const range = 100;

  document.addEventListener("mousemove", (e) => {
    const dx = e.clientX - home.x;
    const dy = e.clientY - home.y;
    const moveX = (dx / range) * 10;
    const moveY = (dy / range) * 10;
    butterfly.style.transform += ` translate(${moveX}px, ${moveY}px)`;
  });

  document.addEventListener("mouseleave", () => {
    butterfly.style.transform = "translate(-50%, -50%)";
  });

