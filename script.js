// Lucas Bubner, 2023

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("readtime").innerHTML = getReadTime();
    const img = new Image();
    img.onload = () => {
        displayContent();
    };
    img.src = "./assets/bgblur.png";
});

// Calculate how long it would take to read the article based on word count
function getReadTime() {
    const allSections = document.querySelectorAll(".text, .caption");
    let wordCount = 0;
    for (let i = 0; i < allSections.length; i++) {
        wordCount += allSections[i].innerText.split(" ").length;
    }
    return Math.round(wordCount / 200) + " min read";
}

// Fade in content after page loads
function displayContent() {
    const allSections = document.querySelectorAll("html");
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].style.opacity = "1";
    }
}

// Sticky header implementation on scroll
let capture = null;
window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    const sep = document.getElementById("separator");
    if (window.scrollY > header.offsetTop) {
        if (!header.classList.contains("sticky")) {
            capture = window.scrollY;
            header.classList.add("sticky");
            sep.style.display = "block";
        } else if (window.scrollY < capture) {
            header.classList.remove("sticky");
            sep.style.display = "none";
            capture = null;
        }
    }
});
