const navigation = document.querySelector(".navigation-menu");
const burgerBtn = document.querySelector(".outer-hamburger-container");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-navigation");

burgerBtn.addEventListener("click", () => {
	navigation.classList.toggle("show");
	closeBtn.classList.toggle("active");
	openBtn.classList.toggle("inactive");
});

window.addEventListener("scroll", () => {
	let nav = document.querySelector("nav");
	let mobileNav = document.querySelector(".mobile-navigation");
	const windowPosition = window.scrollY > 0;
	nav.classList.toggle("scrolling-active", windowPosition);
	mobileNav.classList.toggle("scrolling-active", windowPosition);
});


const navLink = document.querySelector(".nav-about-link");

navLink.addEventListener("click", (e) => {
		// hamburger fucntionality
	navigation.classList.remove("show");
	openBtn.classList.remove("inactive");
	closeBtn.classList.remove("active");
	// navigate to specific spot
	e.preventDefault();
	const id = e.currentTarget.getAttribute("href").slice(1);

	const element = document.getElementById(id);

	const desktopNavHeight = navigation.getBoundingClientRect().height;

	const mobileNavHeight = mobileNav.getBoundingClientRect().height;

	let mobilePosition = element.offsetTop - mobileNavHeight;
	let desktopPosition = element.offsetTop - desktopNavHeight;

	if (window.screen.width <= 680) {
		window.scrollTo({
			left: 0,
			top: mobilePosition,
		});
	} else {
		window.scrollTo({
			left: 0,
			top: desktopPosition,
		});
	}
})