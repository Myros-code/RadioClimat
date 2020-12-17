export const mobMenuInit = () => {

const mobMenuToggleBtn = document.querySelector("#mobMenuToggle");
const mobMenuToggleImg = document.querySelector(".mobMenuToggleImg");
const mobMenu = document.querySelector(".mob-menu");
const search = document.querySelector(".search-input");

mobMenuToggleBtn.addEventListener("click", () => {

    if(mobMenu.style.top == "83px"){ 

        mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
        search.style.opacity = "1";
        search.style.visibility = "visible";
        mobMenu.style.top = "-800px";

    } else{

        mobMenuToggleImg.src = "../src/images/mobMenuOff.svg";
        search.style.opacity = "0";
        search.style.visibility = "hidden";
        mobMenu.style.top = "83px";
      
    }

});


}