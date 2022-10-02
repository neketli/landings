//nav bar

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  easing: "easeInOutQuad",
});

//about animate
(function () {
  var animItems = document.querySelectorAll("._anim");
  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      animItems[i].classList.remove("_active");
    }
  }

  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        typeof getCurrentAnimationPreference === "function" &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add("_active");
        return;
      }

      entry.target.classList.remove("_active");
    });
  });

  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      observer.observe(animItems[i]);
    }
  }
})();

// artists slider

const sliderItems = [...document.querySelectorAll(".artists__slide")];
const navItems = [...document.querySelectorAll(".artists__item")];
let activeSlide = 0;
let timer;

const makeTimer = (t) => {
  clearInterval(timer); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
  timer = setInterval(function () {
    toggleActivity(++activeSlide);
  }, t);
};

sliderItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add("artists__slide--active");
  }
});
navItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add("artists__item--active");
  }
});

const toggleActivity = (index) => {
  if (Number(index) >= sliderItems.length) {
    index = 0;
    activeSlide = 0;
  }

  for (let i = 0; i < sliderItems.length; i++) {
    if (i === Number(index)) {
      sliderItems[i].classList.add("artists__slide--active");
      navItems[i].classList.add("artists__item--active");
      activeSlide = i;
    } else {
      sliderItems[i].classList.remove("artists__slide--active");
      navItems[i].classList.remove("artists__item--active");
    }
    makeTimer(7000);
  }
};

makeTimer(7000);
document
  .querySelector(".artists__list")
  .addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("artists__item")) {
      toggleActivity(event.target.dataset.index);
    }
  });

// reviews

document.addEventListener("DOMContentLoaded", function () {
  let slider = new SimpleAdaptiveSlider(".reviews__slider", {
    autoplay: true,
    loop: true,
    swipe: true,
    interval: 10000,
  });
});
