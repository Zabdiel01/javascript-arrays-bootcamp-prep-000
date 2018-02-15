var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n);
  return array
}
function addElementToEndOfArray (array, n) {
  var newArray = [...array,n];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,n) {
  array.push(n);
  return array
}
function accessElementInArray()