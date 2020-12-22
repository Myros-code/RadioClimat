
// Variables for open/close mob menu
// let mobMenuToggleBtn = document.querySelectorAll(".mobMenuToggle");
// const mobMenuToggleBtn = document.querySelector("#mobMenuToggle");
// const mobMenuToggleImg = document.querySelector(".mobMenuToggleImg");
// const mobMenu = document.querySelector(".mob-menu");
// const search = document.querySelector(".search-input");

// // Variables for navigation on page





// let navBtns = document.querySelectorAll(".sidebar-nav__item");
// let page = document.querySelector(".page");
// let sidebar = document.querySelector(".sidebar");
// let content = document.querySelector(".content");


//--------------------------- mobile menu toggle ------------------------------------------------------

// mobMenuToggleBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         console.log("click");
        
//         if(mobMenu.style.top == "83px"){ 

//             mobMenuToggleImg.forEach(img =>{
//                 img.src = "../src/images/mobMenuOn.svg";
//             });
    
//             search.forEach(search => {
//                 search.style.opacity = "1";
//                 search.style.visibility = "visible";
//             }) 
            
//             mobMenu.style.top = "-800px";
//         } else{
    
//             mobMenuToggleImg.forEach(img =>{
//                 img.src = "../src/images/mobMenuOff.svg";
//             });
    
//             search.forEach(search => {
//                 search.style.opacity = "0";
//                 search.style.visibility = "hidden";
//             }) ;
    
//             mobMenu.style.top = "83px";
          
//         }

//     });
// });


// mobMenuToggleBtn.addEventListener("click", (event) => {

//         if(mobMenu.style.top == "83px"){ 

//             mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
//             search.style.opacity = "1";
//             search.style.visibility = "visible";
//             mobMenu.style.top = "-800px";

//         } else{

//             mobMenuToggleImg.src = "../src/images/mobMenuOff.svg";
//             search.style.opacity = "0";
//             search.style.visibility = "hidden";
//             mobMenu.style.top = "83px";
          
//         }

// });





// navBtns.forEach(btn => {

//     btn.addEventListener("click",event => goToPage(event));

// });


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


// class RadioClimat {

//     constructor (){
//         this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
//         // this.API_KEY = 'd1aa4cc43434aa21dae36425fec7828f';
//     }



//     getData = async (url) => {
        
//         const res =await fetch(url);
//         if (res.ok) {
//             return res.json();
//         } else {
//             throw new Error(`Не удалось получить данные по адресу ${url}`)
//         }
//     }

//     // getTestData = () => {
//     //     return  this.getData('test.json');
//     // }

//     // getTestCard = () => {
//     //     return this.getData('card.json');
//     // }

//     // getSearchResult = query => {
//     //   this.temp = `${this.SERVER}/search/tv/?api_key=${this.API_KEY}&query=${query}&language=ru-RU`;
//     //   return  this.getData(this.temp);
//     // }

//     // getNextPage = page => {
//     //     return  this.getData(this.temp + '&page=' + page);
//     // }





//     // getTvShow = id => {
//     //     return this.getData(`${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`);
//     // }

//     // getTopRated = () => this.getData(`${this.SERVER}/tv/top_rated?api_key=${this.API_KEY}&language=ru-RU`);

//     // getPopular = () => this.getData(`${this.SERVER}/tv/popular?api_key=${this.API_KEY}&language=ru-RU`);

//     // getWeek = () => this.getData(`${this.SERVER}/tv/on_the_air?api_key=${this.API_KEY}&language=ru-RU`);

//     // getToday = () => this.getData(`${this.SERVER}/tv/airing_today?api_key=${this.API_KEY}&language=ru-RU`);

//     getServers = () =>{return this.getData(`${this.SERVER}api/v2/servers/`);}

    
// }

// const radioClimat = new RadioClimat();

// console.log(radioClimat.getServers());













