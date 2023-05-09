// Lucas Bubner, 2023

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("readtime").innerHTML = getReadTime();
    displayContent();
});

// Calculate how long it would take to read the article based on word count
function getReadTime() {
    const allSections = document.querySelectorAll(".text");
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
