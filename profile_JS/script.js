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

function deConnection(connectionBadge) {
  var coBadge = document.querySelector(connectionBadge);
  coBadge.innerText--;
  console.log(coBadge);
}

function reConnection(requestBadge) {
  var reBadge = document.querySelector(requestBadge);
  reBadge.innerText--;
  console.log(reBadge);
}