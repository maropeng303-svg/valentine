const noBtn = document.getElementById("no_button");
const yesBtn = document.getElementById("yes_button");
const container = document.querySelector(".container");

/* -------------------------
   NO BUTTON (YOUR DEFAULT — unchanged)
------------------------- */
noBtn.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 20;

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  const randomX = Math.random() * maxX + padding;
  const randomY = Math.random() * maxY + padding;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

/* -------------------------
   YES BUTTON (CONFETTI ONLY)
------------------------- */
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function popEffect() {
  const body = document.body;

  // 🌈 MASSIVE CONFETTI (no hearts)
  for (let i = 0; i < 600; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const colors = ["#EC5A7E", "#FFD700", "#9B5DE5", "#00F5D4", "#FF6B6B"];
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.setProperty("--x", `${randomRange(-900, 900)}px`);
    confetti.style.setProperty("--y", `${randomRange(-700, 700)}px`);

    body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
  }
}

yesBtn.addEventListener("click", () => {
  popEffect();

  // Show message after confetti finishes
  setTimeout(() => {
    document.getElementById("message").style.display = "flex";
  }, 1200);
});
