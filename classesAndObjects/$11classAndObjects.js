//! Classes and Objects: 
//? Objects : A js objects is an entity having state and behavior (properties and methods). or anything with properties



const students = {
    //* Properties
    stdName : "Numaan Nabi",        
    rollNo : 19,
    course : "BCA",
    cgpa : 7.03,

    //*Methods
    printDetails : function() {
        console.log(`Student Name = ${this.stdName}`);
    } 
};

console.log(students);1
students.printDetails()


//! prototype : Js object have a special property called prototype. Prototype in JavaScript is a shared object that other objects can use when they don’t have something themselves. eg student.toString() etc. user defined objects inherits or borrows some general methods from the prototype.


const courses = {
    course1 : "BBA",
    course2 : "BCA",
    course3 : "Nursing",
    course4 : "Geology"
}

const teacher = {
    Name : "yoichi",
}

//? we can set prototype using __proto__

teacher.__proto__ = courses; //* reference to courses object.

console.log(teacher.course2);

//* Prototype in JavaScript is a shared object that other objects can use when they don’t have something themselves.

teacher2 = {
    Name : "Rin",
    course1 : "English Literature",
}

teacher2.__proto__ = courses;

console.log(teacher2.course1); //* The teacher2 used its own method rather than inheriting it from courses object.


//! Classes : It is a blueprint to create multiple similar objects. A program-code template for creating objects.
//? Those objects will have some state (variable) and some behavior(functions/methods) inside it.

//? Example : Class = Human (blueprint), blueprint = body, skin, head, eyes, ears, arms, etc, || and object = a perticular person like name = kaneki, age 32, skin color brown etc, the class is not the body itself but a plan what it contains and how will it look. 

class Human {
    //* Properties/state
    constructor(name, age, status, occupation, gender, walking, sleeping, working) { //* constructor = It is a special function that runs automatically when an object is created, it sets the initial value during the object creation.

        this.name = name;
        this.age = age;
        this.status = status;
        this.occupation = occupation;
        this.gender = gender;
        this.walking = walking;
        this.sleeping = sleeping;
        this.working = working;
    }
        //* Methods/behavior
        isWalking() {
             console.log(this.walking);
        }
        
        isSleeping() {
            console.log(this.sleeping);
        }
        
        isWorking() {
            console.log(this.working);
        }
    
    }

  

let person1 = new Human("kaneki", 22, "alive", "student", "Male", true, false, false); //* new finds constructor
let person2 = new Human("touka", 18, "alive", "student", "Female", false, true, false);
let person3 = new Human("yoichi", 19, "alive", "sports", "Male", false, false, true);
let person4 = new Human("Mikasa", 60, "Dead", "soilder", "Female", false, false, false);

console.log(person1);
person1.isWorking();
person2.isWorking();
person3.isWorking();
person1.isSleeping();
person4.isWalking();
person2.isSleeping();


//? Example 2.

class car  {
    constructor(color, brand, price, mileage) {
        this.carcolor = color;
        this.carbrand = brand;
        this.carprice = price;
        this.carmileage = mileage;
        this.status = "stopped";
    }

    startCar() {
        if(this.status === "stopped" || this.status === "parked") {
            this.status = "running";
            console.log(`car started : status (${this.status})`);
        }
    }

    stopCar() {
        if(this.status === "running" || this.status === "accelerating") {
            this.status = "stopped";
            console.log(`car stopped : status (${this.status})`);
        }
        else {
            console.log("car is already stopped")
        }
    }

    accelCar() {
        if(this.status === "running") {
            this.status = "accelerating"
            console.log(`car accelarating : status (${this.status})`);
        }
        else {
            console.log("start the car first!");
        }
    }
    parkCar() {
        if(this.status === "running" || this.status === "accelerating") {
            console.log("stop the car first");
        }
        else {
            this.status = "parked";
            console.log(`car parked : status (${this.status})`);
        }
    }

}

