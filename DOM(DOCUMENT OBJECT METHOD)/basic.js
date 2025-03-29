
// // 04-03-2025

// console.dir(document.body);

// console.log(window);


// access through id
let header = document.getElementById("heading")
console.log(header.innerText);

// access through class name
let para = document.getElementsByClassName("paragrafe")
console.log(para[0].innerText);

// access through tag name 
let btn = document.getElementsByTagName("button")
console.log(btn[0].innerText);

// access by query selecter
let head = document.querySelector("#model")
console.log(head.innerText);


// 05-03-2025


// access by query select all
let ok= document.querySelectorAll(".ok")
console.dir(ok);

// changeing content
document.getElementById("element").innerText = "hii developers";

// changeing html
document.getElementById("para").innerHTML="<h1>vaidik</h1>";

// changeing attributes
document.getElementById("my img").src = "https://static.freeimages.com/images/home/blurbs/free.webp";
document.getElementById("link").href = "https://www.instagram.com"

// changeing css style 
document.getElementById("p").style.color="red"
document.getElementById("p").style.fontSize="100px"
document.getElementById("p").style.backgroundColor="pink"


// 06-03-2025


let elements = document.querySelectorAll(".heading")
elements.forEach(elements =>{
 console.log(elements.innerText);
})

// ENENT handling

// add event handling

document.getElementById("btn").addEventListener("click",function(){
    console.log("butten Clicked");
    alert("button clicked")
})

// remove event handling
document.getElementById("btn").removeEventListener("click",function(){
    console.log("butten Clicked");
    alert("button clicked")
})

// 07-03-2025


let element=document.querySelectorAll(".para")
element.forEach(element=>{
console.log(element.innerText);
})


// create a new element 


let paragraph = document.createElement("p")
paragraph.innerText="thisis a new paragraph!"
document.body.appendChild(paragraph)


let button=document.createElement("button")
button.innerText="click me!"
document.body.appendChild(button)

let paragraph1 = document.createElement("p")
paragraph1.innerText="wellcome to my profile!"
document.body.appendChild(paragraph1)


// Remove any element

document.getElementById("head").remove()

// Traversing on dom


let parent=document.getElementById("child").parentNode
console.log(parent);

let children=document.getElementById("parent").children
console.log(children);

let prev = document.getElementById("sibling").previousElementSibling
console.log(prev);

let next = document.getElementById("sibling").nextElementSibling
console.log(next);

// 08-03-2025

  