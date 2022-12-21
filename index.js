//mouse and key events

//1. mousedown - it is fired when mouse button is pressed down.
//2. mouseup - it is fired when mouse button is released up.
//3. click - It is when the mouse is clicked. Here mousedown, mouseup and click all the three events are called in sequence.
//4. dbclick - It is fired when the mouse is double clicked rapidly. Here mousedown, mouseup, click , mousedown, mouseup, click , dbclick.
//5. mouseenter - It is fired when the mouse starts to hovering over some element. 
//6. mouseleave - It is fired when the mouse exits while hovering over some element. 
//7. mouseover - It is fired when the mouse is hovering over some element. 
//8. mouseout - It is fired when the mouse leaves from hovering over some element. 
//9. mousemove - It is fired when the mouse moves over some element. 
//10. contexthouse - It is fired when the mouse right button is clicked. 

const divOne = document.getElementById('divOne')
console.log(divOne);

const divTwo = document.getElementById('divTwo')
console.log(divTwo);

function output(e){
    console.log(e.type);
}
divTwo.addEventListener('dbclick',output);
divTwo.addEventListener('click',output);
divTwo.addEventListener('mouseup',output);
divTwo.addEventListener('mousedown',output);
divTwo.addEventListener('mouseenter',output);
divTwo.addEventListener('mouseleave',output);
divTwo.addEventListener('mouseover',output);
divTwo.addEventListener('mouseout',output);
divTwo.addEventListener('mousemove',output);
divTwo.addEventListener('contexthouse',output);

//Keydown , Keyup, Keypress
const myText = document.getElementById('myInput');
myText.addEventListener('Keydown', keyEvent);

function KeyEvent(e){
    console.log(e.type + " " + e.Keycode);
}

//JS engine (google v8 architecture)
//Exceution context : call stack and GEC and FEC
//Hoisting and temporal


//15-12 

// function add(){
//     let result = 2+3;
//     console.log(result);
// }

// setTimeout(() => {
//     add();
// }, 0);


// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");
// console.log("Hey Hi!!");


//Hoisting and temporal dead zone

//Hoisting - Bringing the variable and the functions declaration to the top of the codeis called as hoisting.

// var x = undefined;
console.log(x);
add();
//global, it becomes a property of "this", window 
var a;
a = 10;
function add = () => {
    let result = 2+3;
    console.log(result);
}

console.log(a);//10




//let and const stays in the temporal dead zone as long as they are not assigned/initialized with their true 
// values. If we try to access them in the TDZ, we wont be able to.


//16-12
//globally defined vriables whether with let, const or var are naturally accessible inside a block or function.

// let a = 10;
// const b = 20;
// var c = 20;
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30
// {
//     console.log(a);//10,nd
//     console.log(b);//20,nd
//     console.log(c);//30,nd
// }
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// function add(){
//     let result = a+b;
//     console.log(result);
// }
// add();

