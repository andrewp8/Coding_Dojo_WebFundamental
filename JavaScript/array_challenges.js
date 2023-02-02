/*        Always Hungry        */
function alwaysHungry(arr) {
  // your code here 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'food') {
      console.log('yummy');
    }
  }
  if (arr.includes('food') == false) {
    console.log("I'm hungry");
  }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


/*        High Pass Filter        */
function highPass(arr, cutoff) {
  var filteredArr = [];
  // your code here
  var temp;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      temp = arr[i];
      filteredArr.push(temp);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


/*        Better than average        */
function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var average = sum / arr.length;
  var count = 0
  // count how many values are greated than the average
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


/*        Array Reverse        */
function reverse(arr) {
  // your code here
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

/*
  option2:
  function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    // your code here
    return arr;
}
*/

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


/*        Fibonacci Array        */
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  var i = 0;
  var fibNum = 0;
  while (i < n) {
    fibNum = fibArr[i] + fibArr[i + 1];
    fibArr.push(fibNum);
    if (fibArr.length == n) {
      return fibArr;
    }
    i++;
  }
}

/*
  option2:
  function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
  }
 */

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