let car1 = new car("red", "BMW", 30000, 6);
let car2 = new car("blue", "lamborghini", 50000, 9);
let car3 = new car("white", "Farrari", 20000, 12);
let car4 = new car("yellow", "Toyota", 10000, 23);

console.log(car1);
car1.startCar();

console.log(car2);
car2.stopCar();

console.log(car3);
car3.startCar();
car3.accelCar();
car3.stopCar();
car3.parkCar();

console.log(car4);
car4.startCar();
car4.parkCar();

//! Inheritance in Js : inheritance is passing down properties and methods from parent class to child class...this works through prototype chain...

//? we use extend keyword to connect objects, and it sets up a prototype chain for us...


class parent {
    constructor() {
        this.ptName = "kaneki";
    }

    sayHello() {
        console.log("hello this is parent class");
    }

    sayBye() {
        console.log("goodbye");
    }
}

class child extends parent {
    // constructor(childName) {
    //     this.chName = childName;
    // }

    printName() {
        console.log(`My name is ${this.ptName}`);
    }

    //? This will override the parent method (method overriding)
    //* sayHello() {
    //*     console.log("hello i am child class");
    //* }

    sayHi() {
        console.log("Hello this is child class");
    }
}

class child2 extends parent {
    sayHello() {
        console.log("hello i am child class");
    }

    sayHi() {
        console.log("Hello this is child class");
    }
}

let p1 = new parent();
let ch1 = new child();
let ch2 = new child2();

ch1.sayHello();
ch1.printName();
ch1.sayBye();
ch1.sayHi();

ch2.sayHello();
ch2.sayBye();


//! Super keyword: The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. 

//* (child classes = derived classes) if we want to call constructor of derived (child) class, then we must call the parent class constructor first using super keyword...

class subjects {
    constructor(sub1, sub2, sub3, sub4, sub5) {
        this.sb1 = sub1;
        this.sb2 = sub2;
        this.sb3 = sub3;
        this.sb4 = sub4;
        this.sb5 = sub5;
    }

    whichClass1() {
        console.log("this is subject class (parent)");
    }
}

class teachers extends subjects {
    constructor(teacherName, teacherSalary, sub1, sub2, sub3, sub4, sub5) {
        super(sub1, sub2, sub3, sub4, sub5); //* to invoke parent class constructor
        this.tName = teacherName;
        this.tSalary = teacherSalary;
    }

    whichClass2() {
        super.whichClass1(); //* to invoke parent class methods
        console.log("this is teachers class (child1)");
        super.whichClass1();
    }
}

class students2 extends subjects {
    constructor(stdName, roll_no, sub1, sub2, sub3, sub4, sub5) {
        super(sub1, sub2, sub3, sub4, sub5);
        this.stdName = stdName;
        this.roll_no = roll_no;
    }

    whichClass3() {
        console.log("this is students class (child2)");
    }
}

let sub1 = new subjects("english", "math", "science", "urdu", "history");

let teac1 = new teachers("kaneki", 30000, "Math", "science");
let teac2 = new teachers("bachira", 20000, "english", "urdu");
let teac3 = new teachers("saturo", 40000, "history");

let st1 = new students2("ken", 30, "math", "science", "history");
let st2 = new students2("yoichi", 17, "history", "urdu", "english");
let st3 = new students2("rin", 18, "urdu", "science");
let st4 = new students2("touka", 31, "science", "math", "english", "urdu", "history");


console.log(sub1);
console.log(teac1);
console.log(teac2);
console.log(teac3);

console.log(st1);
console.log(st2);
console.log(st3); 
console.log(st4);

teac1.whichClass2();
st1.whichClass3();

//! Error handling in js:

let a = 10;
let b = 122;

console.log(a+b);
console.log(a-b);
//* console.log(a*c); || there is an error, and if we don't handle it, it will break the remaining code.
try {
    console.log(a*c);
}
catch (ourError) { //* the ourError object will store the error and console.log will print it without breaking the whole code.
    console.log(ourError);
}
console.log(a/b);
console.log(a%b);
console.log(a^b);