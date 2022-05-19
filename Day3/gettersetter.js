//  Getter/Setter methods
class Person{
  constructor(name,age){
      this.name=name;
      this.age=age;
  }
  get getdata(){
     console.log("Hello");
     return [this.name , this.age];
  }
  set changename(newname){
      this.name = newname;

  }
};

let person =  new Person("amisha", 20);
console.log(person);
let x = person.getdata;
console.log(x);

person.changename = "Sakshi";
console.log(person.name);
console.log(person.age);
