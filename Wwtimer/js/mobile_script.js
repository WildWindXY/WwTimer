let player1 = new Player(1);
let player2 = new Player(2);
function numbers(){
	document.getElementById("player1_time").innerHTML = timeFormat((player1.isTiming() ? getTime() : player1
		.getEndTime()) - player1.getStartTime());
	document.getElementById("player2_time").innerHTML = timeFormat((player2.isTiming() ? getTime() : player2
		.getEndTime()) - player2.getStartTime());
}
function backgrounds(){
	if(player1.isTiming()){
		document.getElementById("player1").style.background="#0066cc"
	}else if(player1.isPressed()&&(!player1.wait_for_release)){
		document.getElementById("player1").style.background="#ffb266"
	}else{
		document.getElementById("player1").style.background= "#c8c8c8"
	}
	if(player2.isTiming()){
		document.getElementById("player2").style.background="#0066cc"
	}else if(player2.isPressed()&&(!player2.wait_for_release)){
		document.getElementById("player2").style.background="#ffb266"
	}else{
		document.getElementById("player2").style.background= "#a0a0a0"
	}
}
function refresh(){
	numbers();
	backgrounds();
}
function listener(){
	document.getElementById("player1_hitbox").ontouchstart = function(){
		player1.keyPressed();
	};
	document.getElementById("player2_hitbox").ontouchstart = function(){
		player2.keyPressed();
	};
	document.getElementById("player1_hitbox").ontouchend = function(){
		player1.keyReleased();
	};
	document.getElementById("player2_hitbox").ontouchend = function(){
		player2.keyReleased();
	};
}
function newScramble(){
	s = getScramble(20);
	document.getElementById("scramble1").innerHTML = s;
	document.getElementById("scramble2").innerHTML = s;
}

document.getElementById("scramble1").onclick = function () {
	newScramble();
};
document.getElementById("scramble2").onclick = function () {
	newScramble();
};
newScramble();
listener();
reload = setInterval(refresh, 60);