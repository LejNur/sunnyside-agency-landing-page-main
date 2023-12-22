let buttonMenu = document.querySelector(".navbar-toggler");
let collapseMenu = document.querySelector("#navbarNavAltMarkup");
let hamburgerIcon = document.querySelector(".icon")


buttonMenu.addEventListener("click", function() {

        if (collapseMenu.classList.contains("collapse")) {

          hamburgerIcon.style.opacity = "0.2";
          
        } else {

            hamburgerIcon.style.opacity = "1"
        }

        collapseMenu.classList.toggle("collapse");

})