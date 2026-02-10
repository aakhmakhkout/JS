//? The 3 musketeres/pillers of Web Development (front-end).
//* HTML: Structure -> what and where the content should be on website. eg a new empty house

//* CSS: Style -> styling the page, text, allignment etc, eg which color should be the furniture, walls, size of them, allignment etc

//* JS: Logic -> what should happen if a button is clicked or mouse is hovered etc eg. the lamp should turn on when the switch is clicked, the fan should turn on or off when the switch is clicked.

//! <style> tag connects html with CSS. 
//! <script> tag connects HTML with js.

console.log("hello world");

//? WINDOW OBJECT: The window object represents an open window in a browser. It is browser's Object (not js's) and is automatically created by browser.

//? It is a global object with lots of properties and methods.

window.console.log("hello world2");
// window.alert("kaneki")
//* console.dir -> object -> properties and methods

//! DOM -> Document Object Model. Document = entire webpage, Object = everthing becomes a js Object, Model = a structured representation (a map).  DOM is Dynamic and HTML is static

//? The webpage is just a text(string of characters) for the browser, so to handle it properly the browser builds a tree called DOM.

//*                 WINDOW                  --|
//*                   |                       |
//*                document                 --|
//*                   |                       |
//*                  HTML                   --|
//*             |          |                  |--------nodes
//*          head          body             --|
//*           |                               |
//* meta-meta-title-link   div-script       --|
//*                         |                 |
//*                     img-h1-p-div        --|


//? When a web page is loaded, the browser creates  a document object model of the page. An object based map of HTML inside memory, not the actual page but a model of it. like a 3d blueprint of the building not the building itself.

//todo: eg, if we write <h1> hello <h1>
//todo:                 <p> i am learning DOM <p>

//todo: the browser turns it into:
//* document :
        //* h1 -> "hello"
        //* p -> "i am learning DOM"

//? therefore each tag becomes an object with properties and functions.

//* we can access our HTML in js via this location: window -> document : document = html converted into objects -> model -> HTML -> DOM

//? The browser loads HTML → turns it into a live object-tree called the DOM → puts that tree inside document → places document inside window → and JavaScript modifies the DOM, not the original HTML.

// console.dir(window);
// console.dir(window.document);
// console.dir(document);

// console.dir(document.body);
// console.log(document.body);

// console.dir(document.body);
// console.log(document.head);

// console.dir(document.body.childNodes[1]);

document.body.style.background = "yellow";
// document.body.childNodes[1].innerText = "This text is changed via js";


//! DOM MANIPULATION: how to make changes in DOM. {note: we should write script tag in the last of the body tag in html, if we use it in head tag then write console.dir(document.body), it will give us null as output}....

//* To make changes in DOM, we ist need to select the elements/ or get a reference of that object, which we can do by using:

//? 1: ID -> a unique label given to any HTML tag.

let heading = document.getElementById("heading"); //* Returns an HTML element. If the id is not present then we will get null as output.
console.log(heading);

//? 2: Class -> a common name given to multiple tags/elements in html. {categories}

let topic = document.getElementsByClassName("color-pur"); //* Returns HTML collection of elements with the same class name. If the class is not present then we will get HTML collection with 0 length (empty).
console.log(topic);

//? 3: Tag Name -> get elements by tag name (like h1, p, div, button).

let sub_topics = document.getElementsByTagName("h4"); //* Returns HTML collection of tag names.
console.log(sub_topics);

//? 4: Query Selector -> uses CSS selector logic,  a step ahead compared to others, in which we pass id, class, tag and it automatically detects which element/elements we are looking for by using css patterns.

let isttopic = document.querySelector("h4"); //* Returns first element/match.
console.log(isttopic);

let alltopics = document.querySelectorAll("h4"); //* Returns Node list of the matching elements. {node = elements in DOM}.
console.log(alltopics);

let ourHeading = document.querySelector("#heading"); //* use # for ID.
console.log(ourHeading);

let ourClassList = document.querySelectorAll(".color-pur"); //* use . for class.
console.log(ourClassList);

//! DOM parent, children, firstchildren, lastchildren -> Navigation.

//? 1: Parent: A Parent node is the element that directly contains another element.
//todo:   <div> <h1> hello world </h1> </div> --> div is the Parent node here.

let parentnode = document.querySelector("#heading-1").parentElement;
console.log(parentnode);


