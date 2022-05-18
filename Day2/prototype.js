class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getdata(){
        console.log(`Hello ${this.name} your age is ${this.age}`);
    }
};

let abc= new Person("Amisha",20);
abc.getdata();

console.log(Person.prototype);

//making prototype property
Person.prototype.gender="Female";
console.log(Person.prototype);
console.log(Person.prototype.gender);

//making prototype method
Person.prototype.showdata=function(){
    console.log("Hello");
}

abc.showdata();

console.log(Person.prototype);
