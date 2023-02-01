var tempList = document.querySelectorAll('.temp')

function alertMsg() {
  var message = "This page says\nLoading weather report...";
  alert(message);
}

function acceptCookie(cookie) {
  document.querySelector(cookie).remove();
}

function convertCtoF(temp) {
  return temp = Math.round(temp * (9 / 5) + 32);
}

function convertFtoC(temp) {
  return temp = Math.round((temp - 32) * (5 / 9));
}

function convert(element) {
  console.log(element.value);
  for (var i = 1; i < 9; i++) {
    var temp = document.querySelector('#temp' + i)
    var convertedTemp = temp.innerText;
    if (element.value == '°F') {
      temp.innerText = convertCtoF(parseInt(convertedTemp))
    } else {
      temp.innerText = convertFtoC(parseInt(convertedTemp))
    }

  }

  // console.log(element.value);
  // document.querySelectorAll('.temp').forEach((temp, index) => {
  //   var arr = [1, 2, 3, 4, 5, 6, 7, 8]
  //   temp.innerText = arr;
  //   console.log(temp.innerText);

  //       if (element.value == '°F') {
  //         temp.innerText[index] = convertCtoF(temp.innerText[index]);
  //         temp.innerText = parseInt(temp.innerText);
  //         temp.innerText[index] = +2;
  //         console.log(temp.innerText[2]);

  //   }

}


