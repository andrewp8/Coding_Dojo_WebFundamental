// Print odds 1-20
function odd_Number() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// Decreasing Multiples of 3
function decreasing_multiples_of_3() {
  for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

// Print the sequence
function print_the_sequence() {
  var arr = [4, 2.5, 1, -0.5, -2, -3.5]
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Sigma
function sigma() {
  var i = 0;
  var sum = 0;
  while (i <= 100) {
    sum += i;
    i++;
  }
  console.log(sum);
}

// Factorial
function factorial() {
  var i = 1;
  var y;
  var product;
  while (i <= 12) {
    i++;
    y = i;
    product = y * i;
  }
  console.log(product);
}

// odd_Number();
// decreasing_multiples_of_3();
// print_the_sequence();
// sigma();
factorial();