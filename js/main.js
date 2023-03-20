// Header Scroll 
let nav = document.querySelector(".navbar");//NAVBAR IS THE BOOTSTRAP CLASS
window.onscroll = function() {//FUNCTION DECLARED ON SCROLLING THE NAVBAR
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); //nav add to its class the header scrolled class made in css
    }else{
        nav.classList.remove("header-scrolled");//else remove from the class list of the nav
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");//ALL NAVLINKS STORED IN THE NAVBAR LET
let navCollapse = document.querySelector(".navbar-collapse.collapse");//CLASS IN HTML IN HERE
navBar.forEach(function(a){//FOR EACH NAVLINKS IN THE NAVBAR LET VARIABLE
    a.addEventListener("click", function(){//ADD THE EVENT LISTENER TO IT 
        navCollapse.classList.remove("show");//REMOVE THE CLASS APPENDED BY THE BOOTSTRAP 
    })
})
