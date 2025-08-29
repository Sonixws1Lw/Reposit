const messages = [
  "booting system... ✔",
  "loading feelings... ✔",
  "analyzing target... 🌸",
  "result: too amazing to ignore ✨",
  "compiling confession...",
  "output => \"ты такая гарячая сучка)💖\""
];

const messageBox = document.getElementById("message");
const cursor = document.querySelector(".cursor");
let i = 0;

function typeLine() {
  if (i < messages.length) {
    let text = messages[i];
    let j = 0;
    let line = "";

    let interval = setInterval(() => {
      line = text.substring(0, j);
      messageBox.textContent = line;
      j++;
      if (j > text.length) {
        clearInterval(interval);
        i++;
        if (i === messages.length) {
          setTimeout(startConfetti, 500);
        } else {
          setTimeout(typeLine, 800);
        }
      }
    }, 70);
  }
}

setTimeout(typeLine, 1000);

// 🎉 Конфетті
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function randomColor() {
  const colors = ["#ff4d88", "#ffcc00", "#00ccff", "#66ff66", "#ff6600"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createParticles() {
  for (let i = 0; i < 300; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8,
      h: 16,
      color: randomColor(),
      speed: Math.random() * 5 + 2,
      tilt: Math.random() * 10 - 5
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.w, p.h);
  });
}

function updateParticles() {
  particles.forEach(p => {
    p.y += p.speed;
    p.x += p.tilt * 0.1;
    if (p.y > canvas.height) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
  });
}

function loop() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(loop);
}

function startConfetti() {
  createParticles();
  loop();
}
