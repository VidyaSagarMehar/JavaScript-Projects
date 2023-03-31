let string = '';

let buttons = document.querySelectorAll('.button');
// careate and array from every selected buttons and assign event listener on every clicks
Array.from(buttons).forEach((button) => {
	// add event listener on every button clicks

	button.addEventListener('click', (e) => {
		// evaluate the value on clicking on = sign
		if (e.target.innerHTML == '=') {
			string = eval(string);
			document.querySelector('input').value = string;
		} else if (e.target.innerHTML == 'C') {
			string = '';
			document.querySelector('input').value = string;
		} else if (e.target.innerHTML == '√x') {
			string = Math.sqrt(string);
			document.querySelector('input').value = string;
		} else if (e.target.innerHTML == 'x²') {
			string = string * string;
			document.querySelector('input').value = string;
		} else {
			console.log(e.target);
			// display button click on input field
			string = string + e.target.innerHTML;
			document.querySelector('input').value = string;
		}
	});
});

// TODO: make M+ M- functional
