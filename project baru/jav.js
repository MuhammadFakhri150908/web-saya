const navbar = document.querySelector

('.navbar');

document.querySelector('#menu-icon')
.onclik = () => {
    navbar.classList.toggle('active');
};

function clock() {
    let d = new Date();
  
    let year = d.getFullYear();
    let month = d.toLocaleString("en-US", {
      month: "long",
    });
    let date = ("0" + d.getDate()).slice(-2);
    let dayNum = d.getDay();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNum];
    let hr = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);
    let sec = ("0" + d.getSeconds()).slice(-2);
  
    document.querySelector(".clock-date").innerHTML = day + ", " + month + " " + date + ", " + year;
    document.querySelector(".clock-time").innerHTML = hr + ":" + min + ":" + sec;
  }
  
 setInterval(clock, 10000000)

let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });