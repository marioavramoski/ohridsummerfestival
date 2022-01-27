var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "video/Ohrid.mp4";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("playpausebtn");
	mutebtn = document.getElementById("mutebtn");
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	mutebtn.addEventListener("click", mute);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(images/pause.png) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(images/play.png) no-repeat";
	    }
	}
	function mute(){
		if(audio.muted){
		    audio.muted = false;
		    mutebtn.style.background = "url(images/speaker.png) no-repeat";
	    } else {
		    audio.muted = true;
		    mutebtn.style.background = "url(images/speaker_muted.png) no-repeat";
	    }
	}
}
window.addEventListener("load", initAudioPlayer);