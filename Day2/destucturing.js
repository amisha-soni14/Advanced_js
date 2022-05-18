//Destructuring of array
function get() {    
	return [1,2,3,4,5];
}
let score=get();
console.log(score);
let [x,y,...args] = get();
console.log(x);
console.log(y);
console.log(args);

//Destructuring of object
let person={first:"Amisha",last:"soni"};
let {first:fname,last:last,age=20} = person;
console.log(fname , last , age);
