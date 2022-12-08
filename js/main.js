// Initialize Swiper Slider
// Set Landing Page Slider
if (document.querySelector(".landing-swiper")) {
  const swiperElement = document.querySelector(".landing-swiper")
  const swiper = new Swiper(swiperElement, {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
// Set Main Slider
if (document.querySelector(".main-swiper")) {
  const swiperElement = document.querySelector(".main-swiper")
  const swiper = new Swiper(swiperElement, {
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

// btn-inp-check
if (document.querySelector(".btn-inp-check .inp")) {
  let inputsCheck = document.querySelectorAll(".btn-inp-check .inp");
  inputsCheck.forEach(inp=> {
    inp.addEventListener("input",()=> {
      if(inp.checked == true) {
        inp.closest(".btn-inp-check").classList.add("check");
      } else {
        inp.closest(".btn-inp-check").classList.remove("check");
      }
    })
  })
}