//? 2: Child node: children nodes means all the elements inside the parent directly. children gives only elements, not text, not comments
//todo:   <div> <h1> hello world </h1>, <h2>welcome</h2>, <p>abcdefghijklmnopqrstuvwxyz</p> </div>  --> div is the Parent node here, while h1, h2, and p are the child nodes.

let childnodes = document.querySelector("#box-1").children;
console.log(childnodes);

//? 3: First element child: The very first child element inside a parent. This ignores spaces, line breaks, comments
//todo:   <div> <h1> hello world </h1>, <h2>welcome</h2>, <p>abcdefghijklmnopqrstuvwxyz</p> </div>  --> div is the Parent node here, while h1, h2, and p are the child nodes. ANd h1 is the the ist child.

let istchild = document.querySelector("div").firstElementChild;
console.log(istchild);

//* NOTE: if we use firstChild/lastChild instead of firstElementChild/lastElementChild, then the we can get text or comment as first child or last child if any comment or spaces or a line break is before an tag/element, because firstChild/lastChild also includes the spaces before and after the tags, while firstElementChild only cares about the tags. The empty spaces and next lines in HTML code are considered Text nodes in DOM, and the comments are considered comment nodes in the DOM.
let istchild2 = document.querySelector("div").firstChild;
console.log(istchild2);

//? 4: Last Element Child: The last child inside a parent node. This ignores spaces, line breaks, comments
//todo:   <div> <h1> hello world </h1>, <h2>welcome</h2>, <p>abcdefghijklmnopqrstuvwxyz</p> </div>  --> div is the Parent node here, while h1, h2, and p are the child nodes. ANd h1 is the the ist child. while p is the last child.

let lastchild = document.querySelector("div").lastElementChild;
console.log(lastchild);




//! ELEMENT NODES, TEXT NODES, COMMENT NODES.

//? 1: Element Nodes: The Actual HTML tags. eg, div, p, h1, h2 ... h6, button

//? 2: Text Nodes: The Actual Written Words. eg <p>hello world</p> --> here p is the element node and hello world is the text node. Also the spaces, line breaks can become text nodes in the DOM.

//? 3: Comment Nodes: Extra information not meant to be shown on the website, only for the devs and it is also ignored by browser. like <!-- this is a comment -->


//! ELEMENT PROPERTIES: we can GET the value, SET/change or update the value of the element.

//? 1: tagName: returns tag for element nodes. It never shows attributes, classes, or content—just the raw HTML tag type.

console.log(lastchild.tagName);
console.log(istchild.tagName);
console.log(parentnode.tagName);

//? 2: innerText: returns the text content of the element and all its children. This one cares about what the user actually sees, after CSS hides or shows things. Only visible text, No HTML tags, Respecting CSS like display: none or visibility: hidden, If the text is hidden, innerText acts like it doesn’t exist.

let ourDiv = document.querySelector("#box-1");
console.log(ourDiv);

console.log(ourDiv.innerText);

// ourDiv.innerText = "hello";

 
//? 3: innerHTML: returns the plain text / full markup or HTML contents in the element. This includes tags, text, comments, child structures. like a source code. It doesn't respect the CSS.

console.log(ourDiv.innerHTML);
// ourDiv.innerHTML = "<h6> you can't see me </h6>";
// console.log(ourDiv.innerHTML);

//? 4: textContent: returns textual content even for hidden elements. it gives us, all text nodes, hidden or collapsed text, still no html tags, doesn't care about CSS

console.log(ourDiv.textContent);


//! ATTRIBUTES: additional information inside an html tag, eg id, class, style, src (source), ref (reference) etc.

//? 1 (a): Get Attribute Value: How to Access them or get the attributes = getAttribute(attr_name) -> to get the attribute value

let ourIdVal = document.querySelector("h1");
console.log(ourIdVal);

console.log(ourIdVal.getAttribute("id"));

let ourClassval = document.querySelector("h3");
console.log(ourClassval);

console.log(ourClassval.getAttribute("class"));

 
//? 1 (b): Set Attribute Value: How to modify or change its value = setAttribute(attr_name, value) -> to set the attribute value

// let ourTargetAttr2 = document.querySelector("h4");
// console.log(ourTargetAttr2);
// ourTargetAttr2.setAttribute("class", "topics");
// console.log(ourTargetAttr2.getAttribute("class"));

let ourTargetAttr2 = document.querySelectorAll("h4");
for (values of ourTargetAttr2) {
        values.setAttribute("class", "topics");
};


