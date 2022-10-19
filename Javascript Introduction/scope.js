// Global scope
var carName = 'Tesla';

function myFunction() {
  // local scope
  var myName = 'Adi';
}

var a = 20;

function change() {
  a = 25;
}

console.log(a); // 25?