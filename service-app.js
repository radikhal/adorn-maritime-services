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

// SERVICE SECTION FUNCTIONAILTY
const serviceList = document.querySelectorAll(".service-list-container");

serviceList.forEach((offers) => {
	const btn = offers.querySelector(".chevron-btns");
	btn.addEventListener("click", () => {
		serviceList.forEach((item) => {
			if (item !== offers) {
				item.classList.remove("show-up");
			}
		});
		offers.classList.toggle("show-up");
	});
});

window.addEventListener("scroll", () => {
	let nav = document.querySelector("nav");
	let mobileNav = document.querySelector(".mobile-navigation");
	const windowPosition = window.scrollY > 0;
	nav.classList.toggle("scrolling-active", windowPosition);
	mobileNav.classList.toggle("scrolling-active", windowPosition);
});
