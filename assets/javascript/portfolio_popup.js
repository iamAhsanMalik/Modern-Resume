document.addEventListener('click', (e) => {
	if (e.target.classList.contains('view-project-btn')) {
		togglePortfolioPopup();

		document.querySelector('.portfolio-popup').scrollTo(0, 0);
		portfolioItemDetails(e.target.parentElement);
	}
});

function togglePortfolioPopup() {
	document.querySelector('.portfolio-popup').classList.toggle('open');
	document.body.classList.toggle('hide-scrolling');
	document.querySelector('.main').classList.toggle('fade-out');
}

function portfolioItemDetails(portfolioItem) {
	document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector(
		'.portfolio-item-thumbnail img'
	).src;

	document.querySelector('.pp-header h3').innerHTML =
		portfolioItem.querySelector('.portfolio-item-title').innerHTML;

	document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector(
		'.portfolio-item-details'
	).innerHTML;
}

/* -- Hide Portfolio Popup When Click Outside of it -- */
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('pp-inner')) {
		togglePortfolioPopup();
	}
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('pp-close')) {
		togglePortfolioPopup();
	}
});
