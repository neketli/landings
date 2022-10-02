$(function () {
  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    let delta = elementId == "#contacts" ? 0 : 50;

    $("html, body").animate(
      {
        scrollTop: elementOffset - delta,
      },
      700
    );
  });

  // Nav Toggle
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  // Buttons
  $(".main__btn").on("click", function (event) {
    event.preventDefault();

    let elementOffset = $("#menu").offset().top;
    $("html, body").animate(
      {
        scrollTop: elementOffset - 50,
      },
      700
    );
  });

  $("#callBtn-1").on("click", function (event) {
    event.preventDefault();

    let elementOffset = $("#contacts").offset().top;
    $("html, body").animate(
      {
        scrollTop: elementOffset - 50,
      },
      700
    );
  });

  // Map button
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [47.138336, 39.744469], // Батайск
      zoom: 12,
      controls: [],
    });

    var searchControl = new ymaps.control.SearchControl({
      options: {
        provider: "yandex#search",
      },
    });

    myMap.controls.add(searchControl);
    searchControl.search("Мясной гастроном");

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [47.137889, 39.754761],
        {
          balloonContent: "Мясной гастроном | ул. Торговое Кольцо, 23",
        },
        { preset: "islands#blueCircleDotIconWithCaption" }
      )
    );
    /*.add(new ymaps.Placemark([47.140706, 39.736132], {
            balloonContent: 'Мясной гастроном | ул. Луначарского, 110'
        }, {iconColor: '#d33e23'}
    ))
    .add(new ymaps.Placemark([47.133197, 39.766028], {
            balloonContent: 'Мясной гастроном | ул. Шмидта, 22'
        }, {iconColor: '#d33e23'}
    ))
    .add(new ymaps.Placemark([47.126382, 39.734479], {
            balloonContent: 'Мясной гастроном | ул. Октябрьская улица, 151/4'
        }, {iconColor: '#d33e23'}
    ))
    .add(new ymaps.Placemark([47.155880, 39.745511], {
            balloonContent: 'Мясной гастроном | ул. Северный Массив, 2/2'
        }, {iconColor: '#d33e23'}
    ))
    .add(new ymaps.Placemark([47.112736, 39.747999], {
            balloonContent: 'Мясной гастроном | ул.Ленина, 221'
        }, {iconColor: '#d33e23'}
    ))
    .add(new ymaps.Placemark([47.129817, 39.696189], {
            balloonContent: 'Мясной гастроном | ул. Максима Горького, 534/42'
        }, {iconColor: '#d33e23'}
    )) */
  }

  ymaps.ready(init);

  // Statistic counter

  let $element = $(".statistic");
  let check = 0;
  $(window).scroll(function () {
    let scroll = $(window).scrollTop() + $(window).height();
    let offset = $element.offset().top;

    if (scroll > offset && check == 0) {
      check = 1;
      $(".counter").each(function () {
        $(this)
          .prop("statistic__stat", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }
  });

  // Menu cards flipping
  $(".menu__card").flip({
    axis: "y",
    trigger: "click",
  });

  // Gallery

  $(".next").on("click", function (event) {
    let currImg = $(".gallery__item.current");
    let currImgIndex = currImg.index();
    let nextImgIndex = currImgIndex + 1;
    nextImgIndex =
      nextImgIndex == $(".gallery__item:last").index() + 1 ? 0 : nextImgIndex;
    let nextImg = $(".gallery__item").eq(nextImgIndex);
    $("#gallerySlide").html(`${nextImgIndex + 1}/8`);
    currImg.fadeOut(1000);
    currImg.removeClass("current");
    nextImg.fadeIn(1000);
    nextImg.addClass("current");
  });

  $(".prev").on("click", function (event) {
    let currImg = $(".gallery__item.current");
    let currImgIndex = currImg.index();
    let prevImgIndex = currImgIndex - 1;
    let prevImg = $(".gallery__item").eq(prevImgIndex);
    $("#gallerySlide").html(`${prevImgIndex == -1 ? 8 : prevImgIndex + 1}/8`);
    currImg.fadeOut(1000);
    currImg.removeClass("current");
    prevImg.fadeIn(1000);
    prevImg.addClass("current");
  });
});
