//Select elements
const slideCont = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll("img");
let imgIdx = 0;
let auto = true;
const timer = 5000;
let timerFunc;

const resetInterval = () => {
  if (timerFunc !== undefined) {
    clearInterval(timerFunc);
  }
  timerFunc = setInterval(() => {
    next();
  }, timer);
};
/**
 *@NOTE
 *since it moving towards the left side we have to use negative number
 *since we are translating our slide -100% each, then multiplying -100% to the current imgIdx should work
 */

const next = () => {
  resetInterval();
  imgIdx >= slides.length - 1 ? (imgIdx = 0) : (imgIdx += 1);
  slideCont.style.transform = `translateX(${-100 * imgIdx}%)`;
};

nextBtn.addEventListener("click", (e) => {
  next();
});

const prev = () => {
  resetInterval();
  imgIdx <= 0 ? (imgIdx = slides.length - 1) : (imgIdx -= 1);
  slideCont.style.transform = `translateX(${-100 * imgIdx}%)`;
};

prevBtn.addEventListener("click", (e) => {
  prev();
});

if (auto) {
  const timerFunc = setInterval(() => {
    next();
  }, timer);
}
