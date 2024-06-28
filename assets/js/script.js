// ===== Show Navbar =====

document.addEventListener("DOMContentLoaded", function () {
  const Navbar = document.getElementById("navbar-top");

  window.addEventListener("scroll", function () {
    window.scrollY > 300
      ? Navbar.classList.add("fixed-top", "shadow")
      : Navbar.classList.remove("fixed-top", "shadow");
  });
});

// ========= Preloader ========

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    // Once the preloader is fully faded out, remove it from the DOM
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  });
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true
});



sr.reveal(`.years__swiper, .experience__hero_img, .experience__number_container, .experience__card, .talk__environment_image, .lifestyle__image_wrapper, .upscaling__hero, .individual__hero_data, .individual__company_ranking`)
sr.reveal(`.number__card_small-wrapper, .history__hero_text, .monitoring__data, .lifestyle__header_text, .lifestyle__button_wrapper, .ranking__header_left, .clarity__item, .individual__impact_card`, { origin: "right" });
sr.reveal(`.header__data, .number__card_big-wrapper, .history__hero_heading, .experience__hero_title,.talk__hero_data, .talk__podcast_text,  .lifestyle__header_heading, .individual__impact_card-big `, { origin: "left" });
sr.reveal(`.partner__img_wrapper, .upscaling__project_card, .simple__impact_card`, { origin: "bottom" });
sr.reveal(`.partner__img_wrapper, .experience__gallery_image, .step__card, .upscaling__project_card, .ranking__advantage_card, .simple__impact_card`, { interval: 300, distance: "100px" });

sr.reveal(`.talk__environment_point, .upscaling__result_card`, { origin: "left", interval: 300, distance: "100px" });

sr.reveal(`.ranking__points_bar`, { origin: "left", interval: 200 });



  // Check the screen width and add animation on large screens only
  if (window.innerWidth >= 992) {

    sr.reveal(`.goal__card`);
    sr.reveal(`.card__wrapper`, { interval: 300, distance: "100px" });

}



// --------- Footer ---------

// sr.reveal(`.footer__upper, .footer__line, .footer__bottom`);