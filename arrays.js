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
  return array.shift(0);
}
function removeElementFromBeginningOfArray(array) {
  array.slice(0);
  return array
}
function estructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  
}