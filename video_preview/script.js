console.log("page loaded...");

function playVideo(element) {
  element.play();
  element.muted = true;
  console.log(element.classList);

}

function pauseVideo(element) {
  element.pause();
}