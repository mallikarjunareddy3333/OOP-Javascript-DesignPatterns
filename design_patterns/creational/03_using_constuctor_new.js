function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.sayName = function(){
    //     return "My name is " + this.firstName + " " + this.lastName;
    // };
}

Person.prototype.sayName = function(){
    return "My name is " + this.firstName + " " + this.lastName;
};

var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

var isPerson = johnDoe instanceof Person;
var isSame = johnDoe.sayName === janeDoe.sayName;

console.log(isPerson);
console.log(isSame);