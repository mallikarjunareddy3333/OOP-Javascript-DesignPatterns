function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;

    // this.login = function(){
    //     console.log(this.email, 'has logged in');
    // }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = "super user";
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => user.email != u.email);
};

var userOne = new User("arjun@gmail.com", "Arjun");
var userTwo = new User("priya@gmail.com", "Priya");
var admin = new Admin("admin@gmail.com", "Administrator");

var users = [userOne, userTwo, admin];

console.log(admin);

admin.deleteUser(users[1]);