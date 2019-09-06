// var obj = new Object();
var obj = {
    firstName: "Arjun",
    lastName: "Reddy"
};

obj.firstName = "Arjun";
obj["lastName"] = "Reddy";

var firstName = obj["firstName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {
    value: "India"
});

Object.defineProperties(obj, {
    email: {
        value: "arjun@gmail.com"
    },
    twitter: {
        value: "malli_k_arjun"
    }
});

console.log(Object.getOwnPropertyNames(obj));
console.log(obj);
