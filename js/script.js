// JavaScript Document
$(document).ready(function () {
	/* navigation */
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	  });
	document.addEventListener('click',function(e){
		/* Hamburger menu */
		if(e.target.classList.contains('hamburger-toggle')){
			e.target.children[0].classList.toggle('active');
		}
	});
	$(".navbar-toggler").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
	});
	$(".close").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
	});
	/* navigation */

	/* lazyload */
	var myLazyLoad = new LazyLoad();
	myLazyLoad.update();
	/* lazyload */
	/* OFI Browser */
	objectFitImages();
});


// Homebanner Slider - Home Page
var swiper = new Swiper(".home-banner-slider", {
	pagination: {
		el: ".swiper-pagination",
        clickable: true,
	},
	spaceBetween: 30, // Adjust this value for the space you need between slides
});


var swiper = new Swiper(".korisni-swiper", {
    slidesPerView: 1, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 30, 
});

// NOVOSTI - Home Page
var swiper = new Swiper(".novosti-slider", {
    spaceBetween: 36,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 36,
        },
    },
});


var swiper = new Swiper(".reference-slider", {
	loop: true,
    pagination: {
		el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
		nextEl: ".reference-swiper-button-next",
        prevEl: ".reference-swiper-button-prev",
    },
    breakpoints: {
		320: {
			slidesPerView: 2,
        },
		500: {
			slidesPerView: 3,
        },
        700: {
			slidesPerView: 4,
        },
    },
});


var swiper = new Swiper(".our-services-slider", {
	loop: true,
	spaceBetween: 36,
    pagination: {
		el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
		nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
        },
		425: {
			slidesPerView: 2,
			spaceBetween: 24,
        },
        767: {
			slidesPerView: 3,
			spaceBetween: 24,
        },
        1024: {
			slidesPerView: 4,
			spaceBetween: 36,
        },
    },
});


// spaceBetween: 36,