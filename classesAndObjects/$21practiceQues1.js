//! Question 1.

let loginPass = "samepassforall";


class user {
    constructor(usrname, email) {
        this.usrname = usrname;
        this.email = email;
    }

    viewData() {
        console.log(`Username = ${this.usrname}\nEmail = ${this.email}\nPassword = ${loginPass}`);
    }
}

let user1 = new user("kaneki", "kanekisan@gmail.com");
let user2 = new user("yoichi", "isagiyoichi@gmail.com");
let user3 = new user("bachira", "bachirasan@gmail.com");
let user4 = new user("saturo", "gojosaturo@gmail.com");

console.log(user1);
console.log(user2.usrname);
console.log(user3.email);

user1.viewData();
user2.viewData();
user3.viewData();

//! Question 2.

class admin extends user {
    constructor(usrname, email){
        super(usrname, email);
    }

    editData() {
        loginPass = "passIsModified";
        super.viewData();
    }
}

let usradmin = new admin("admin", "adminemail@gmail.com");

console.log(usradmin);

usradmin.viewData();
console.log(loginPass);

usradmin.editData();
console.log(loginPass);