{
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
//let and const are block scoped variables and therefore not accessible outside the block whereas var are global 
//scope therefore can be accessed anywhere in the code.

//function scope - Any variables declared inside the function are only accessible by the function itself and not 
// outside the function.
function me(){
    let a = 15;
    console.log(a);
}
me();
//console.log(a);
console.log(c);

// Scope chain in JS
// Scope is related to the lexical environment of the variable. Scope is a place/environment where any variable
// can be accessed in our code.

// Whenever execution context is created a lexical environment is created for that.
// lexical environment - A local space of the function plus the local space of the functions parent and so on

// Scope chain - Finding the variable in it's own scope, if not found then in it's parent scope, if not found i
// in the parent's scope also, then finding it in the grandParent's scope and so on upto the global space is 
// called scope chain.

// let d = 25;
// function a(){
//     console.log(d);
//     let e = 30 ;
//     b();
//     function b(){
//         console.log(d);
//         console.log(e);
//         let f = 40;
//         c();
//         function c(){
//             console.log(d);
//             console.log(e);
//             console.log(f);
//         }
//     }

// }
// a();
// b();

// let d = 20; 
// function a(){
//     let e = 30;
//     console.log(d);
//     b();
//     function b(){
//         let f = 40;
//         console.log(d);
//         console.log(e);
//         console.log(f);
//     }
//     function c(){
//         console.log(d); 
//         console.log(e); 
//         console.log(f); 
// }
// c();
// }
// a();

//Shadowing in JS

let a = 10; 
const b = 20; 
var c = 30;
console.log(a);//10
console.log(b);//20
console.log(c);//30
{
    let a =40;
    const b = 50;
    var c = 60;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//Illegal shadowing
// const a = 10; 
// console.log(a);//10
// {
//     let a =20;
//     console.log(a);//20
// }
// console.log(a);//10

// setTimeout((drink1, drink2) => {
    //     console.log("Hey hi",drink1, drink2);
    // }, 2000, "Mojito","Blue Lagoon");

// setInterval((drink1, drink2) => {
//     console.log("Hey hi",drink1, drink2);
// }, 1000, "Mojito","Blue Lagoon");

//Closure - Function along with the lexical scope bundled together is called closures.

function x(){
    let a = 20;
    function y (){
        console.log(a);
    }
    y();
}

x()

// let result = function y (){
//     console.log(a);
// }
// result();
// console.log(result);

// const print = function(){
//     console.log("Hey print me!!");
// }

// print();

// function x(){
//     let total = 0;
//     total = 40+total;
//     return function y (){
//         console.log(total);
//     }
// // }
// let result = x();
// result();
// console.log(result);

const ticketBooking = function(){
    let passengerCount = 0;//1/2/3

    return function(){
        passengerCount++;
        console.log('The count of passenger is ${passengerCount}');

    }
}
//ticketBooking()();
let bookie = ticketBooking();
console.log(bookie);
bookie();//1
bookie();//2
bookie();//3
bookie();//4
bookie();//5

console.log(bookie)

const boardPassenger = function(n,wait){
    let peoplePerGroup = n/3;
    
    setTimeout(() => {
        console.log(`we are boarding all ${n} passengers`);
        console.log(`there are 3 groups of ${peoplePerGroup} passengers`);
    }, wait*1000);

    console.log(`Boarding of Passengers started for ${n} people`);
}
boardPassenger(180,3);

function x(y){
    console.log("I am function x");
    y();
    console.log("I am function x");
} 
    
x(function y(){
    console.log("I am function y");
})


// let y = function y(){
//     console.log("I am function y");
// }

// y();

//callback hell - pyramid of doom or arrow shape formed due to nested callback functions
//This leads to unmanageable code. This grows horizontally.
//Call back functions have a disavantage of callback hell when multiple/nested callback functions are called.

//task.createOrder(()=>{
    //task.makePayment(()=>{
        //task.orderSummary(()=>{
            //task.updateWallet();
//        })
//    })
//})

//Promises - They are used to handle all the asynchronous tasks. It allows us to prevent callback hell.
// It allows us to make API calls. Promises are a solution to callback hell, but that is not the only task
// what Promises are responsible for.
// An Object that is used as placeholder/container for a future value.

//1. Pending      2. Fulfilled        3. Rejected

// status = 200(get the data successfully) / 404(error) / 500(internal server error)

//const url = "https://jsonplaceholder.typicode.com/todos";

//let result = fetch(url);
//console.log(result);

//Promise consists of a Producer and a consumer.
//Producer has executor functions called resolve and reject. Resolve and reject are handled by .then and 
// .catch() method respectively


let promise = new Promise((resolve, reject)=>{//Producer
    setTimeout(() => {
        resolve("I am resolving a promise");
      //reject("I m rejecting the promise")   
    }, 3000);
})

promise
       .then((response)=>{
          console.log(response);
      })

       .catch(error)=>{
            console.log(error);
        })
     
        .finally(()=>{
           console.log("End of promise");
       })

// console.log("End of promise");

function callingPromise()
    return new promise((resolve, reject)=> {    
        setTimeout(() => {
        //resolve("I am resolving a promise");
         reject("I m rejecting the promise")   
    }, 2000);
})

callingpromise()        //Consumer
       .then((response)=>{
          console.log(response);
      })

       .catch(error)=>{
            console.log(error);
        })
     
        .finally(()=>{
           console.log("End of promise");
       })

//Promise Chaining - 

// let promise = new promise((resolve) => {
//      resolve();    
// })

// promise
//     .then(()=>{
//         console.log("I am first promise response");
//     })

//     .then(()=>{
//        return new promise((resolve,rejct)=>{
//         setTimeout(()=>{
//         console.log("I am second promise response");
//         resolve();   
//     },2000);

//     .then(()=>{
//         console.log("I am third promise response");
//     })
    
//      .then(()=>{
//         return new promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("I am forth promise response");
//                 resolve();
//             }, 2000);    
//         })
//      })
//     .then(() => { 
//         console.log("end of promises");
//      })
//      .catch(()=>{
//         console.log("error");
//      })
//      .then(()=>{
//      })
//      .catch(() => {
//      })

//      let promise = new promise((resolve, reject)=>{
//          const url = "https://jsonplaceholder.typicode.com/todos";
//          let result = fetch(url);
//          console.log(result);
//          result
//              .then((res)=>{
//                 console.log(res);
//                 if(res.status === 200){
//                 let resultObject = res.json();
//                 return resultObject;
//              }
//              else{
//                  rejsct(new Error(res))
//              }
//         })    
//             //  .then((res)=>{
//             //     console.log(res);
//             //  })
//      })

//      promise
//           .then((res)=>{
//             console.log(res);
//             // return res.json();
//           })
//           // .then((res)=>{
//           //     console.log(res);
//           //    })
//           .catch((err)=>{
//             console.log(err);
//           })

//async - whenever a function is started with a keyword async, it gives us a "promise" in return.
// await is always used with async function only. Just await cant be used.

// async function fetchData(){
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     let response = await fetch(url);
//     console.log(response);
//     let result = await response.json()
//     console.log(result);
// }
// async function callFtechData(){
// fetchData();
// console.log("End of promise");
// }
// callFtechData();

//Await basically helps to wait for 
// the particular task to finish and then moves to the next line of the code.

//First Class functions and Higher Order Functions.

//First Class Function(FCF's) - Functions in javascript can be passed as values to the other function's or
//can be returned as values from the other functions. This property of functions allowed by javascript makes
// them call as First class functions or First class Citizens.

function x(param){

}

x(function y(){
    console.log('I am function Y');
})

function z(){
    let me ="SId";

    return function(){
        console.log('I am $(me)');

    }
}

let res = z();
//let res = function(){// FCF
//  console.log('I am $(me)');
// }