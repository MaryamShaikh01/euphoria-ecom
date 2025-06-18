// to add item to wishlist 

  let wishList = []
        // console.log(wishList , "wishList")
        const wishListBtn = document.querySelectorAll('.addToWishlist');
        wishListBtn.forEach((heartBtn) => {

            heartBtn.addEventListener('click', function (event) {
                console.log(event, "event.currentTarget")
                // wishListBtn.forEach((btn)=>{
                console.log(heartBtn, "wishListBtn")
                //     // btn.classList.remove('selected-heart-btn');

                // })
                heartBtn.classList.toggle('selected-heart-btn');
                closestDiv = heartBtn.closest('div')
                id = closestDiv.id
                console.log(id, "id")
                const wish = JSON.parse(localStorage.getItem('wish')) || [];



                wishList.push(id)
                updateWishList(heartBtn);

            })


            function updateWishList(heartBtn) {
                if (wishList) {
                    closestDiv = heartBtn.closest('div')
                    console.log(closestDiv, "closestDiv")

                    // const productName = closestDiv.querySelector('.limelight-product-name')
                    const productName = closestDiv.querySelector('.limelight-product-name').textContent.trim()
                    console.log(productName, "productName")
                    const productImage = closestDiv.querySelector('div>img').src
                    console.log(productImage, "productImage")
                    // console.log(image)
                    const productBrand = closestDiv.querySelector('.brand').textContent.trim();

                    console.log(productBrand, "productBrand")

                    const productPrice = closestDiv.querySelector('.price').textContent.trim();

                    console.log(productPrice, "productPrice")

                    // const productId = document.query
                    const wishList = {
                        liked: id,
                        name: productName,
                        image: productImage,
                        brand: productBrand,
                        price: productPrice,
                        quantity: 1

                    };


                    // const wish = localStorage.setItem('wishList', JSON.stringify(wishList));
                    // wish.push(wishList)

                    // console.log("liked:", wishList);


                    const wish = JSON.parse(localStorage.getItem('wish')) || [];

                    // //   const existingIndex = cart.findIndex(item =>
                    // //     item.size === cartItem.size &&
                    // //     item.color === cartItem.color
                    // //   );

                    // //   if (existingIndex !== -1) {
                    // //     cart[existingIndex].quantity += 1;
                    // //   } else {
                    // wish.push(wishList);
                    // //   }


                    const existingIndex = wish.findIndex(item =>

                        item.liked === wishList.liked
                    );
                    console.log(existingIndex, "existingIndex")
                    if (existingIndex !== -1) {
                        wish[existingIndex].quantity += 1;
                    } else {
                        // cart.push(wishList);
                        wish.push(wishList);
                    }


                    localStorage.setItem('wish', JSON.stringify(wish));
                }
            }

        })


                    const wishListItem = JSON.parse(localStorage.getItem('wish')) || [];
                    console.log(wishListItem.length , "wishListItem")

                    const wishListItems = document.querySelector('.wishListItems')
                    wishListItems.textContent = wishListItem.length
                    console.log(wishListItems , "wishListItems")


             const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                    console.log(cartItems.length , "cartItems")

                    const cartTotalItems = document.querySelector('.cartTotalItems')
                    cartTotalItems.textContent = cartItems.length
                    console.log(cartTotalItems , "cartTotalItems")



// import axios from "axios";

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

    orderContent.forEach((content) =>
      content.classList.remove("content-active")
    );
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

// async function axiosFunct() {
//   let data = await axios("./list.json");
//   console.log(data.data.products);
//   // let random = Math.floor(Math.random() * 30);
//   // console.log(random)

//   let space = " ";
//   data.data.products.forEach((i) => {
//     space += `

//   <div class="relative w-full flex flex-col gap-y-2.5 md:gap-y-6">

//                 <img src="${i.img}" alt="" width="200" height="200"
//                 class="w-[282px] min-w-[100%] object-cover object-top  h-[170px] md:h-[370px] rounded-[12px]">
//                 <a href="single-product.html">
//                     <div class=" md:grid md:grid-cols-[1fr_auto] gap-x-5">

//                         <p class="text-[#3C4242] font-semibold line-clamp-1">${i.description}</p>
//                         <p class="text-[#807D7E] text-[14px] font-medium">${i.brand}</p>

//                         <button type="button"
//                             class="bg-[#F6F6F6] rounded-[8px] py-[10px] px-[20px] col-start-2 row-start-1 row-span-2 justify-self-end self-center"><span
//                                 class="text-[#3C4242] font-bold">$123.00</span></button>
//                     </div>

//                 </a>

