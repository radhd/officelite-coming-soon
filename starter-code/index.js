// timedown cards
const coming = document.getElementById("coming");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Dynamically see date

const comingYear = coming.innerText;
const comingDate = new Date(comingYear);
const currentDate = Date.now();
const timeDifference = comingDate.getTime() - currentDate;

// convert milliseconds to days, hours, minutes and seconds

const millToDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const milltoHours = Math.floor(
  (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
);
const millToMinutes = Math.floor(
  ((timeDifference % (1000 * 60 * 60)) / 1000) * 60,
);
const millToSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
console.log(milltoHours);
console.log(millToDays);
console.log(millToMinutes);
console.log(millToSeconds);

console.log(`Remaining time until ${comingYear} : ${millToDays}`);



// Animations

let secValue = 60;
let minValue = 60;
let hourValue = 2;
let dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 60;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1
