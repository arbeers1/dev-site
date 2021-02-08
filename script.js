var yPos = 0;
var animationInProgress = false;

window.onload = function () {
    window.onscroll = function () {
        var newY = window.pageYOffset;
        if (newY < yPos) {
            animate();
        }
        yPos = newY;
    }
}

function animate() {
    console.log("animate");
}
