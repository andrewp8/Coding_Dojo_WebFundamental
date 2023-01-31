function like(element) {
  var likes = document.querySelectorAll('.likeCount');
  console.log(likes);

  for (var i = 0; i < likes.length; i++) {
    if (likes[0].id == 'user1') {
      var like1 = document.querySelector('#user1');
      like1.innerText++;
    }
    if (likes[0].id == 'user2') {
      var like2 = document.querySelector('#user2');
      like2.innerText++;
    }
    if (likes[0].id == 'user3') {
      var like3 = document.querySelector('#user3');
      like3.innerText++;
    }
  }
  // console.log(element);
  // var like1 = document.querySelector('#user1');
  // like1.innerText++;

  // var like2 = document.querySelector('#user2');
  // like2.innerText++;

  // var like3 = document.querySelector('#user3');
  // like3.innerText++;
}