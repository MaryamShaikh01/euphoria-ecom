const buttons = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

buttons.forEach((btn) => {
  console.log(btn, "current btn");

  btn.addEventListener("click", (event) => {
    buttons.forEach((btn) => btn.classList.remove("btn-active"));
    btn.classList.add("btn-active");

    content.forEach((content) => content.classList.remove("content-active"));
    console.log(event.currentTarget, "current idk");

    const clickedBtn = event.currentTarget;
    clickedBtn.classList.add("btn-active");

    const btnId = clickedBtn.id;
    console.log(btnId, "id");
    const contentId = btnId.replace("btn-", "content-");

    console.log(contentId);

    const currentContent = document.getElementById(contentId);
    console.log(currentContent);
    currentContent.classList.add("content-active");
  });
});

// my order tab content btns

const ordeButtons = document.querySelectorAll(".tab-order-btn");
const orderContent = document.querySelectorAll(".content");

ordeButtons.forEach((btn) => {
  console.log(btn, "current btn");

  btn.addEventListener("click", (event) => {
    ordeButtons.forEach((btn) => btn.classList.remove("btn-active"));
    btn.classList.add("btn-active");

    orderContent.forEach((content) => content.classList.remove("content-active"));
    console.log(event.currentTarget, "current idk");

    const clickedBtn = event.currentTarget;
    clickedBtn.classList.add("btn-active");

    const btnId = clickedBtn.id;
    console.log(btnId, "id");
    const contentId = btnId.replace("btn-", "content-");
    
    console.log(contentId);

    const currentContent = document.getElementById(contentId);
    console.log(currentContent);
    currentContent.classList.add("content-active");
  });
});


// Header Product Search
const searchProduct = document.getElementById("search-cloth")

searchProduct.addEventListener("keydown", function (e) {
    console.log(e.target, "here");
    const inputValue = e.target.value;
    console.log(inputValue);
    if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = e.target.value;

      console.log(inputValue, "here");
      if (inputValue) {
        window.location.href = `products.html?search=${encodeURIComponent(
          inputValue
        )}`;
      }
    }
  });

// Close side nav

function sideNav() {
  const hamburger = document.getElementById("hamburger");
  const sideNav = document.getElementById("side-nav");
  const backdropNav = document.getElementById("backdrop");

  console.log(hamburger, "gfsdg  ");
  console.log(sideNav, "sideNav  ");
  sideNav.classList.add("show");
  backdropNav.classList.remove("hidden");
  console.log(backdropNav, "clicked");
}
const closeBtn = document.getElementById("close-nav");
const backdropNav = document.getElementById("backdrop");

function closeNav() {
  const backdropNav = document.getElementById("backdrop");

  const sideNav = document.getElementById("side-nav");
  sideNav.classList.remove("show");
  backdropNav.classList.add("hidden");
  console.log(backdropNav, "here clicked");
}
closeBtn.addEventListener("click", closeNav);
backdropNav.addEventListener("click", closeNav);


// User Side Nav 
const clickBtn = document.getElementById('userNavBtn')
const userNav = document.getElementById('userNav')
const closeUserBtn = document.getElementById('close-btn')
closeUserBtn.addEventListener('click' , closeUserNav)
clickBtn.addEventListener('click', openNav)

function openNav(){
  userNav.classList.toggle('user-nav')
}

function closeUserNav(){
  userNav.classList.remove('user-nav')
}




// Banner Swiper

var swiper1 = new Swiper(".bannerSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //         scrollbar: {
  //     el: ".swiper-scrollbar",
  //     hide: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Arrival Swiper

var swiper3 = new Swiper(".arrivalSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// FeedBack Swiper

var swiper2 = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  // loop:true,
  freeMode: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// For Swiper Single Product

var swiper9 = new Swiper(".thumbSwiper", {
  // spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper7 = new Swiper(".singleProductSwiper2", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper10: swiper9,
  },
});

// unhide password

function unHidePassword() {
  const unhide = document.getElementById("unhide");
  const password = document.getElementById("pass1")
  console.log(password , "pass1")
  console.log(unhide, "unhide");
  const img = unhide.querySelector("img");
  console.log(img, "img");
  if (img.src.includes('/img/hide.svg')) {
    console.log("hjg");
    img.src = "/img/search.svg";
    password.type = "text"
  }
  else{
    img.src = '/img/hide.svg'
    password.type = "password"

  }


}
