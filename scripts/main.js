// Variables for open/close mob menu
let mobMenuToggleBtn = document.querySelectorAll(".mobMenuToggle");
let mobMenuToggleImg = document.querySelectorAll(".mobMenuToggleImg");
let mobMenu = document.querySelector(".mob-menu");
let search = document.querySelectorAll(".search-input");

// Variables for navigation on page
Router.init();
Router.dispatch('/radio');
let navBtns = document.querySelectorAll(".sidebar-nav__item");
let page = document.querySelector(".page");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");


//--------------------------- mobile menu toggle ------------------------------------------------------

mobMenuToggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("click");
        
        if(mobMenu.style.top == "83px"){ 

            mobMenuToggleImg.forEach(img =>{
                img.src = "../src/images/mobMenuOn.svg";
            });
    
            search.forEach(search => {
                search.style.opacity = "1";
                search.style.visibility = "visible";
            }) 
            
            mobMenu.style.top = "-800px";
        } else{
    
            mobMenuToggleImg.forEach(img =>{
                img.src = "../src/images/mobMenuOff.svg";
            });
    
            search.forEach(search => {
                search.style.opacity = "0";
                search.style.visibility = "hidden";
            }) ;
    
            mobMenu.style.top = "83px";
          
        }

    });
});
// mobMenuToggleBtn.addEventListener("click", (event) => {

//     mobileToggle();

// });





navBtns.forEach(btn => {

    btn.addEventListener("click",event => goToPage(event));

});


// function goToPage(event){

//     let curentBtn = (event.target.closest("a"));
//     let lastPageClass = page.classList.item(page.classList.length-1);
//     let thisPageClass = curentBtn.getAttribute('data-page');


//     function removeClass(block){

//         let lastClass = block.classList.item(block.classList.length-1);
//         let thisClass = curentBtn.getAttribute('data-page');

//         if(lastClass == thisClass){

//         } else {
//             block.classList.replace(lastClass,`${thisClass}gg${block}`);
//         }
        

//     }

//     removeClass(page);
//     removeClass(sidebar);
//     removeClass(content);
    
//     let thisClass = curentBtn.getAttribute('data-page');

//     let lastSidebarClass = sidebar.classList.item(sidebar.classList.length-1);
  

//     let lastContentClass = sidebar.classList.item(content.classList.length-1);

//     let lastPageClass = page.classList.item(page.classList.length-1);



//     if(lastPageClass == thisClass){

//     } else {
//         page.classList.replace(lastPageClass, `${thisClass}-page`);
//         sidebar.classList.replace(lastSidebarClass, `${thisClass}-sidebar`);
//         content.classList.replace(lastContentClass, `${thisClass}-content`);
//     }

// }














console.log(navBtns);