function Person(name) {
    this.name = name;
};

function Dog(name) {
    this.name = name;
}

var speaker = {
    speak: function() {
        return this.name + " is speaking.";
    }
};

var mover = {
    walk: function() {
        return this.name + " is walking.";
    },
    run: function() {
        return this.name + " is running";
    }
}

var arithmatic = {
    add(){
        return this.name + " is adding numbers together";
    },
    multiply() {
        return this.name + " is multiplying numbers together";
    }
}

// copy the methods
Object.assign(Person.prototype, speaker);
Object.assign(Person.prototype, mover);
Object.assign(Person.prototype, arithmatic);

Object.assign(Dog.prototype, speaker);
Object.assign(Dog.prototype, mover);

var arjun = new Person("arjun");
var fido = new Dog("fido");

console.log(arjun.walk());
console.log(arjun.run());

console.log(fido.speak());
console.log(fido.run());

console.log(arjun.add());
