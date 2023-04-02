// targetting every p tag
let items = document.querySelectorAll('p');
Array.from(items).forEach((item) => {
	item.addEventListener('click', (event) => {
		colorCode = event.target.innerText;
		// copy to clipboard
		navigator.clipboard.writeText(colorCode);
		//Toastify msg
		Toastify({
			text: `Color code copied successfully`,
			duration: 3000,
			destination: 'https://github.com/apvarun/toastify-js',
			newWindow: true,
			close: true,
			gravity: 'top', // `top` or `bottom`
			position: 'right', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				background: 'linear-gradient(to right, #00b09b, #03203C)',
			},
			onClick: function () {}, // Callback after click
		}).showToast();
	});
});