//todo: setting new attribute and its value
let ourTargetAttr = document.querySelectorAll("h4");
console.log(ourTargetAttr);

ourTargetAttr[5].setAttribute("style", "color:red");

console.log(ourTargetAttr[5].getAttribute("style"));

//? 2 : style: how to access it = node.style.
let ourDiv2 = document.querySelector(".topic-box");
console.log(ourDiv2);
console.log(ourDiv2.style); //* an object with inline styling... (highest priority).
ourDiv2.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"; //* write css attribute names in camel case.
ourDiv2.style.fontSize = "20px";

//! Insert Elements: adding new elements like <div>, <p>, <ul>, <table> etc

//? STEP 1: Ist we need to create a new element :-

let newELm = document.createElement("div");
newELm.setAttribute("class", "new-div");

let newButton1 = document.createElement("button");
newButton1.innerText = "append";

let newButton2 = document.createElement("button");
newButton2.innerText = "prepend";

let newButton3 = document.createElement("button");
newButton3.innerText = "before";

let newButton4 = document.createElement("button");
newButton4.innerText = "after";


//? STEP 2: Adding the element in DOM tree -> 4 Methods.
//* a: node.append(el) -> adds at the end of node (inside) {it can add nodes, plain text}

ourDiv2.append(newButton1);

//* b: node.prepend(el) -> adds at the start of node(inside).

ourDiv2.prepend(newButton2);

//* c: node.before(el) -> adds before the node (outside).

ourDiv2.before(newButton3);
newButton3.style.marginTop = "10px";

//* d: node.after(el) -> adds after the node (outside).

ourDiv2.after(newButton4);
newButton4.style.marginTop = "10px";

//? Removing node :- node.remove();

newButton4.remove();


//! AppendChild(): can only add nodes (only elements, not plain text).

//* eg node.appendChild(el) -> append the el as the last child of the node same as append(el), but the difference is appen(el) accepts element and text, and can add multiple things at once. But appendChild(el) accepts only elements, only one at a time.

//? node.append(el) example.

let textBox1 = document.createElement("h3");
textBox1.innerText = "This is node.append(el) example";
textBox1.style.color = "red";

let ele_a = document.createElement("p");
ele_a.innerText = "hello i am element 1";

let ele_b = document.createElement("p");
ele_b.innerText = "hello i am element 2";

let ele_c = document.createElement("p");
ele_c.innerText = "hello i am element 3";

let ourappendDiv = document.querySelector(".appendChildDiv");

ourappendDiv.append(textBox1, ele_a, ele_b, ele_c); //* Multiple elements added at once.
ourappendDiv.append("hello this is appended text");


//? node.appendChild(el) example.

let textBox2 = document.createElement("h3");
textBox2.innerText = "This is appenChild(el) example";
textBox2.style.color = "yellow";

let ele_d = document.createElement("p");
ele_d.innerText = "hello i am element 4";

let ele_e = document.createElement("p");
ele_e.innerText = "hello i am element 5";

let ele_f = document.createElement("p");
ele_f.innerText = "hello i am element 6";


ourappendDiv.appendChild(textBox2, ele_d, ele_e, ele_f);  //* this will only add the ist element and ignore others.

//* working way will be like this.

ourappendDiv.appendChild(textBox2);
ourappendDiv.appendChild(ele_d);
ourappendDiv.appendChild(ele_e);
ourappendDiv.appendChild(ele_f);

//* ourappendDiv.appendChild("hello world"); this will not work.


//! ClassList : It’s a built-in object that tells us, which classes the element currently has and lets you change them easily

//? we can do following things with classList;

//* 1: add() : we can add an class to an element without overwritting any other class attached with the element. we can also add multiple classes at once

let ourparaDiv = document.querySelector(".class-1");

ourparaDiv.classList.add("class-2", "class-3", "class-4");

//* remove(): remove any selected class. we can also remove multiple classes at once.

ourparaDiv.classList.remove("class-1", "class-3");

//* toggle(): it checks if class is there or not, if yes then remove it, if no then add it. and it only works with one class.

ourparaDiv.classList.toggle("class-2");
ourparaDiv.classList.toggle("class-4");

ourparaDiv.classList.toggle("class-1");
ourparaDiv.classList.toggle("class-2");
ourparaDiv.classList.toggle("class-3");
ourparaDiv.classList.toggle("class-4");

//* contains(): check if element has this class, yes or no -> true or false

console.log(ourparaDiv.classList.contains("class-5")); // false.








