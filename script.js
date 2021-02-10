var animatedMenu; //animated menu element
var currPos; //current position of menu
var height; //height of menu
var image; //button image element
var buttonOrientation = false; //Orientation of button

/**
 * Monitors scrolling to determine if drop down menu is necesarry or not
 * */
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

/**
 * Calls to animate menu 
 */
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

/**
 * Animates the drop down menu so that it is visible to the user 
 */
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

/**
 * Animates the drop menu upwards
 */
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

