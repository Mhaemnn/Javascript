// variable scope 

function multiply(num) {
  total = num * num;
  return total;
}
let total = 9;
let number = multiply(20);
console.log(total);


// closure => suatu fungsi yang dapat mengakses varibel didalam lexical scop-nya yang disebut dengan closure
function init() {
  var name = "jhon"; // varible local di dalam scope fungsi init

  function gretting() { // inner function, merupkan closure
    console.log(`hallo ${name}`) // memanggil varible yang dideklarasikan di parent function
  }
  gretting()
};
init()
