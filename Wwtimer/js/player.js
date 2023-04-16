class Player{
	
	constructor(id){
		this.id = id;
		this.start_time = 0;
		this.end_time = 0;
		this.timing = false;
		this.onpress = false;
		this.wait_for_release = false;
		this.finished = false;
	}
	
	isTiming(){
		return this.timing;
	}
	isPressed(){
		return this.onpress;
	}
	isFinished(){
		return this.finished
	}
	getStartTime(){
		return this.start_time;
	}
	getEndTime(){
		return this.end_time;
	}
	onNewScramble(){
		this.finished = false;
	}
	keyPressed(){
		this.onpress = true;
		if(this.timing){
			this.wait_for_release = true;
			this.timing = false;
			this.end_time = getTime();
		}
	}
	keyReleased(){
		if(this.wait_for_release){
			this.wait_for_release = false;
			this.onpress = false;
			return;
		}
		if(this.onpress&&(!this.timing)&&(getTime()-this.end_time)>500){
			this.start_time = getTime();
			this.timing = true;
			this.finished = true
		}
		this.onpress = false;
	}
	mouseMovedOut(){
		this.onpress = false;
	}
}