// member-nav
function openNav() {
    document.getElementById("member-nav").style.width = "250px";
    document.getElementById("mast-container").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    var element = document.getElementById("mast-container");
    element.classList.add("mystyle");

}

function closeNav() {
    document.getElementById("member-nav").style.width = "0";
    document.getElementById("mast-container").style.marginLeft= "0";
    document.body.style.backgroundColor = "";
}

// main-nav-mobile
function site_nav_mobileMenu(menu) {
    menu.classList.toggle('open');
}