// call function
let obj = { num : 2};

let add = function(a){
  return this.num + a;
}

console.log("Addition call is :- ",add.call(obj,5));


// apply function


let obj1 = { num : 2};

let addTo = function(a , b , c){
  return this.num + a + b + c;
}

let arr = [1,2,3];
console.log("Addition apply is :- ",addTo.apply(obj1,arr));


//bind function
let obj2 = { num : 2};

let addTo1 = function(a , b , c){
  return this.num + a + b + c;
}
var bound = addTo1.bind(obj1);
console.log("Addition bind is :- ",bound(1,2,3));
