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
        var newY = window.pageYOffset;
        if (newY < yPos && !animationInProgress && !menuDown) {
            animateVisible();
        } else if (newY > yPos && !animationInProgress && menuDown) {
            animateHidden();
        }
        animationInProgress = false;
        yPos = newY;
    }
}

function animateVisible() {
    animationInProgress = true;
    menuDown = true;
    var timer = setInterval(function () {
        if (currPos < 0) {
            currPos++;
            animatedMenu.style.top = currPos + 'px';
        } else {
            clearInterval(timer);
        }
    }, 2);
}

function animateHidden() {
    animationInProgress = true;
    menuDown = false;
    var timer = setInterval(function () {
        if (currPos >= height) {
            currPos--;
            animatedMenu.style.top = currPos + 'px';
            console.log(currPos);
        } else {
            clearInterval(timer);
        }
    }, 2);
}

