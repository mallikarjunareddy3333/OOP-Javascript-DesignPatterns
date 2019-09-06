let userOne = {
    email: "arjun@gmail.com",
    name: 'Arjun',
    login(){
        console.log(this.email, " has logged in");
    },
    logout(){
        console.log(this.email, " has logged out");
    }
};

let userTwo = {
    email: "priya@gmail.com",
    name: 'Priya',
    login(){
        console.log(this.email, " has logged in");
    },
    logout(){
        console.log(this.email, " has logged out");
    }
};

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, " has logged in");
        return this;
    }

    logout(){
        console.log(this.email, " has logged out");
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => u.email != user.email);
    }
}

var userOne = new User("arjun@gmail.com", "Arjun");
var userTwo = new User("priya@gmail.com", "Priya");
var admin = new Admin('admin@gmail.com', "Administrator");

var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(userTwo);

userOne.login().updateScore().updateScore().logout();

admin.deleteUser(userOne);

console.log(users);


