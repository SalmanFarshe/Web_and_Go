// == Hero Slider== //
if ($(".hero-slider").length) {
	var swiper = new Swiper(".hero-slider", {
		autoplay: {
			delay: 10000,
			disableOnInteraction: true,
		},
		speed: 900,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".arr-right",
			prevEl: ".arr-left",
		},
		on: {
			slideChangeTransitionStart: function () {
				$(".slide-content h1, .slide-content p, .slide-content a")
					.removeClass("aos-init")
					.removeClass("aos-animate");
			},
			slideChangeTransitionEnd: function () {
				AOS.init();
			},
		},
	});

	$(".hero-slider").hover(
		function () {
			this.swiper.autoplay.stop();
		},
		function () {
			this.swiper.autoplay.start();
		}
	);
}

// for menu responsiveness
var responsiveMenu = window.matchMedia("(max-width: 1025px)");
function responsiveMenuFunction(responsiveMenu) {
	var addingClass = document.querySelector(".small_device_width");
	if (responsiveMenu.matches) {
		addingClass.classList.remove("container");
		document.querySelector(".header_wrapper").style.padding = "20px";
		document.querySelector(".log_in_link").style.display = "none";
		document
			.querySelector(".social_part")
			.classList.add("social_part_responsive");
	} else {
		addingClass.classList.add("container");
		document.querySelector(".header_wrapper").style.padding = "0px";
		document.querySelector(".log_in_link").style.display = "grid";
		document
			.querySelector(".social_part")
			.classList.remove("social_part_responsive");
	}
}
responsiveMenuFunction(responsiveMenu);
responsiveMenu.addListener(responsiveMenuFunction);
// header responsive
var responsiveHeader = window.matchMedia("(max-width: 880px)");
function responsiveHeaderFunction(responsiveHeader) {
	if (responsiveHeader.matches) {
		document.querySelector(".social_part").style.display = "none";
		document.querySelector(".contact").style.display = "none";
		document.querySelector(".row_tow").classList.add("menu_grid");
		document.querySelector(".navbar").classList.add("floating_right_menu");
	} else {
		document.querySelector(".social_part").style.display = "grid";
		document.querySelector(".contact").style.display = "grid";
		document.querySelector(".row_tow").classList.remove("menu_grid");
		document.querySelector(".navbar").classList.add("d-none");
		document.querySelector(".navbar").classList.remove("floating_right_menu");
	}
}
responsiveHeaderFunction(responsiveHeader);
responsiveHeader.addListener(responsiveHeaderFunction);
// final header grid
var responsiveHeaderfinal = window.matchMedia("(max-width: 320px)");
function responsiveHeaderFinalFunction(responsiveHeaderfinal) {
	if (responsiveHeaderfinal.matches) {
	}
}
responsiveHeaderFinalFunction(responsiveHeaderfinal);
responsiveHeaderfinal.addListener(responsiveHeaderFinalFunction);

// img gallery
setGalleryTransition("opacity");
enableExtraButtons();
var galleryimg = document.querySelector(".gallery > img");

json =
	'{ "Entry": { "Title": "Lets See Some Memories:", ' +
	'"Image": ["img/gallery1.jpg",' +
	'"img/gallery2.jpg",' +
	'"img/gallery3.jpg",' +
	'"img/gallery1.jpg",' +
	'"img/gallery2.jpg",' +
	'"img/gallery3.jpg" ] } }';
addGallery(json);

// owl carusel
$(document).ready(function () {
	$(".owl-carousel-2").owlCarousel({
		loop: true,
		margin: 10,
		autoplay:true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				loop: true,
			},
			400: {
				items: 2,
			},
			600: {
				items: 3,
				loop: true,
			},
			1000: {
				items: 5,
				loop: true,
				nav:true
			},
		},
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		autoplay:true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				loop: true,
			},
			600: {
				items: 1,
				loop: true,
			},
			1000: {
				items: 1,
				loop: true,
				nav:true
			},
		},
	});
});