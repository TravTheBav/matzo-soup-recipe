let navBar = document.querySelector('.nav-wrapper');
let heroImage = document.querySelector('.title-wrapper');
window.onscroll = function () {
    if ( document.body.scrollTop >= ( heroImage.clientHeight - navBar.clientHeight ) ||
         document.documentElement.scrollTop >= ( heroImage.clientHeight - navBar.clientHeight )) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
    }   else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
    }
};