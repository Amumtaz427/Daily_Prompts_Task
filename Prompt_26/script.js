
const eventDate = new Date("June 15, 2024 00:00:00").getTime();
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysElement.textContent = days < 10 ? `0${days}` : days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
  } else {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
  }
}

setInterval(updateCountdown, 1000);
gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.3 });
gsap.from(".details p", { duration: 1, x: -100, opacity: 0, stagger: 0.2 });
gsap.from(".countdown", { duration: 1.5, scale: 0.8, opacity: 0, ease: "elastic", delay: 0.5 });
gsap.from(".cta", { duration: 1, scale: 0, ease: "back.out(1.7)", delay: 1 });

