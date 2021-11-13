const navSlide = ()=>{
    const navBar = document.getElementsByClassName("navBar");
    const burger = document.getElementsByClassName("burger");
    const line2 = document.getElementById("line2");
    const line1 = document.getElementById("line1");
    const line3 = document.getElementById("line3");

    for (let i = 0; i < burger.length; i++) {
        let num =0;
        burger[i].addEventListener("click",()=>{
            line2.style.opacity = "0";
            line3.style.transform = "rotate(-45deg)";
            line1.style.transform = "rotate(45deg)";
            num++;
            if (num%2 == 0) {
                line2.style.opacity = "1";
                line1.style.transform = "rotate(0deg)";
                line3.style.transform = "rotate(0deg)";
            }

            for (let j = 0; j < navBar.length; j++) {
                navBar[j].classList.toggle ("navBar-active");
            }
        })
    }
}
navSlide();





////////////////////////////////////////////////////////////////////////
let containerSlideShow = document.getElementById("containerSlideShow");
let slidePic = document.getElementById("slidePic");
let options = [{image:"pictures/venom.jpg"},{image:"pictures/TheTomorrowWar.png"},{image:"pictures/joker.jpg"},{image:"pictures/deadpool.jpg"},
{image:"pictures/spider-man-into-the-spider-verse-gwen-stacy-marvel-comic.jpg"},{image:"pictures/captain-america.jpg"},{image:"pictures/rick-and-morty.jpg"},{image:"pictures/john-wick.jpg"}]
let counter = 0;

slidePic.src = options[counter].image;
function slideShow() {
    setInterval(() => {
        if (counter<options.length) {
            slidePic.src = options[counter].image;
            counter++
        }
        if (counter==options.length) {
            counter = 0
        }
    }, 3000);
}
slideShow();


