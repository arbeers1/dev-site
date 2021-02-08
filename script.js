var animationInProgress = false;
var menuDown = false;
var yPos = 0;
var element;
var currPos;
var height;


window.onload = function () {
    element = document.getElementById("onScrollMenu");
    currPos = element.offsetTop;
    height = element.offsetTop;
    window.onscroll = function () {
        var newY = window.pageYOffset;
        if (newY < yPos && !animationInProgress) {
            animateVisible();
        } else if (newY > yPos && menuDown) {
            animateHidden();
        }
        animationInProgress = false;
        yPos = newY;
    }
}

function animateVisible() {
    animationInProgress = true;
    var timer = setInterval(function () {
        if (currPos < 0) {
            currPos++;
            element.style.top = currPos + 'px';
            console.log(currPos);
        } else {
            clearInterval(timer);
        }
    }, 20);
    menuDown = true;
}

function animateHidden() {
    var timer = setInterval(function () {
        if (currPos >= height) {
            currPos--;
            element.style.top = currPos + 'px';
            console.log(currPos);
        } else {
            clearInterval(timer);
        }
    }, 7);
    menuDown = false;
}

