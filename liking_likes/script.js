console.log("page loading...");

function like(userId) {
  var likes = document.querySelector('#' + userId);
  likes.innerText++;
  // console.log(likes);
}