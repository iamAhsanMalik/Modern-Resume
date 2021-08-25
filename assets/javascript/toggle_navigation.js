const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () => {
	toggleNavbar();
});

function toggleNavbar() {
	document.querySelector('.header').classList.toggle('active');
}
