var nav = document.getElementById('mainX');
var menu = document.getElementById('menu');
var sideMenu = document.getElementById('sideMenu');

function openMenu() {
    menu.classList.toggle('close');
    if(sideMenu.style.width === "0px") {
        sideMenu.style.width = "100px";
    } else {
        sideMenu.style.width = 0;
    }
}
window.onscroll = function() {
    TopX();
}

function TopX() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById('topX').style.display = "block";
    } else {
        document.getElementById('topX').style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
    menuX();
}

function menuX() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('menu').style.display = "block";
    } else {
        document.getElementById('menu').style.display = "none";
    }
}
