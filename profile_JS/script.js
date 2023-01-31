console.log("page loaded...");

function editProfile(target) {
  var name = document.querySelector('#' + target);
  name.innerText = 'AP';
}

function remove(removable) {
  document.querySelector('.' + removable).remove();
}

function inConnection(badge) {
  var add = document.querySelector(badge);
  add.innerText++;
  console.log(add);
}

function deConnection(badge) {
  var add = document.querySelector(badge);
  add.innerText--;
  console.log(add);
}
