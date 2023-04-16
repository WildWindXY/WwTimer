let player1 = new Player(1);
let player2 = new Player(2);
let player3 = new Player(3);

function keyboardListener() {
	document.onkeydown = function() {
		let keycode = event.keyCode;
		switch (keycode) {
			case 187: // +键
				newScramble();
				break;
			case 20: // caps lock
				player1.keyPressed();
				break;
			case 32: // space bar
				player2.keyPressed();
				break;
			case 13: // enter
				player3.keyPressed();
				break;
			default:
				break;
		}
	}
	document.onkeyup = function() {
		let keycode = event.keyCode;
		switch (keycode) {
			case 20: // caps lock
				player1.keyReleased();
				break;
			case 32: // space bar
				player2.keyReleased();
				break;
			case 13: // enter
				player3.keyReleased();
				break;
			default:
				break;
		}
		if (player1.isFinished() && player2.isFinished() && player3.isFinished()) {
			newScramble();
		}
	}
}

function newScramble() {
	document.getElementById("scramble").innerHTML = getScramble(20);
	player1.onNewScramble();
	player2.onNewScramble();
	player3.onNewScramble();
}

function numbers() {
	document.getElementById("player1_time").innerHTML = timeFormat((player1.isTiming() ? getTime() : player1
		.getEndTime()) - player1.getStartTime());
	document.getElementById("player2_time").innerHTML = timeFormat((player2.isTiming() ? getTime() : player2
		.getEndTime()) - player2.getStartTime());
	document.getElementById("player3_time").innerHTML = timeFormat((player3.isTiming() ? getTime() : player3
		.getEndTime()) - player3.getStartTime());
}

function backgrounds() {
	if (player1.isTiming()) {
		document.getElementById("player1").style.background = "#0066cc"
	} else if (player1.isPressed() && (!player1.wait_for_release)) {
		document.getElementById("player1").style.background = "#ffb266"
	} else {
		document.getElementById("player1").style.background = "#c8c8c8"
	}
	if (player2.isTiming()) {
		document.getElementById("player2").style.background = "#0066cc"
	} else if (player2.isPressed() && (!player2.wait_for_release)) {
		document.getElementById("player2").style.background = "#ffb266"
	} else {
		document.getElementById("player2").style.background = "#a0a0a0"
	}
	if (player3.isTiming()) {
		document.getElementById("player3").style.background = "#0066cc"
	} else if (player3.isPressed() && (!player3.wait_for_release)) {
		document.getElementById("player3").style.background = "#ffb266"
	} else {
		document.getElementById("player3").style.background = "#c8c8c8"
	}
	document.getElementById("player1_key").style.color = (player1.isFinished() && !player1.isTiming()) ? "#87ffc3" :
		"#000000"
	document.getElementById("player2_key").style.color = (player2.isFinished() && !player2.isTiming()) ? "#87ffc3" :
		"#000000"
	document.getElementById("player3_key").style.color = (player3.isFinished() && !player3.isTiming()) ? "#87ffc3" :
		"#000000"
}

function refresh() {
	numbers();
	backgrounds();
}
document.getElementById("scramble").onclick = function() {
	document.getElementById("scramble").innerHTML = getScramble(20);
};

function mouseListener() {
	document.getElementById("player1").onmousedown = function() {
		player1.keyPressed();
	};
	document.getElementById("player1").onmouseup = function() {
		player1.keyReleased();
	};
	document.getElementById("player1").onmouseleave = function() {
		player1.mouseMovedOut();
	};
	document.getElementById("player2").onmousedown = function() {
		player2.keyPressed();
	};
	document.getElementById("player2").onmouseup = function() {
		player2.keyReleased();
	};
	document.getElementById("player2").onmouseleave = function() {
		player2.mouseMovedOut();
	};
	document.getElementById("player3").onmousedown = function() {
		player3.keyPressed();
	};
	document.getElementById("player3").onmouseup = function() {
		player3.keyReleased();
	};
	document.getElementById("player3").onmouseleave = function() {
		player3.mouseMovedOut();
	};
}
newScramble();
mouseListener();
keyboardListener();
reload = setInterval(refresh, 60);
console.log("是来看代码的嘛\n o(〃'▽'〃)o \n我说我这是乱做的")