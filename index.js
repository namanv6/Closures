//  Question - 1

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Question -- 2

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


//  Question -- 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 3 
    }, 1000);
  }

// Question -- 4
function OuterFunction() {

    let  length = 10;

    function InnerFunction() {
        let width = 2;
        let area = length * width;
        console.log(area);
    }

    return InnerFunction;
}
let innerFunc = OuterFunction();

innerFunc(); 

// Question -- 5
function outerFunction(){
    let x = 0;

    function innerFunction(){
      return  x += 1;
        
    }
    return innerFunction;
}
let result = outerFunction();
console.log(result());

// Question -- 6
//Print Output

var a = 12;
(function () {
  console.log(a);
})();
