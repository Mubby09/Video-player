const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timeStamp = document.getElementById("timestamp");

//play and pause
function toggleVideoStatus() {
  //paused, pause() and play() are built into the HTML Api
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play;pause icon
function updatePlayIcon() {
  if (video.paused) {
    playButton.innerHTML = `<i class='fa fa-play fa-2x'></i>`;
  } else {
    playButton.innerHTML = `<i class='fa fa-pause fa-2x'></i>`;
  }
}

function updateProgress() {
  //currentTime, duration are built into the HTML Video Api
  progressBar.value = (video.currentTime / video.duration) * 100;

  //   Get Minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  //Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timeStamp.innerHTML = `${mins}: ${secs}`;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress() {
  video.currentTime = +(progressBar.value * video.duration) / 100;
}
//Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", toggleVideoStatus);
stopButton.addEventListener("click", stopVideo);
progressBar.addEventListener("change", setVideoProgress);
