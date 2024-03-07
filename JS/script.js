function adjustSlidesQt(parameters)
{	
	if (windowWidth >= 600)
	{
		if (windowWidth >= 1024)
		{
			parameters["navigation"] = {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			};
		}

		parameters["slidesPerView"] = 2;
	}
	else if (windowWidth <= 480)
	{
		parameters["slidesPerView"] = 1;	
	}

	return parameters;
}

function adjustSlidesHeight()
{
	let biggestHeight = slides[0].offsetHeight;

	for (let i = 1; i < slides.length; i++)
	{
		if (slides[i].offsetHeight > biggestHeight)
		{
			biggestHeight = slides[i].offsetHeight;
		}
	}

	slides.forEach(slide => {
		slide.style.height = biggestHeight.toString() + "px";
	});
}

function menuMobile()
{
	let nav = document.querySelector(".nav");
	let blackBackground = document.querySelector(".cover");
	let header = document.querySelector(".header");
	let headerHamburger = document.querySelector(".header__hamburguer");

	if (nav.style.display == "block")
	{
		headerHamburger.setAttribute("data", "images/icon-hamburger.svg");

		blackBackground.style.display = "none";
		nav.style.display = "none";

		return 0;
	}

	blackBackground.style.display = "block";
	nav.style.display = "block";
	nav.style.top = header.offsetHeight + "px";

	headerHamburger.setAttribute("data", "images/icon-close.svg");
}


let windowWidth = window.innerWidth;
let swiperParameters = {
	spaceBetween: 30,
	cssMode: true,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	}
};
swiperParameters = adjustSlidesQt(swiperParameters);
let swiper = new Swiper('.swiper', swiperParameters);

let slides = document.querySelectorAll(".swiper-slide");
adjustSlidesHeight();

let menuBtn = document.querySelector(".div--hamburguer");
menuBtn.addEventListener("click", menuMobile);

window.addEventListener("resize", function() {
	windowWidth = window.innerWidth;
	swiperParameters = {
		spaceBetween: 30,
		cssMode: true,
		loop: true,
	
		pagination: {
			el: '.swiper-pagination',
		}
	};
	swiperParameters = adjustSlidesQt(swiperParameters);

	swiper.destroy();
	swiper = new Swiper('.swiper', swiperParameters);

	slides = document.querySelectorAll(".swiper-slide");
	adjustSlidesHeight();
}); 