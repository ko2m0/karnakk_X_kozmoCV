/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("myBtn").style.WebkitAnimation = "mynewmove 0.3s 1 forwards";
    document.getElementById("myBtn").style.animation = "mynewmove 0.3s 1 forwards";
    document.getElementById("closebtn").style.WebkitAnimation = "upmove 0.3s 1 forwards";
    document.getElementById("closebtn").style.animation = "upmove 0.3s 1 forwards";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("myBtn").style.WebkitAnimation = "upmove 0.3s 1 forwards";
    document.getElementById("myBtn").style.animation = "upmove 0.3s 1 forwards";
    document.getElementById("closebtn").style.WebkitAnimation = "mynewmove 0.3s 1 forwards";
    document.getElementById("closebtn").style.animation = "mynewmove 0.3s 1 forwards";
}
