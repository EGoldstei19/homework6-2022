var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video")
	video.play()
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100+'%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	console.log("The current speed is" + video.playbackRate)
	video.playbackRate*=.95
	console.log("The current speed is" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	console.log("The current speed is" + video.playbackRate)
	video.playbackRate/=.95
	console.log("The current speed is" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	console.log("The current time is " + video.currentTime)
	if (video.currentTime >= 52){
		video.currentTime = 0
		console.log("Skip back to beginning")
	}
	else{
		video.currentTime+=15
	}
	console.log("The current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	//console.log("The value of mute is " + video.muted)
	if (video.muted == true){
		this.innerHTML = "Mute"
		video.muted = false
	}
	else{
		this.innerHTML = "Unmute"
		video.muted = true
		
	}
	//change the innerHTML of mute to make the block say unmuted

	//console.log("Now the value of mute is " + video.muted)
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100+'%'
	//console.log("The current volument is " + )
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
