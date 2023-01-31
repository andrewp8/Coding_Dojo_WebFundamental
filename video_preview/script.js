console.log("page loaded...");

function playVideo(element) {
  element.play();
  element.muted = true;
}

function pauseVideo(element) {
  element.pause();
}