//! Closure: It is a function that remembers variables from its outer scope even after the outer function has finished executing. A function with memory. A closure is formed when a function retains access to variables from its lexical scope, even when executed outside that scope.

//? How memory is preserved here: when a closure is formed, js creates a backlink of the function and its variables called [[environment]]


function incr() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count);
    }
    return increment; //? why not increment(), cause it will return the result of the function not the function itself, the increment is returning the function itself, not executing it immediately.
}

let counter = incr(); //? here the counter is storing the increment function itself, which has count variable.
counter();
counter();
counter();
//* Note: each closure formed have their seperate closure memory.
let counter2 = incr();
counter2();
counter2();
counter2();
counter2();
counter2();


function outer() {
  let name = "Kaneki";

  function inner() {
    console.log(name);
  }

  name = "Tokyo Ghoul";
  return inner;
}

const fn = outer();
fn(); // Tokyo Ghoul //? why tokyo ghoul, When a function is created, it secretly carries a reference to the environment around it. Not a copy. A reference. That means it doesn’t freeze the value. It keeps access to the live variable.

//todo: it allows private variables. like the counter function, no one can modify the count directly.

//todo: Closures also allow persistent state. They remember values between function calls without using global variables. This makes code cleaner and safer. No global pollution.

//! Encapsulation: Encapsulation means hiding internal details and exposing only what is necessary.

//? Think of a car. You press the accelerator. The car moves. You don’t manually control fuel injection timing, combustion cycles, or piston synchronization. Those details are hidden. You interact through a simple interface.

//todo: WITHOUT ENCAPSULATION:

let balance = 1000;

function deposit(amount) {
    balance-=amount;
    console.log(`Remaining Balance = ${balance}`);
}

deposit(400); //? until this everything is fine

balance = 200; //* but anyone can do this

deposit(100); //* remaining balance will be 100 instead of 500

//todo: WITH CLOSURES

function withdrawAmount(initialBalance){
    let balance2 = initialBalance;

    return function withdraw(amount) { 
            balance2-=amount;
            console.log(`Remaining Balance = ${balance2}`);
        }
};

//* balance2 = 200;// this will not work here

let withdraw = withdrawAmount(20000);

withdraw(500);
