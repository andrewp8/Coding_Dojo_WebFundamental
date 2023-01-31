function switchMode(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

function custom_alert() {
  alert("Ninja was liked");
}

function removeBtn(element) {
  element.remove();
}