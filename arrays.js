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
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array
}
function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(0);
  return newArray
}
function estructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  
}