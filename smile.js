const smile = document.getElementById("smile")
const frown = document.getElementById("frown")

function toggle() {
    if (window.getComputedStyle(frown).display === "none") {
        frown.style.display = "inline";
        smile.style.display = "none";
    } else {
        smile.style.display = "inline";
        frown.style.display = "none";
        }
}