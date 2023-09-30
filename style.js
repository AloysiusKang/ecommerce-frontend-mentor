const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

console.log(hamburger);

hamburger.addEventListener("click", () => {
    let attribute = navList.getAttribute("data-hidden");
    if(attribute == "true"){
        navList.setAttribute("data-hidden", "false");
    }
    else{
        navList.setAttribute("data-hidden", "true");
    }
})