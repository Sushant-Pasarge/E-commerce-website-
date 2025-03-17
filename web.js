let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

let main = document.querySelector(".container");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

console.log(card);

let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";

    document.getElementById("blog").style.color= "black";
    document.getElementById("home").style.color="rgb(2, 173, 173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("about").style.color="black";


}

function shops(){
    mainPage.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    card.style.display="block";
    card2.style.display="block";

    document.getElementById("blog").style.color= "black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(2, 173, 173)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("about").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
    
    document.getElementById("blog").style.color= "rgb(2, 173, 173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("about").style.color="black";


}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";
    
    document.getElementById("blog").style.color= "black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("about").style.color="rgb(2, 173, 173)";
    document.getElementById("contact").style.color="black";
}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";
    
    document.getElementById("blog").style.color= "black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="rgb(2, 173, 173)";
}

// cart
function show(img){
    let newImg = document.getElementById("newImg");
    // console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";

    document.querySelector(".cart").style.display="flex";
}

function addCart(){
    alert("Added To Cart");
    // location.reload(); //this will reloads us to a home page when we click on ok btn.
}
function logIn(){
    alert("Signed Up");
    location.reload();
}

function back(){
    alert("Are you Sure!");
    location.reload();
}

// To Add a Switch Mode ..
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

// Check if user already has a preference in localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

// Save the mode in localStorage
if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
} else {
        localStorage.setItem("theme", "light");
        }
});

// Its for a auto sliding effect.
document.addEventListener("DOMContentLoaded", function (){  // script runs only after a webpage is fully loaded. 
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".review-slider");
    let index = 0;

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        slider.style.transform =`translateY(-${index * 100}%)`;
    }

    setInterval(nextSlide, 2000); // Auto-slide every 3 seconds
});

// document.addEventListener("DOMContentLoaded", function () {
//     let topbuttonBtn = document.querySelector(".topbutton");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             topbuttonBtn.style.display = "block"; // Show button
//         } else {
//             topbuttonBtn.style.display = "none"; // Hide button
//         }
//     });

//     topbuttonBtn.addEventListener("click", function () {
//         window.topbutton({ top: 0, behavior: "smooth" });
//     });
// });