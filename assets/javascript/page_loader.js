/* -- Page Loader-- */
window.addEventListener('load', () => {
	document.querySelector('.page-loader').classList.add('fade-out');

	setTimeout(() => {
		document.querySelector('.page-loader').style.display = 'none';
	}, 600);
});
