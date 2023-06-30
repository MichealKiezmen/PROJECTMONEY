// SHOW AND HIDE MENU ON-click

let onMenuClick = document.getElementById("menu-bar");
onMenuClick.addEventListener("click", () => {
   let letShowMenu = document.getElementById("menu-links")
    letShowMenu.classList.toggle("menu-links-show")
    // onMenuClick.classList.toggle("menu-bar-show")
})


const letHideSignUp = document.getElementById("sign-up-div");
const letHideLogIn = document.getElementById("log-in-div")

let LoggedIn = document.getElementById("log-in");
LoggedIn.addEventListener("click", () => { 
  
    letHideLogIn.classList.toggle("hide-form")

    if(letHideSignUp.classList.contains("hide-form")){
       letHideSignUp.classList.toggle("hide-form")
    }
});

let signedIn = document.getElementById("sign-up");
signedIn.addEventListener("click", () => {
    letHideSignUp.classList.toggle("hide-form")
    letHideLogIn.classList.toggle("hide-form")
})