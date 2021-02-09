var animatedMenu;
var currPos;
var height;


window.onload = function () {
    animatedMenu = document.getElementById("onScrollMenu");
    currPos = animatedMenu.offsetTop;
    height = animatedMenu.offsetTop;
    window.onscroll = function () {
        var yPos = window.pageYOffset;
        if (yPos > height * -1) {
            document.getElementById("menuButton").style.visibility = "visible";
        } else {
            document.getElementById("menuButton").style.visibility = "hidden";
        }
    }
}

function animateVisible() {
    animationInProgress = true;
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

