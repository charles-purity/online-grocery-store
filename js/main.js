let searchForm = document.querySelector('.search-form'),
    shoppingCart = document.querySelector('.shopping-cart'),
    loginForm = document.querySelector('.login-form'),
    navBar = document.querySelector('.navbar');


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlide: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlide: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