//                     <svg class="absolute top-[20px] right-[20px] cursor-pointer group" xmlns="http://www.w3.org/2000/svg" width="34"
//                         height="34" viewBox="0 0 34 34" fill="none">
//                         <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" class="group-hover:fill-red-600"/>
//                         <path class="group-hover:stroke-red-600 group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd"
//                             d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
//                             stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </div>

//                  `;

//     // console.log(space)
//     document.getElementById("text").innerHTML = space;
//   });
// }

// axiosFunct();

// const searchProduct = document.querySelectorAll(".search-cloth");

// searchProduct.forEach((input) => {
//   input.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       const inputValue = e.target.value.trim();
//       if (inputValue) {
//         window.location.href = `searched-product-page.html?search=${inputValue}`;
//       }
//     }
//   });
// });

// function searchInput(){

const search = document.querySelectorAll('.search-cloth')

search.forEach((btn)=>{

btn.addEventListener("keydown", function (e) {
          console.log(e.target, "here");
          const inputValue = e.target.value;
          console.log(inputValue);
          if (e.key === "Enter") {
            e.preventDefault();
            const inputValue = e.target.value;
  
            console.log(inputValue, "here");
            if (inputValue) {
              window.location.href = `searched-product-page.html?search=${inputValue}`;
            }
          }
        });


})

  // document.getElementById("search-cloth").addEventListener("keydown", function (e) {
  //         console.log(e.target, "here");
  //         const inputValue = e.target.value;
  //         console.log(inputValue);
  //         if (e.key === "Enter") {
  //           e.preventDefault();
  //           const inputValue = e.target.value;
  
  //           console.log(inputValue, "here");
  //           if (inputValue) {
  //             window.location.href = `searched-product-page.html?search=${inputValue}`;
  //           }
  //         }
  //       });
// }




    // document.getElementById("search-cloth").addEventListener("keydown", function (e) {
    //         console.log(e.target, "here");
    //         const inputValue = e.target.value;
    //         console.log(inputValue);
    //         if (e.key === "Enter") {
    //           e.preventDefault();
    //           const inputValue = e.target.value;

    //           console.log(inputValue, "here");
    //           if (inputValue) {
    //             window.location.href = `searched-product-page.html?search=${inputValue}`;
    //           }
    //         }
    //       });

const saveAddressCheckout = document.getElementById("saveAddressCheckout");
saveAddressCheckout.addEventListener("click", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    window.location.href = `empty-cart.html`;

    alert("Your Cart is Empty!");
    return;
  }

  window.location.href = `order-confirmed.html`;
});

// working below

// document.addEventListener("DOMContentLoaded", async function(){

// async function inputVal() {
//   let data = await axios("./list.json");
//   // console.log(data.data.products, "data consoled");
//   let allProducts = data.data.products;

//   // const descriptions = allProducts.map((item) => item.description);
//   return allProducts;
// }

// const searchProduct = document.querySelectorAll(".search-cloth");

// searchProduct.forEach((input) => {
//   input.addEventListener("keydown", async function (e) {
//     // console.log(e.target, "here");

//     const allProducts = await inputVal();
//     // console.log(allProducts, "all products");

//     const inputValue = e.target.value.trim();
//     // console.log(inputValue);

//     const filtered = allProducts.filter((items) => {
//       console.log(items);
//       const onlyDescription = items.description;

//       // console.log(onlyDescription, "onlydesc");
//       const lower = onlyDescription.toLowerCase();
//       console.log(lower, "lowercased");
//       const itemHere = lower.includes(inputValue);
//       console.log(itemHere, "item here");

//       if (lower.includes(inputValue.toLowerCase())) {
//         // console.log("got ");
//         return items;
//       }
//     });

//     console.log(filtered, "filtered");

//     // console.log(items);
//   //   let space = " ";
//   //   filtered.forEach((i) => {
//   //     console.log(i);
//   //     space += `

//   // <div class="relative w-full flex flex-col gap-y-2.5 md:gap-y-6">

//   //               <img src="${i.img}" alt="" width="200" height="200"
//   //               class="w-[282px] min-w-[100%] object-cover object-top  h-[170px] md:h-[370px] rounded-[12px]">
//   //               <a href="single-product.html">
//   //                   <div class=" md:grid md:grid-cols-[1fr_auto] gap-x-5">

//   //                       <p class="text-[#3C4242] font-semibold line-clamp-1">${i.description}</p>
//   //                       <p class="text-[#807D7E] text-[14px] font-medium">${i.brand}</p>

//   //                       <button type="button"
//   //                           class="bg-[#F6F6F6] rounded-[8px] py-[10px] px-[20px] col-start-2 row-start-1 row-span-2 justify-self-end self-center"><span
//   //                               class="text-[#3C4242] font-bold">$123.00</span></button>
//   //                   </div>

