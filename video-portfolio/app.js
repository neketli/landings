//page-scroll
const pagePagination = document.querySelector(".page__pagination");

const pageSlider = new Swiper(".page", {
  // Переназначаю дефолт классы
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",

  direction: "vertical",
  slidesPerView: "auto",
  speed: 1000,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchOverflow: true,

  // управление
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  // навигация
  pagination: {
    el: ".page__pagination",
    type: "bullets",
    bulletClass: "page__bullet",
    bulletActiveClass: "page__bullet-active",
    clickable: true,
  },
  scrollbar: {
    el: ".page__scroll",
    dragClass: "page__drag-scroll",
    draggable: true,
  },

  init: false,

  on: {
    init: () => {
      pagePagination.classList.remove("page__pagination-load");
      document
        .querySelector(".page__wrapper")
        .classList.add("page__wrapper-loaded");
      toggleScrollType();
    },
    resize: () => {
      toggleScrollType();
    },
  },
});

function toggleScrollType() {
  if (pagePagination.classList.contains("page__pagination-load")) {
    pagePagination.classList.remove("page__pagination-load");
    pageSlider.params.freeMode = false;
  }

  for (let index = 0; index < pageSlider.slides.length; index++) {
    const page = pageSlider.slides[index];
    const pageContent = page.querySelector(".screen__content");
    if (pageContent) {
      if (pageContent.offsetHeight > window.innerHeight) {
        // pagePagination.classList.add("page__pagination-load");
        pageSlider.params.freeMode = {
          enabled: true,
        };
        break;
      }
    }
  }
}

pageSlider.init();

// video-slider
const setVideoUrl = (source) => {
  document.getElementById("video-slider").src = source;
};

// contacts-slider
const showSlides = (n) => {
  let slideItems = document.getElementsByClassName("slider__item");
  let navItems = document.getElementsByClassName("slider__nav-item");
  if (n === slideItems.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slideItems.length - 1;
  }
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].style.display = "none";
  }
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].className = navItems[i].className.replace(
      " slider__nav-item-active",
      ""
    );
  }
  slideItems[slideIndex].style.display = "flex";
  navItems[slideIndex].className += " slider__nav-item-active";
};

const nextSlide = () => {
  showSlides((slideIndex += 1));
};
const prevSlide = () => {
  showSlides((slideIndex -= 1));
};
const setSlide = (n) => {
  showSlides((slideIndex = n));
};

var slideIndex = 0;
showSlides(slideIndex);

// animations
(function () {
  var animItems = document.querySelectorAll("._anim");
  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      animItems[i].classList.remove("_anim-observed");
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
        entry.target.classList.add("_anim-observed");
        return;
      }

      entry.target.classList.remove("_anim-observed");
    });
  });
  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      observer.observe(animItems[i]);
    }
  }
})();

(function () {
  var animItems = document.querySelectorAll("._anim-text");
  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      animItems[i].classList.remove("_anim-observed");
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
        entry.target.classList.add("_anim-observed");
        return;
      }

      entry.target.classList.remove("_anim-observed");
    });
  });
  if (animItems.length > 0) {
    for (let i = 0; i < animItems.length; i++) {
      observer.observe(animItems[i]);
    }
  }
})();
