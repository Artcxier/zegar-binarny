
let clockBits = document.getElementsByTagName("div");
let bitColor = '#30d5ba';
let emptyBitColor = '#212121';

function resetClock(clockBits) {
	for (let i = 0; i < clockBits.length; i++) {
		clockBits[i].style.backgroundColor = emptyBitColor;
	}
}

function updateClock() {
	let date = new Date();
	let hr  = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	if (hr < 10) {
		hr = "0" + hr;
	}

	if (min < 10) {
		min = "0" + min;
	}

	if (sec < 10) {
		sec = "0" + sec;
	}

	let span = document.getElementById('time');
	span.innerHTML = hr+':'+min+':'+sec;

	let time = "" + hr + min + sec;

	let timeInBinary = time.split("").map(Number).map(n => n.toString(2).split("").reverse().join(""));
	
	for (let i = 0; i < timeInBinary.length; i++) {
		switch (i) {
			case 0: timeInBinary[i] = (timeInBinary[i]+'').padEnd(2,'0'); break;
			case 1: timeInBinary[i] = (timeInBinary[i]+'').padEnd(4,'0'); break;
			case 2: timeInBinary[i] = (timeInBinary[i]+'').padEnd(3,'0'); break; 
			case 3: timeInBinary[i] = (timeInBinary[i]+'').padEnd(4,'0'); break;
			case 4: timeInBinary[i] = (timeInBinary[i]+'').padEnd(3,'0'); break;
			case 5: timeInBinary[i] = (timeInBinary[i]+'').padEnd(4,'0');
		}
	}

	timeInBinary = timeInBinary.join('') + "";
	
	for (let i = 0; i < clockBits.length; i++) {
		if (timeInBinary[i] == 1) {
			clockBits[i].style.backgroundColor = bitColor;
		}
	}

}

updateClock();
setInterval(function() { 
	resetClock(clockBits);
	updateClock();
}, 100);