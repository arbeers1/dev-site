var animatedMenu;
var currPos;
var height;
var image;
var buttonOrientation = false;

window.onload = function () {
    image = document.getElementById("menuButton");
    animatedMenu = document.getElementById("onScrollMenu");
    currPos = animatedMenu.offsetTop;
    height = animatedMenu.offsetTop;
    window.onscroll = function () {
        var yPos = window.pageYOffset;
        if (yPos > height * -1) {
            image.style.visibility = "visible";
        } else {
            image.style.visibility = "hidden";
            buttonOrientation = true;
            animateMenu();
        }
    }
}
function animateMenu() {
    if (!buttonOrientation) {
        image.src = "res/up.png";
        buttonOrientation = !buttonOrientation;
        animateVisible();
    } else {
        image.src = "res/down.png";
        buttonOrientation = !buttonOrientation;
        animateHidden();
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