//   //               </a>

//   //                   <svg class="absolute top-[20px] right-[20px] cursor-pointer group" xmlns="http://www.w3.org/2000/svg" width="34"
//   //                       height="34" viewBox="0 0 34 34" fill="none">
//   //                       <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" class="group-hover:fill-red-600"/>
//   //                       <path class="group-hover:stroke-red-600 group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd"
//   //                           d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
//   //                           stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round" />
//   //                   </svg>
//   //               </div>

//   //                `;

//   //     // console.log(space)
//   //     document.getElementById("text").innerHTML = space;

//   //     const element = document.getElementById('text')
//   //     console.log(element)
//   //   });

//     if (e.key === "Enter") {
//       e.preventDefault();
//       const inputValue = e.target.value.trim();
//       console.log(inputValue, "here");
//       if (inputValue) {
//         console.log('new page')
//         window.location.href = `new.html?search=${inputValue}`;
//             const element = document.getElementById('text')
//       console.log(element)
//     let space = " ";

//     filtered.forEach((i) => {
//       console.log(i);
//       space += `

//   <div class="relative w-full flex flex-col gap-y-2.5 md:gap-y-6">

//                 <img src="${i.img}" alt="" width="200" height="200"
//                 class="w-[282px] min-w-[100%] object-cover object-top  h-[170px] md:h-[370px] rounded-[12px]">
//                 <a href="single-product.html">
//                     <div class=" md:grid md:grid-cols-[1fr_auto] gap-x-5">

//                         <p class="text-[#3C4242] font-semibold line-clamp-1">${i.description}</p>
//                         <p class="text-[#807D7E] text-[14px] font-medium">${i.brand}</p>

//                         <button type="button"
//                             class="bg-[#F6F6F6] rounded-[8px] py-[10px] px-[20px] col-start-2 row-start-1 row-span-2 justify-self-end self-center"><span
//                                 class="text-[#3C4242] font-bold">$123.00</span></button>
//                     </div>

//                 </a>

//                     <svg class="absolute top-[20px] right-[20px] cursor-pointer group" xmlns="http://www.w3.org/2000/svg" width="34"
//                         height="34" viewBox="0 0 34 34" fill="none">
//                         <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" class="group-hover:fill-red-600"/>
//                         <path class="group-hover:stroke-red-600 group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd"
//                             d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
//                             stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </div>

//                  `;

//       // console.log(space)

//       // const element = document.getElementById('text')
//       // console.log(element)
//     });
//     document.getElementById("text").innerHTML = space;

//       }
//     }
//   });

// }
// )
// ;
// })

// working above

// async function inputVal() {
//   try {
//     let data = await axios.get("./list.json");
//     let allproducts = data.data.products;

//     // Return the first description (or modify as needed)
//     if (allproducts.length > 0) {
//       allproducts.forEach((item)=>{
//         return item
//       })
//       // return allproducts.description;
//     }
//     return null;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// const searchProduct = document.querySelectorAll(".search-cloth");

// searchProduct.forEach((input) => {
//   input.addEventListener("keydown", async function (e) {
//     console.log(e.target, "here");

// const description = await inputVal();
//       console.log(description, "Description from inputVal");

//     if (e.key === "Enter") {
//       e.preventDefault();
//       const inputValue = e.target.value.trim();
//       console.log(inputValue, "User input");

//       // Get description from inputVal

//       if (inputValue) {
//         window.location.href = `new.html?search=${encodeURIComponent(inputValue)}`;
//       }
//     }
//   });
// });

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

function userNav(){
  
  const clickBtn = document.getElementById("userNavBtn");
  const userNav = document.getElementById("userNav");
  const closeUserBtn = document.getElementById("close-btn");
  closeUserBtn.addEventListener("click", closeUserNav);
  clickBtn.addEventListener("click", openNav);
  
  function openNav() {
    userNav.classList.toggle("user-nav");
  }
  
  function closeUserNav() {
    userNav.classList.remove("user-nav");
  }

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

const unhideBtn = document.querySelectorAll(".unhide")

unhideBtn.forEach((unhide)=>{
  
  
  const unhidePass = document.querySelectorAll('.unhidePass')
  unhidePass.forEach((btn)=>{
  
    const img = unhide.querySelector("img");
    console.log(img, "img");
    if (img.src.includes("/img/hide.svg")) {
      console.log("hjg");
      img.src = "/img/search.svg";
      btn.type = "text";
    } else {
      img.src = "/img/hide.svg";
      btn.type = "password";
    }
  })
  
  })}

