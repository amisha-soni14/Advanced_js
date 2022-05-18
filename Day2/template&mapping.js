let firstName = "Amisha";
let lastName = "Soni";
let text = `Welcome ${firstName}  ${lastName}`;
console.log(text);

let person =[
    {name:"Amisha",last:"Soni"},
    {name:"Tanisha",last:"Soni"}
];
// let abc=person.map(item => { let container = {};

//     container.name = item.name;
//     container.last = item.last;
//     container.age = item.name.length * 10;

//     //return container;
//     console.log(`Hello ${container.name} your age is ${container.age}`);
// })
// console.log(person[0]);
// console.log(person[1]);

// console.log(abc);

// let updatedArr = person.map((item, index) => {
//     return {name: item.name, id: index};
// });
let updatedArr = person.map((item, index) => {
    return index;
});
console.log(updatedArr);



