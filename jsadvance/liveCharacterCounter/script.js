let inputdiv = document.querySelector("#inputdiv textarea");
let counter = document.querySelector("#counterOut");

console.log(inputdiv, counter.value);

inputdiv.addEventListener("input", (content) => {
    counter.value = content.target.value.length;
    // let length = (content.target.value).length;
    
    // if(length <= 0 || counter.value === "") {
    //     counter.value = 0;
    // }

    // else if(length >= 1  counter.value === " ") {
    //    counter.value = length;
    // }
})