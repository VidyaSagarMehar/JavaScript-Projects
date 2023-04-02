let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn) => {
	btn.addEventListener('click', (event) => {
		btnType = event.target.value;
		switch (btnType) {
			case 'A':
				var soundA = new Audio('./sounds/cymbal-v2-82229.mp3');
				soundA.play();
				break;
			case 'S':
				var soundS = new Audio('./sounds/heavy-kick-39406.mp3');
				soundS.play();
				break;
			case 'D':
				var soundD = new Audio('./sounds/high-tom-of-god-wet-004-94254.mp3');
				soundD.play();
				break;
			case 'F':
				var soundF = new Audio('./sounds/kik1b-wet-89388.mp3');
				soundF.play();
				break;
			case 'G':
				var soundG = new Audio('./sounds/tom_2_1-2-89920.mp3');
				soundG.play();
				break;
			case 'J':
				var soundJ = new Audio('/sounds/metal-snare-85754.mp3');
				soundJ.play();
				break;
			case 'K':
				var soundK = new Audio('./sounds/metal-timbale-026-91791.mp3');
				soundK.play();
				break;
			case 'L':
				var soundL = new Audio('./sounds/snare-drum-4-94293.mp3');
				soundL.play();
				break;
			default:
				console.log('Error');
		}
	});
});
