// function runningLogger(){
//   console.log('I am running');
// }
// runningLogger();

// function multiplyByTen(x){
//   console.log(x * 10);
// }
// multiplyByTen(5)

// function stringReturnOne(){
//   console.log('hellow');
// }
// //

// function stringReturnTwo(){
//   console.log('hello world');
// }

// function caller(x){
//   if (typeof(x) === "function"){
//     console.log(typeof(x));
//   }
//   else{
//     console.log(x);
//   }
// }
// caller(function(){})

// function myDoubleConsoleLog(x,y){
//   console.log(typeof(x, y))
// }
// myDoubleConsoleLog(stringReturnTwo(4), stringReturnTwo(2))
//
function caller2(arg){
  console.log('starting ....');
  if(typeof(arg) === "function"){
    setTimeout(arg(),4000);
    console.log('ending?');
  }
  console.log('interesting');
}
caller2(function(){})
