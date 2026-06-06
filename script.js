const maybeButton = document.querySelector("#maybeButton");
const tinyLine = document.querySelector("#tinyLine");
const cutePopup = document.querySelector("#cutePopup");
const popupLine = document.querySelector("#popupLine");
const popupClose = document.querySelector("#popupClose");
const popupMaybeButton = document.querySelector("#popupMaybeButton");
const countdownEl = document.querySelector("#firstMeetCountdown");

const replies = [
  "That is technically not a no. Hope is alive.",
  "One tiny selfie can settle this whole case beautifully.",
  "Fine, I accept this negotiation phase.",
  "No rush. The hope department remains open.",
  "I will wait. Dramatically, but respectfully.",
];

let replyIndex = 0;

function openPopup(message) {
  if (tinyLine) {
    tinyLine.textContent = message;
  }

  if (popupLine && cutePopup) {
    popupLine.textContent = message;
    cutePopup.hidden = false;
    cutePopup.setAttribute("aria-hidden", "false");
    document.body.classList.add("popup-open");
  }
}

function closePopup() {
  if (!cutePopup) {
    return;
  }

  cutePopup.hidden = true;
  cutePopup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("popup-open");
}

if (maybeButton) {
  maybeButton.addEventListener("click", () => {
    const message = replies[replyIndex];
    replyIndex = (replyIndex + 1) % replies.length;
    openPopup(message);
  });
}

if (popupMaybeButton) {
  popupMaybeButton.addEventListener("click", () => {
    const message = replies[replyIndex];
    replyIndex = (replyIndex + 1) % replies.length;
    openPopup(message);
  });
}

if (popupClose) {
  popupClose.addEventListener("click", closePopup);
}

if (cutePopup) {
  cutePopup.addEventListener("click", (event) => {
    if (event.target === cutePopup) {
      closePopup();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});

function updateFirstMeetCountdown() {
  if (!countdownEl) {
    return;
  }

  const firstMeetTime = new Date("2025-12-24T14:45:00+05:30").getTime();
  const elapsed = Math.max(0, Date.now() - firstMeetTime);
  const totalSeconds = Math.floor(elapsed / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.querySelector("#countDays").textContent = days;
  document.querySelector("#countHours").textContent = hours;
  document.querySelector("#countMinutes").textContent = minutes;
  document.querySelector("#countSeconds").textContent = seconds;
}

updateFirstMeetCountdown();
window.setInterval(updateFirstMeetCountdown, 1000);
