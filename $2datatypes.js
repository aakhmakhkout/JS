//? types of data = string, boolean, number, undefined, null, bigInt, symbol
//! primitive data-type (7): fixed data-types; string, number, Boolean, Undefined, Null, BigInt, symbol ...
//! Non-primitive data-types: object, classes ...

//todo:primitive data-types

//* Number
let age = 24;
console.log(age);

let salary = 3500.0;
console.log(salary);

//* string
let firstName = "numaan";
console.log(firstName);

let lastName = "nabi";
console.log(lastName);

//* boolean (true/false)
let isliked = true;
console.log(isliked);

let isFollowing = false;
console.log(isFollowing);

//* undefined
let hisName;
console.log(hisName);

//* null
let zero = null;
console.log(zero);

//* bigInt (big intergers)
let BIGINT = BigInt(1232312);
console.log(BIGINT);

//* symbol
let sym = Symbol("hello >_< ");
console.log(sym);

//todo: non-primitive data-types;
//* object = collection of values(different) (key:value) {const obj --> key --> upadted}

const students = {
  firstName: "noumaan",
  lastName: "nabi",
  age: 20,
  course: "BCA",
  isPass: true,
  cgpa: 7.5,
};

console.log(students);

//* perticular key/value

console.log(students["firstName"]);
//! OR
console.log(students.lastName);

//* assigning new value in object

students["age"] = students["age"] + 1;
console.log(students.age);

//* practice questions

const product = {
  proName: "Parker Jotter Standard CT Ball Pen",
  color: "black",
  rating: 7002,
  isDealOfTheDay: true,
  MRP: 285.0,
  offer: "5% off",
  offerPrice: 270.0,
};

console.log(product);

const profile = {
  username: "@aakh_makh_kout",
  posts: 12,
  followers: 222,
  following: 24,
  bio: "xyz | abc ...",
  isfollowing: true,
};

console.log(profile);
