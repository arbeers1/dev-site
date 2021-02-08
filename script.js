var animationInProgress = false;
var menuDown = false;
var yPos = 0;
var animatedMenu;
var currPos;
var height;


window.onload = function () {
    animatedMenu = document.getElementById("onScrollMenu");
    currPos = animatedMenu.offsetTop;
    height = animatedMenu.offsetTop;
    window.onscroll = function () {
        
        yPos = newY;
    }
}

function animateVisible() {
    animationInProgress = true;
    menuDown = true;
    var upTimer = setInterval(function () {
        if (currPos < 0) {
            currPos++;
            animatedMenu.style.top = currPos + 'px';
            console.log("down")
        } else {
            clearInterval(upTimer);
        }
    }, 2);
}

function animateHidden() {
    animationInProgress = true;
    menuDown = false;
    var downTimer = setInterval(function () {
        if (currPos > height) {
            currPos--;
            animatedMenu.style.top = currPos + 'px';
            console.log("hiding");
        } else {
            clearInterval(downTimer);
        }
    }, 2);
}

