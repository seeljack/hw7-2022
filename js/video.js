var video;
video=document.querySelector("#player1");

//This function will execute on load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

//play
var play_botton;
play_botton=document.querySelector('#play');

//This function will execute on click
play_botton.addEventListener("click",function() {
	console.log("Play Video")
	video.play();
}
)

//pause 
var pause_button;
pause_button=document.querySelector('#pause');
pause_button.addEventListener("click",function(){
	console.log("Pause Video");
	video.pause();
})

//Slow Down
var slow_down;
slow_down=document.querySelector('#slower');
slow_down.addEventListener("click",function(){
	//need to make it so it goes down by 10% every time
	video.playbackRate -= .1 * (video.playbackRate);
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
})

//speed up function
var speed_up;
speed_up = document.querySelector('#faster');
speed_up.addEventListener("click",function(){
	video.playbackRate += .111111111111111111111111111 * (video.playbackRate);
	console.log("Speed up video");
	console.log("Video is " + video.playbackRate);
})

//skip ahead
var skip_ahead;
skip_ahead=document.querySelector('#skip');
skip_ahead.addEventListener("click",function(){
	if(video.currentTime < (video.duration - 10)){
	video.currentTime = video.currentTime + 10
	console.log("Video current time is " + video.currentTime);
	}
	else{
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime);
	}

})


//mute
var mute;
mute=document.querySelector('#mute');
mute.addEventListener("click",function(){
	if(video.muted == false){
		video.muted = true;
		console.log("Mute");
	}
	else{
		video.muted = false;
		console.log("Unmute");
	}
})


//volume slider
var slide;
var output;
document.querySelector('#slider').addEventListener("click", function(){
	video.volume = (document.querySelector('#slider').value) / 100;
	document.getElementById("volume").innerHTML = video.volume;
	console.log("The current value is " + video.volume);
})


//oldschool;
document.querySelector('#vintage').addEventListener("click", function(){
	document.querySelector('video').className = 'oldSchool';

})

//og
document.querySelector('#orig').addEventListener("click", function(){
	document.querySelector('video').className = 'video';
})




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

