const buttons = document.querySelectorAll('.tab-btn')
const content = document.querySelectorAll('.content')


buttons.forEach(btn => {
    console.log(btn, 'current btn')

    btn.addEventListener('click', (event) => {
        buttons.forEach(btn => btn.classList.remove('btn-active'));
                btn.classList.add('btn-active');

        content.forEach(content => content.classList.remove('content-active'));
        console.log(event.currentTarget, 'current idk')

        const clickedBtn = event.currentTarget
        clickedBtn.classList.add('btn-active')
        const btnId = clickedBtn.id
        console.log(btnId, 'id')
        const contentId = btnId.replace('btn-', 'content-')
        console.log(contentId)

        const currentContent = document.getElementById(contentId)
        console.log(currentContent)
        currentContent.classList.add('content-active')
    })
})


// For Swiper Single Product 

var productSwiper = new Swiper(".singleProductSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".singleProductSwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper2,
      },
    });