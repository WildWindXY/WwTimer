function getScramble(length) {
	var side = [ "R", "L", "B", "U", "F", "D" ];
	var opside = [ "L", "R", "F", "D", "B", "U" ];
	var type = [ "", "'", "2" ];
	var scramble = "", current = null, s = null, t = null;
	for (var i = 0; i < length; i++) {
		current = s;
		var sr;
		do {
			sr = Math.floor(Math.random() * 6);	
			s = side[sr];
			t = type[Math.floor(Math.random() * 3)];
		} while (s == current || opside[sr] == current);
		scramble = scramble + s + t + " ";
	}
	return scramble;
}
function getTime(){
	return Date.now();
}
function timeFormat(time){
	time = Math.floor(time/10)
	var mili = time%100;
	time = Math.floor(time/100);
	var sec = time%60;
	time = Math.floor(time/60);
	if(time == 0){
		if(mili>=10){
			return sec+"."+mili;
		}else{
			return sec+".0"+mili;
		}
	}
	if(sec>=10){
		if(mili>10){
			return time+":"+sec+"."+mili;
		}else{
			return time+":"+sec+".0"+mili;
		}
	}
	if(mili>10){
		return time+":0"+sec+"."+mili;
	}else{
		return time+":0"+sec+".0"+mili;
	}
}