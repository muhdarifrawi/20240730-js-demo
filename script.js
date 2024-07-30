// document --> the whole webpage
// DOM --> document object model
// DOM manipulation --> to manipulate what 
//                      is in the webpage
// query selector --> one of the many methods
//                      to select the element you 
//                      want to manipualte

// 1. need to be a string
// 2. string selector is similar to how you select CSS
// id --> #
// classes --> .
// elements is just their name
let titleText = document.querySelector("#title").innerText;
let titleHTML = document.querySelector("#title").innerHTML;

console.log(titleText);
console.log(titleHTML);

// selects all that it can find, returns array
let boxes = document.querySelectorAll(".boxes")
// only the first one it encounters
let singleBoxes = document.querySelector(".boxes")

//console.log(boxes);
//console.log(singleBoxes);

document.querySelector("#add-user").addEventListener("click",addUser)

function addUser(){
    let username = document.querySelector("#username").value;

    console.log(username);
}


