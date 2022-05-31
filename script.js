// Get the share-img div
let divShare = document.querySelector(".share-img");

// Get the icon-share img
let imgShare = document.querySelector("#icon-share");

// Get the none div
let noneDisplay = document.querySelector("#none");

// Get the social div
let divSocial = document.querySelector(".social")

// Add mouseover event to "divShare"
divShare.onmouseover = () => {
    noneDisplay.style.display = "block";
    imgShare.src = "icon-share1.svg";
    divSocial.style.backgroundColor = "var(--VDGB)";
}

window.onclick = function(e) {
    if (e.target.className !== "social") {
        noneDisplay.style.display = "none";
        imgShare.src = "icon-share.svg";
        divSocial.style.backgroundColor = "var(--LGB)";
    }
}