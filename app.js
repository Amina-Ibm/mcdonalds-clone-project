function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}


// JavaScript to hide overlay when close button is clicked
document.getElementById('closeOverlay').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
});



const bars = document.querySelector(".bars");
const nav_links = document.querySelector(".nav-links");
bars.addEventListener("click" , toggle);


function toggle(){
    nav_links.classList.toggle("translate-0");
}



const anchorTag = document.querySelectorAll(".nav-links ul li a");

anchorTag.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

