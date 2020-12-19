// import {mobMenuInit} from './mobMenu.js';

const app = document.querySelector(".app");
const centerContentBody = document.querySelector('.center-content-body');
const audioPlayer = document.querySelector('#audioPlayer');
audioPlayer.src = "http://xn--80aalqalhjoq5a.xn--p1ai:8000/stream";

 let shchedule = `
 <div class="center-content-page schedule--center-content-page" >
 <div class="leading__block center-content-body__block">

     <h1 class="title block--title">Наши ведущие</h1>

     <div class="leading-items">

     <div class="lead-item">

         <a href="#!" class="lead-item__link" >

             <figure class="lead-item__figure">

                 <div class="lead-img__wrap">
                     <img src="./src/images/lead-3.png" alt="" class="lead-img">
                 </div>
                 
                 <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

             </figure>

         </a>

     </div>

     <div class="lead-item">

         <a href="#!" class="lead-item__link" >

             <figure class="lead-item__figure">

                 <div class="lead-img__wrap">
                     <img src="./src/images/lead-4.png" alt="" class="lead-img">
                 </div>
                 
                 <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

             </figure>

         </a>

     </div>


     <div class="lead-item">

         <a href="#!" class="lead-item__link" >

             <figure class="lead-item__figure">

                 <div class="lead-img__wrap">
                     <img src="./src/images/lead-1.png" alt="" class="lead-img">
                 </div>
                 
                 <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

             </figure>

         </a>

     </div>


     <div class="lead-item">

         <a href="#!" class="lead-item__link" >

             <figure class="lead-item__figure">

                 <div class="lead-img__wrap">
                     <img src="./src/images/lead-2.png" alt="" class="lead-img">
                 </div>
                 
                 <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

             </figure>

         </a>

     </div>

     <div class="lead-item">

         <a href="#!" class="lead-item__link" >

             <figure class="lead-item__figure">

                 <div class="lead-img__wrap">
                     <img src="./src/images/lead-4.png" alt="" class="lead-img">
                 </div>
                 
                 <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

             </figure>

         </a>

     </div>
         
     </div>

 </div>

 <div class="mobile-efirs">


     <h2 class="title sidebar--title">Сегодня в ефире</h1>


     <div class="efirs">
         <div class="efir-item">

             <a href="#!" class="efir-item__link" >

                 <figure class="efir-item__figure">

                     <div class="efir-img__wrap">
                         <img src="./src/images/efir-img.png" alt="" class="efir-img">
                     </div>

                     <figcaption class="efir-info">

                         <h3 class="efir-name">Название</h3>

                         <div class="efir-post__date">

                             

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


         <div class="efir-item">

             <a href="#!" class="efir-item__link" >

                 <figure class="efir-item__figure">

                     <div class="efir-img__wrap">
                         <img src="./src/images/efir-img.png" alt="" class="efir-img">
                     </div>

                     <figcaption class="efir-info">

                         <h3 class="efir-name">Название</h3>

                         <div class="efir-post__date">

                             

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>



         <div class="efir-item">

             <a href="#!" class="efir-item__link" >

                 <figure class="efir-item__figure">

                     <div class="efir-img__wrap">
                         <img src="./src/images/efir-img.png" alt="" class="efir-img">
                     </div>

                     <figcaption class="efir-info">

                         <h3 class="efir-name">Название</h3>

                         <div class="efir-post__date">

                           

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>
         <div class="efir-item">

             <a href="#!" class="efir-item__link" >

                 <figure class="efir-item__figure">

                     <div class="efir-img__wrap">
                         <img src="./src/images/efir-img.png" alt="" class="efir-img">
                     </div>

                     <figcaption class="efir-info">

                         <h3 class="efir-name">Название</h3>

                         <div class="efir-post__date">

                         

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>
     </div>


 </div>


 <div class="shchedule__block main-content-body__block">

     <h1 class="title block--title">Расписание</h1>

     <div class="schedule-items">

         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>

         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>

         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


         <div class="schedule-item">

             <a href="#!" class="schedule-item__link" >

                 <figure class="schedule-item__figure">

                     <div class="schedule-img__wrap">
                         <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                     </div>

                     <figcaption class="schedule-info">

                         <h3 class="news-name">Название новости</h3>

                         <div class="news-post__date">

                             <span class="date-post">10/06/2020</span>

                             <span class="time-post">10:45</span>

                         </div>
                     
                     </figcaption>

                 </figure>

             </a>

         </div>


     </div>

     

 </div>


</div>`;


 let order = `
 <div class="center-content-page order--center-content-page">
 <h1 class="title block--title">Заказать песню</h1>
 <div class="order-inputs">

     <div class="order-input__block">
         <div class="order-desc">Ваше имя</div>
         <input type="text" class="order-input__item" placeholder="Ваше имя">
     </div>

     <div class="order-input__block">
         <div class="order-desc">Ваш телефон</div>
         <input type="text" class="order-input__item" placeholder="Ваш телефон">
     </div>

     <div class="order-input__block">
         <div class="order-desc">Ваш емаил</div>
         <input type="text" class="order-input__item" placeholder="Ваш емаил">
     </div>
 </div>

 <div class="order-text-message">
     <div class="order-desc">Ваш заказ</div>
     <textarea class="order-textarea" placeholder="Ваш заказ" name="" id="" cols="30" rows="10"></textarea>
 </div>

 <div class="order-btn__wrap">
     <a href="#" class="order-btn"> Заказать</a>
 </div>


</div>`;

 let radioPage = `
 <div class="page radio-page" >  

     <div class="sidebar radio-sidebar">

         <a class="sidebar-logo" href="!#">
             <figure class="logo__figure">
                 <img class="logo__img" src="./src/images/logo-wh.svg" alt="logo"/>
                 <figcaption class="logo__figcaption">Климат</figcaption>
             </figure>
         </a>


         <nav class="sidebar-nav radio-sidebar-nav">

         <div class="sidebar-nav-item__wrap">
             <a href="/radio" class="sidebar-nav__item" data-page="radio">
                 <figure class="nav__item-figure">
                     <img src="./src/images/radio-wh.svg" alt="" class="sidebar-icon radio--img">
                     <figcaption class="nav__item-figcaption">Радио</figcaption>
                 </figure>
             </a>
         </div>
         
         
             
        

             
         <div class="sidebar-nav-item__wrap">
             <a href="/main/order" class="sidebar-nav__item" data-page="order">
                 <figure class="nav__item-figure">
                     <img src="./src/images/search-wh.svg" alt="" class="sidebar-img search--img">
                     <figcaption class="nav__item-figcaption">Заказать</figcaption>
                 </figure>
             </a>
         </div>

         <div class="sidebar-nav-item__wrap">
             <a href="/main" class="sidebar-nav__item" data-page="podcasts">
                 <figure class="nav__item-figure">
                     <img src="./src/images/micro-wh.svg" alt="" class="sidebar-img  micro--img">
                     <figcaption class="nav__item-figcaption">Подкасты</figcaption>
                 </figure>
             </a>
         </div>


         <div class="sidebar-nav-item__wrap">
             <a href="/main" class="sidebar-nav__item" data-page="schedule">
                 <figure class="nav__item-figure">
                     <img src="./src/images/calendar-wh.svg" alt="" class="sidebar-img  calendar--img">
                     <figcaption class="nav__item-figcaption">Расписание</figcaption>
                 </figure>
             </a>
         </div>

         <div class="sidebar-nav-item__wrap">
             <a href="#!" class="sidebar-nav__item" data-page="rusClimateFund">
                 <figure class="nav__item-figure">
                     <img src="./src/images/rusClimatFond-wh.svg" alt="" class="sidebar-img  rusClimatFond--img">
                     <figcaption class="nav__item-figcaption">РусКлиматФонд</figcaption>
                 </figure>
             </a>
         </div>


         </nav>

         <div class="translate__wrap">
             <a href="#!" class="translate__link">
                 <figure class="translate__link-figure">
                     <img src="./src/images/globus-wh.svg" alt="" class="sidebar-img  globus--img">
                     <figcaption class="translate__link-figcaption">English</figcaption>
                 </figure>
             </a>
         </div>

     </div>

     <div class="content radio-content ">

         <div class="mob-hide">
                 
         </div>

         <div class="wrap">

             

             <header class="content__header">
            

                 <a class="mobile-logo" href="!#">
                     <figure class="mobile-logo__figure">
                         <img class="mobile-logo__img" src="./src/images/logo-colour.svg" alt="mobile-logo"/>
                         <figcaption class="mobile-logo__figcaption"><span>Климат</span></figcaption>
                     </figure>
                 </a>



                 <div class="search-input">
                     <input type="text" class="search-input__item" placeholder = "Поиск по Ведущим, Передачам и Подкастам">
                 </div>

                 <div class="social-group radio-social-group">

                     <a href="#!" class="social-group__link header--facebook__link">
                         <img class="social-group__icon facebook__icon" src="./src/images/facebook.svg" alt="facebook">
                     </a>

                     <a href="#!" class="social-group__link header--youtube__link">
                         <img class= "social-group__icon youtube__icon" src="./src/images/youtube.svg" alt="youtube">
                     </a>

                     <a href="#1" class="social-group__link header--instagram__link">
                         <img class="social-group__icon instagram__icon" src="./src/images/instagram.svg" alt="instagram">
                     </a>
                 </div>

                 <div class="mob-menu__btn mob-menu--On__btn">
                     <button class="mob-menu__btn-item  mob-menu--On__btn-item"  id = "mobMenuToggle">
                         <img class="mob-menu--on__img" id = "mobMenuToggleImg" src="./src/images/mobMenuOn.svg" alt="mobMenuOn">
                     </button>
                 </div>

             </header>

         <div class="radio-content__player">
         

             <div class="radio-content__player-title">

                 <div class="albom">
                     <div class="albom-img__block">
                         <img src="./src/images/обложка.png" alt="albom-cover" id="audioImg" class="albom__img">
                     </div>
                 </div>

                 <div class="volume-bar">
                     <img src="./src/images/volume-empty.svg" alt="" class="volume-empty__img">
                     <img src="./src/images/volume-full.svg" alt="" class="volume-full__img">
                 </div>
             
             </div>

             <div class="progres">
                 <div class="progres-value" id="audioProgress"></div>
                 <span class="time current" id = "currentTime">0:00</span>
                 <span class="time duration" id = "durationTime">2:47</span>
             </div>

             <div class="names">
                 <span class="group-name" id = "groupName">Group name</span>
                 <span class="song-name" id = "songName">Song name</span>
                 <span class="albom-name" id = "albomName">Albom name</span>
             </div>

             <div class="player-buttons">

             <div class="player-btn like--btn">
                 <a href="#!" class="player-button__item like--btn__item ">
                     <img class="like--btn__icon player-button__icon" src="./src/images/like-lg.svg" alt="">
                 </a>
             </div>

             <div class="player-btn play--btn">
                 <a href="#!" class="player-button__item  play--btn__item " id = "audioButtonPlay">
                     <img class="play--btn__icon player-button__icon" src="./src/images/play-lg.svg" alt="">
                 </a>
             </div>

             <div class="player-btn  dislike--btn">
                 <a href="#!" class="player-button__item  dislike--btn__item ">
                     <img class=" dislike--btn__icon player-button__icon" src="./src/images/dislike-lg.svg" alt="">
                 </a>
             </div>

                
             </div>
                


             </div>

         </div>

     </div>

 </div>
 
 `;

 let mainPage = `
 <div class="page main-page" >

 <div class="content main-content">

     <div class="styling-block">

     </div>


     <div class="sidebar main-sidebar">

         
         <a class="sidebar-logo" href="#!">
             <figure class="logo__figure">
                 <img class="logo__img" src="./src/images/logo-bl.svg" alt="logo"/>
                 <figcaption class="logo__figcaption">Климат</figcaption>
             </figure>
         </a>


         <nav class="sidebar-nav main-sidebar-nav">

         <div class="sidebar-nav-item__wrap">
             <a href="/radio" class="sidebar-nav__item" data-page="radio">
                 <figure class="nav__item-figure">
                     <img src="./src/images/radio-bl.svg"class="sidebar-icon radio--icon" alt="">
                     <figcaption class="nav__item-figcaption">Радио</figcaption>
                 </figure>
             </a>
         </div>
         
         
             
        

             
         <div class="sidebar-nav-item__wrap">
             <a href="/main/order" class="sidebar-nav__item" data-page="order">
                 <figure class="nav__item-figure">
                     <img src="./src/images/search-bl.svg"class="sidebar-icon radio--icon" alt="">
                     <figcaption class="nav__item-figcaption">Заказать</figcaption>
                 </figure>
             </a>
         </div>

         <div class="sidebar-nav-item__wrap">
             <a href="/main" class="sidebar-nav__item" data-page="podcasts">
                 <figure class="nav__item-figure">
                     <img src="./src/images/micro-bl.svg"class="sidebar-icon radio--icon" alt="">
                     <figcaption class="nav__item-figcaption">Подкасты</figcaption>
                 </figure>
             </a>
         </div>


         <div class="sidebar-nav-item__wrap">
             <a href="/main/schedule" class="sidebar-nav__item" data-page="schedule">
                 <figure class="nav__item-figure">
                     <img src="./src/images/calendar-bl.svg"class="sidebar-icon radio--icon" alt="">
                     <figcaption class="nav__item-figcaption">Расписание</figcaption>
                 </figure>
             </a>
         </div>

         <div class="sidebar-nav-item__wrap">
             <a href="#!" class="sidebar-nav__item" data-page="rusClimateFund">
                 <figure class="nav__item-figure">
                     <img src="./src/images/climatfond-bl.svg"class="sidebar-icon radio--icon" alt="">
                     <figcaption class="nav__item-figcaption">РусКлиматФонд</figcaption>
                 </figure>
             </a>
         </div>

     <div class="sidebar-nav-item__wrap">
         <div class="social-group main-social-group">

             <a href="#!" class="social-group__link sidebar--facebook__link">
                 <img class="social-group__icon facebook__icon" src="./src/images/facebook.svg" alt="facebook">
             </a>

             <a href="#!" class="social-group__link sidebar--youtube__link">
                 <img class= "social-group__icon youtube__icon" src="./src/images/youtube.svg" alt="youtube">
             </a>

             <a href="#1" class="social-group__link sidebar--instagram__link">
                 <img class="social-group__icon instagram__icon" src="./src/images/instagram.svg" alt="instagram">
             </a>
         </div>
     </div>


     <div class="sidebar-nav-item__wrap">
         <a href="#!" class="sidebar-nav__item" data-page="">
             <figure class="nav__item-figure">
                 <img src="./src/images/radio-bl.svg"class="sidebar-icon radio--icon" alt="">
                 <figcaption class="nav__item-figcaption">Перевести</figcaption>
             </figure>
         </a>
     </div>


         </nav>


     </div>



     <div class="center-content">

         <header class="content__header center-content-header">
        

             <a class="mobile-logo" href="!#">
                 <figure class="mobile-logo__figure">
                     <img class="mobile-logo__img" src="./src/images/logo-colour.svg" alt="mobile-logo"/>
                     <figcaption class="mobile-logo__figcaption"><span>Климат</span></figcaption>
                 </figure>
             </a>



             <div class="search-input">
                 <input type="text" class="search-input__item" placeholder = "Поиск по Ведущим, Передачам и Подкастам">
             </div>

             <div class="mob-menu__btn mob-menu--On__btn">
                 <button class="mob-menu__btn-item  mob-menu--On__btn-item mobMenuToggle"  id = "mobMenuToggle">
                     <img class="mob-menu--on__img mobMenuToggleImg" id = "mobMenuToggleImg" src="./src/images/mobMenuOn.svg" alt="mobMenuOn">
                 </button>
             </div>

         </header>

         <div class="content__body  center-content-body">

         <div class="center-content-page schedule--center-content-page" >
             <div class="leading__block center-content-body__block">

                 <h1 class="title block--title">Наши ведущие</h1>

                 <div class="leading-items">

                 <div class="lead-item">

                     <a href="#!" class="lead-item__link" >

                         <figure class="lead-item__figure">

                             <div class="lead-img__wrap">
                                 <img src="./src/images/lead-3.png" alt="" class="lead-img">
                             </div>
                             
                             <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

                         </figure>

                     </a>

                 </div>

                 <div class="lead-item">

                     <a href="#!" class="lead-item__link" >

                         <figure class="lead-item__figure">

                             <div class="lead-img__wrap">
                                 <img src="./src/images/lead-4.png" alt="" class="lead-img">
                             </div>
                             
                             <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

                         </figure>

                     </a>

                 </div>


                 <div class="lead-item">

                     <a href="#!" class="lead-item__link" >

                         <figure class="lead-item__figure">

                             <div class="lead-img__wrap">
                                 <img src="./src/images/lead-1.png" alt="" class="lead-img">
                             </div>
                             
                             <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

                         </figure>

                     </a>

                 </div>


                 <div class="lead-item">

                     <a href="#!" class="lead-item__link" >

                         <figure class="lead-item__figure">

                             <div class="lead-img__wrap">
                                 <img src="./src/images/lead-2.png" alt="" class="lead-img">
                             </div>
                             
                             <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

                         </figure>

                     </a>

                 </div>

                 <div class="lead-item">

                     <a href="#!" class="lead-item__link" >

                         <figure class="lead-item__figure">

                             <div class="lead-img__wrap">
                                 <img src="./src/images/lead-4.png" alt="" class="lead-img">
                             </div>
                             
                             <figcaption class="lead-name"><h3>Jane cooper</h3></figcaption>

                         </figure>

                     </a>

                 </div>
                     
                 </div>

             </div>

             <div class="mobile-efirs">


                 <h2 class="title sidebar--title">Сегодня в ефире</h1>


                 <div class="efirs">
                     <div class="efir-item">

                         <a href="#!" class="efir-item__link" >

                             <figure class="efir-item__figure">

                                 <div class="efir-img__wrap">
                                     <img src="./src/images/efir-img.png" alt="" class="efir-img">
                                 </div>

                                 <figcaption class="efir-info">

                                     <h3 class="efir-name">Название</h3>

                                     <div class="efir-post__date">

                                         <!-- <span class="date-post">10/06/2020</span> -->

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                     <div class="efir-item">

                         <a href="#!" class="efir-item__link" >

                             <figure class="efir-item__figure">

                                 <div class="efir-img__wrap">
                                     <img src="./src/images/efir-img.png" alt="" class="efir-img">
                                 </div>

                                 <figcaption class="efir-info">

                                     <h3 class="efir-name">Название</h3>

                                     <div class="efir-post__date">

                                         <!-- <span class="date-post">10/06/2020</span> -->

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>



                     <div class="efir-item">

                         <a href="#!" class="efir-item__link" >

                             <figure class="efir-item__figure">

                                 <div class="efir-img__wrap">
                                     <img src="./src/images/efir-img.png" alt="" class="efir-img">
                                 </div>

                                 <figcaption class="efir-info">

                                     <h3 class="efir-name">Название</h3>

                                     <div class="efir-post__date">

                                         <!-- <span class="date-post">10/06/2020</span> -->

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>
                     <div class="efir-item">

                         <a href="#!" class="efir-item__link" >

                             <figure class="efir-item__figure">

                                 <div class="efir-img__wrap">
                                     <img src="./src/images/efir-img.png" alt="" class="efir-img">
                                 </div>

                                 <figcaption class="efir-info">

                                     <h3 class="efir-name">Название</h3>

                                     <div class="efir-post__date">

                                         <!-- <span class="date-post">10/06/2020</span> -->

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>
                 </div>


             </div>


             <div class="shchedule__block main-content-body__block">

                 <h1 class="title block--title">Расписание</h1>

                 <div class="schedule-items">

                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>

                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>

                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                     <div class="schedule-item">

                         <a href="#!" class="schedule-item__link" >

                             <figure class="schedule-item__figure">

                                 <div class="schedule-img__wrap">
                                     <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                                 </div>

                                 <figcaption class="schedule-info">

                                     <h3 class="news-name">Название новости</h3>

                                     <div class="news-post__date">

                                         <span class="date-post">10/06/2020</span>

                                         <span class="time-post">10:45</span>

                                     </div>
                                 
                                 </figcaption>

                             </figure>

                         </a>

                     </div>


                 </div>

                 

             </div>


         </div>


         <div class="center-content-page order--center-content-page"  style="display: none;">
             <h1 class="title block--title">Заказать песню</h1>
             <div class="order-inputs">

                 <div class="order-input__block">
                     <div class="order-desc">Ваше имя</div>
                     <input type="text" class="order-input__item" placeholder="Ваше имя">
                 </div>

                 <div class="order-input__block">
                     <div class="order-desc">Ваш телефон</div>
                     <input type="text" class="order-input__item" placeholder="Ваш телефон">
                 </div>

                 <div class="order-input__block">
                     <div class="order-desc">Ваш емаил</div>
                     <input type="text" class="order-input__item" placeholder="Ваш емаил">
                 </div>
             </div>

             <div class="order-text-message">
                 <div class="order-desc">Ваш заказ</div>
                 <textarea class="order-textarea" placeholder="Ваш заказ" name="" id="" cols="30" rows="10"></textarea>
             </div>

             <div class="order-btn__wrap">
                 <a href="#" class="order-btn"> Заказать</a>
             </div>
            

         </div>
             
         </div>
         

       
         
        

     </div>


     <div class="sidebar main-sidebar-right">
         <div class="widther">
         
         </div>

         <div class="main-sidebar-right__wrap">


             <h2 class="sidebar--title">Сегодня в ефире</h1>


             <div class="efirs">
                 <div class="efir-item">

                     <a href="#!" class="efir-item__link" >

                         <figure class="efir-item__figure">

                             <div class="efir-img__wrap">
                                 <img src="./src/images/efir-img.png" alt="" class="efir-img">
                             </div>

                             <figcaption class="efir-info">

                                 <h3 class="efir-name">Название</h3>

                                 <div class="efir-post__date">

                                     <!-- <span class="date-post">10/06/2020</span> -->

                                     <span class="time-post">10:45</span>

                                 </div>
                             
                             </figcaption>

                         </figure>

                     </a>

                 </div>


                 <div class="efir-item">

                     <a href="#!" class="efir-item__link" >

                         <figure class="efir-item__figure">

                             <div class="efir-img__wrap">
                                 <img src="./src/images/efir-img.png" alt="" class="efir-img">
                             </div>

                             <figcaption class="efir-info">

                                 <h3 class="efir-name">Название</h3>

                                 <div class="efir-post__date">

                                     <!-- <span class="date-post">10/06/2020</span> -->

                                     <span class="time-post">10:45</span>

                                 </div>
                             
                             </figcaption>

                         </figure>

                     </a>

                 </div>



                 <div class="efir-item">

                     <a href="#!" class="efir-item__link" >

                         <figure class="efir-item__figure">

                             <div class="efir-img__wrap">
                                 <img src="./src/images/efir-img.png" alt="" class="efir-img">
                             </div>

                             <figcaption class="efir-info">

                                 <h3 class="efir-name">Название</h3>

                                 <div class="efir-post__date">

                                     <!-- <span class="date-post">10/06/2020</span> -->

                                     <span class="time-post">10:45</span>

                                 </div>
                             
                             </figcaption>

                         </figure>

                     </a>

                 </div>
             </div>


         </div>

         
     </div>

     
 </div>

 <div class="player main-player">

     <div class="main-player__wrap">

         <div class="albom">
             <div class="albom-img">

                 <div class="albom-img__wrap">

                     <img class="albom-img__item" src="./src/images/player-albom-sm.png" alt="">

                 </div>

             </div>

             <div class="names">

                 <div class="first">
                     <span class="group-name">Group name</span>
                     <span class="albom-name">Albom name</span>
                 </div>

                 <div class="second">
                     <span class="song-name">Song name</span>
                 </div>
                 
             </div>


         </div>

        
         


         <div class="player-buttons">

             <div class="player-btn like--btn">
                 <a href="#!" class="player-button__item like--btn__item ">
                     <img class="like--btn__icon player-button__icon" src="./src/images/like-sm.svg" alt="">
                 </a>
             </div>

             <div class="player-btn play--btn">
                 <a href="#!" class="player-button__item  play--btn__item ">
                     <img class="play--btn__icon player-button__icon" src="./src/images/play-sm.svg" alt="">
                 </a>
             </div>

             <div class="player-btn  dislike--btn">
                 <a href="#!" class="player-button__item  dislike--btn__item ">
                     <img class=" dislike--btn__icon player-button__icon" src="./src/images/dislike-sm.svg" alt="">
                 </a>
             </div>

                
             </div>


             <div class="progres">
                 <div class="progres-value"></div>
                 <span class="time current">0:00</span>
                 <span class="time duration">2:47</span>
             </div>

             <div class="volume">
                 <input class="volume-item" type="range" id="volume" name="volume"
                 min="0" max="100">
             </div>
                

     </div>

 </div>

</div>`;


class RadioClimat {

    constructor (){
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
        // this.API_KEY = 'd1aa4cc43434aa21dae36425fec7828f';
    }


    data = () => {
        return {
            translations: {
                en: {
                    already_voted: "You have already voted for this track",
                    likes: "Likes",
                    dislikes: "Dislikes",
                },
                ru: {
                    already_voted: "Вы уже голосовали за этот трэк",
                    likes: "За",
                    dislikes: "Против",
                },
                fr:{
                    already_voted: "Vous avez déjà voté pour ce titre",
                    likes: "J'Aime",
                    dislikes: "J'Aime pas",
                }
            },
            loaded: true,
            trackImage: '',
            trackImageFailover: '',
            trackMetadata: '',
            showProgress: false,
            playbackTime: '',
            pbbStyle: {
                left: '0px',
            },
            voteResultNeg: {
                color: null,
                'font-size': '12px',
                'line-height': '50px',
            },
            voteResultPos: {
                color: null,
                'font-size': '12px',
                'line-height': '50px',
            },
            totalTrackTime: '',
            // Voting
            canVote: false,
            trackLikes: 0,
            trackDislikes: 0,
            voteRowHeight: 50,
            styleObject: {
            }

        } 
        
    }

    getData = async (url) => {
        
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
    }

    
    getServers = () =>{return this.getData(`${this.SERVER}api/v2/servers/`);}

    getServerChanels = () =>{return this.getData(`${this.SERVER}/api/v2/channels/?server=1`);}

    getCurrent = () => {return this.getData(`${this.SERVER}api/v2/history/?limit=1&offset=0&server=1`);}

   
    
    getEfirHistory = () =>{return this.getData(`${this.SERVER}/api/v2/history/`);}

    getDjs = () =>{return this.getData(`${this.SERVER}/api/djs`);}

    getTrack = (id) =>{return this.getData(`${this.SERVER}api/v2/music/${id}`);}



    refreshTrackdata = () =>{
        this.getData(`${this.SERVER}api/v2/history/?limit=1&offset=0&server=1`)
            .then(response => {
                if (response.data && response.data.results && response.data.results.length) {
                    this.lastTrack = response.data.results[0];
                    this.loaded = true;
                    this.trackImage = (this.lastTrack.img_medium_url || this.lastTrack.img_url || this.trackImageFailover);
                    // Track changed
                    if (this.trackMetadata != this.lastTrack.metadata) {
                        this.trackMetadata = this.lastTrack.metadata;
                        this.trackLikes = this.trackDislikes = 0;
                    }
                    this.canVote = this.lastTrack.all_music_id;

                }

            })
            .catch(e => {
                this.loaded = false;
                this.canVote = false;
            });

            
        //
    }

    
    formatTime = (sec) => {
        let pad = function(n) {
            return (n < 10 ? "0" + n : n);
        };
        sec = parseInt(sec);
        let h = Math.floor(sec / 3600),
            m = Math.floor((sec / 3600) % 1 * 60),
            s = sec % 60;
        if (h > 0) {
            return pad(h) + ":" + pad(m) + ":" + pad(s);
        }
        else {
            return pad(m) + ":" + pad(s);
        }
    }
    
   
    // let url = `${this.apiBase}/music/${this.lastTrack.all_music_id}/`;
    
}




const radioClimat = new RadioClimat();

// console.log(radioClimat.getServers());
//     console.log(radioClimat.getServerChanels());
//     console.log(radioClimat.getEfirHistory());
//     console.log(radioClimat.getDjs());
// console.log(radioClimat.getTrack(156));

// console.log(radioClimat.getCurrent());

// setInterval(radioClimat.getEfirHistory().then((response) => CreateEfir(response)), 100);


setInterval(() => {
    radioClimat.getEfirHistory().then((response) => CreateEfir(response));
}, 1000);

// radioClimat.getEfirHistory().then((response) => CreateEfir(response));
// radioClimat.getTrack().then((response) => getTrackData(response));


const CreateEfir = (response) => {

    // console.log(response);
    const currentTrackNum = 0;
    const currentTrackData = response[currentTrackNum];
    // console.log(currentTrackData);
    currentTrackID = response[currentTrackNum].all_music_id;
    // console.log(currentTrackID);
    // return currentTrackID;
    group = response[currentTrackNum].playlist_title;

    radioClimat.getTrack(currentTrackID).then((response) => {
        console.log(response);
        console.log(currentTrackID);
        let songName = response.title;//songName
        let albumName = response.album;
        let groupName = group;
        console.log(songName);
        console.log(albumName);
        console.log(groupName);

        let duration = response.length;

        Player.setSongNames(songName, groupName, albumName);
        


        // console.log(response.title);
        // console.log(response.atime);
        // console.log(response.album);
        // console.log(group);
        // let trackNames = myString.split(',', 3); 
    });


    // if (response[currentTrackNum] && response[currentTrackNum].ts && response[currentTrackNum].length) {
    //     radioClimat.showProgress = true;
        
    //     let timeFromStart = (+ new Date()) - response[currentTrackNum].ts;
    //     if (timeFromStart > this.lastTrack.length) {
    //         timeFromStart = response[currentTrackNum].length;
    //     }

    //     radioClimat.playbackTime = radioClimat.formatTime(timeFromStart / 1000);
    //     radioClimat.totalTrackTime = radioClimat.formatTime(this.lastTrack.length / 1000);

    //     this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;
    //     if (this.playingProgress >= 100) {
    //         this.refreshTrackdata();
    //     }
    // }

   
    let timeFromStart = (+ new Date()) - response[currentTrackNum].ts;
    if (timeFromStart > response[currentTrackNum].length) {
        timeFromStart = response[currentTrackNum].length;
        console.log(timeFromStart);
    }
    console.log(timeFromStart);

    let playbackTime = radioClimat.formatTime(timeFromStart / 1000);

    console.log(playbackTime);
    let totalTrackTime = radioClimat.formatTime(response[currentTrackNum].length / 1000);
    console.log(totalTrackTime);

    Player.setProgress(playbackTime, totalTrackTime);

    let playingProgress = (timeFromStart / response[currentTrackNum].length) * 100;
        if (playingProgress >= 100) {
            radioClimat.refreshTrackdata();
        }
    console.log(playingProgress);

    
        let progressWrap = document.querySelector('.progres');
        let audioProgressTiming = document.querySelector('#audioProgress');//
        if (!progressWrap) {
            return;
        }

        let progressWidth = progressWrap.offsetWidth;
        console.log(progressWidth);
        let barWidth = 100 - playingProgress;
        let pixWidth = progressWidth * (barWidth / 100.);
        let trackProgress = progressWidth - pixWidth;

        audioProgressTiming.style.width = `${trackProgress}px`;

}








// const getTrackData = (response) => {
//     console.log(response);

// }














 // `класс` роутера
 let Router = {


     // маршруты и соответствующие им обработчики
     routes: {
        "/radio": "radio",
        "/main": "main",
        "/main/order": "main_order",
        "/main/feeds/": "main_feeds",
        "/main/schedule": "main_shchedule",
        "/main/podcasts/": "main_podcasts",
    },

    mobMenuInit: function(){
        const mobMenuToggleBtn = document.querySelector("#mobMenuToggle");
        const mobMenuToggleImg = document.querySelector("#mobMenuToggleImg");
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
    },

    createPage: function(where, what){
        where.innerHTML = '';
        where.innerHTML = what;

    },

    replay: function () {

            // инициализируем роутер
            // Router.init();
               
            // запускаем главную страницу
            // Router.dispatch('/radio');
        
            // обработчик нажатий на ссылки
            let handler = event =>  {
               
                // получаем запрошенный url
                let url = new URL(event.currentTarget.href);

            
                // запускаем роутер, предавая ему path
                Router.dispatch(url.pathname);
               
                // запрещаем дальнейший переход по ссылке
                event.preventDefault();
                // window.history.pushState(1, url.pathname,[url]);
                // console.log(window.history.state);
            }
        
            // получаем все ссылки на странице
            let anchors = document.querySelectorAll('a');
           
            // вешаем на событие onclick обработчик
            for( let anchor of anchors ) anchor.onclick = handler;
        
    },


    // метод проходиться по массиву routes и создает
    // создает объект на каждый маршрут
    init: function() {
       
        // объявляем свойство _routes
        this._routes = [];
        for( let route in this.routes ) {
   
            // имя метода-обрботчика
            let method = this.routes[route];
           
            // добавляем в массив роутов объект
            this._routes.push({
               
                // регулярное выражение с которым будет сопоставляться ссылка
                // ее надо преобразовать из формата :tag в RegEx
                // модификатор g обязателен
                pattern: new RegExp('^' + route.replace(/:\w+/g,'(\\w+)') + '$'),
               
                // метод-обработчик
                // определяется в объекте Route
                // для удобства
                callback: this[method]
            });

        }

    },
   
   
   
    dispatch: function(path) {
       
        // количество маршрутов в массиве
        var i = this._routes.length;
       
        // цикл до конца
        while( i-- ) {
           
            // если запрошенный путь соответствует какому-либо
            // маршруту, смотрим есть ли маршруты
            var args = path.match(this._routes[i].pattern);
           
            // если есть аргументы
            if( args ) {
               
                // вызываем обработчик из объекта, передавая ему аргументы
                // args.slice(1) отрезает всю найденную строку
                this._routes[i].callback.apply(this,args.slice(1))
            }
        }
    },


    // обработчик
    // главной страницы

    radio: function() {
        this.createPage(app,radioPage);
        this.init();
        this.replay();
        this.mobMenuInit();
        console.log(Player.radioPlay);
        Player.radioPlay();

    },


    // контроллер статей
    main: function() {
        this.createPage(app,mainPage)
        this.init();
        this.replay();
       this.mobMenuInit();
    },
   
   
    // контроллер блога компаний


  

    main_order: function () {

        

        if(app.firstChild.nextSibling.classList.contains("radio-page")){
           let centerContentBody = document.querySelector('.center-content-body');
            this.main();
            
        }

        let centerContentBody = document.querySelector('.center-content-body');
        this.createPage(centerContentBody,order);
    },

    main_shchedule: function () {

        let centerContentBody = document.querySelector('.center-content-body');

        if(app.firstChild.nextSibling.classList.contains("radio-page")){
            Router.main();
        }
        else{
            this.createPage(centerContentBody,order);
        }

    },

};


let Player = {




    initElem: function(){
        // const audioImg = document.querySelector('#audioImg');//
       
        // const audioButtonPlay = document.querySelector('#audioButtonPlay');//
        // const audioButtonPlayImg = document.querySelector('.play--btn__icon');
        // const audioProgressTiming = document.querySelector('#audioProgress');//
        // const audioTimePassed =  document.querySelector('#currentTime');//
        // const audioTimeTotal =  document.querySelector('#durationTime');//
    },

    setSongNames: function(songName,groupName,albumName){

        const songNameField = document.querySelector('#songName');
        const groupNameField = document.querySelector('#groupName');
        const albumNameField = document.querySelector('#albomName');

        songNameField.textContent = songName;
        groupNameField.textContent = groupName;
        albumNameField.textContent = albumName;

    },

    setProgress: function(passed, total){

        const audioTimePassed =  document.querySelector('#currentTime');//
        const audioTimeTotal =  document.querySelector('#durationTime');//

        audioTimePassed.textContent = passed;
        audioTimeTotal.textContent = total;
    


        // audioPlayer.addEventListener('timeupdate', () => {

        //     addZero = n => n < 10 ? '0' + n : n;

        //     const duration = audioPlayer.duration;
        //     const currentTime = audioPlayer.currentTime;
        //     const progress = (currentTime / duration) * 100;
    
        //     audioProgressTiming.style.width = progress + '%';
    
        //     const minutesPassed = Math.floor(currentTime / 60) || '0';
        //     const secondsPassed = Math.floor(currentTime % 60) || '0';
    
        //     const minutesTotal = Math.floor(duration / 60) || '0';
        //     const secondsTotal = Math.floor(currentTime % 60) || '0';
    
        //     audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        //     audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;

    
        // });

    },


    // updateProgress: function () {
    //     if (this.lastTrack && this.lastTrack.ts && this.lastTrack.length) {
    //         this.showProgress = true;
    //         let timeFromStart = (+ new Date()) - this.lastTrack.ts;
    //         if (timeFromStart > this.lastTrack.length) {
    //             timeFromStart = this.lastTrack.length;
    //         }
    //         this.playbackTime = this.formatTime(timeFromStart / 1000);
    //         this.totalTrackTime = this.formatTime(this.lastTrack.length / 1000);
    //         this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;
    //         if (this.playingProgress >= 100) {
    //             this.refreshTrackdata();
    //         }
    //     }
    //     else {
    //         this.showProgress = false;
    //     }
    //     // Update UI
    //     let progressWrap = document.getElementsByClassName('progres');
    //     let progressWalue = document.querySelector('#audioProgress');
    //     if (!progressWrap) {
    //         return;
    //     }
    //     let progressWidth = progressWrap.offsetWidth;
    //     let barWidth = 100 - this.playingProgress;
    //     let pixWidth = progressWidth * (barWidth / 100.);
    //     this.trackProgress = progressWidth - pixWidth;
    //     progressWalue.style.width = `${this.trackProgress}px`;
    // },



    radioPlay: function(){
        
        const audioButtonPlayImg = document.querySelector('.play--btn__icon');
        const audioButtonPlay = document.querySelector('#audioButtonPlay');//
        const audioProgressTiming = document.querySelector('#audioProgress');//
        const audioTimePassed =  document.querySelector('#currentTime');
        const audioTimeTotal =  document.querySelector('#durationTime');
       

        audioButtonPlay.addEventListener('click', () =>{

            radioClimat.refreshTrackdata();

            const isPlayed = audioPlayer.paused;

            if (isPlayed){
            
            audioPlayer.play();
            audioButtonPlayImg.src = './src/images/pause.svg';

            } else {

            audioPlayer.pause();
            audioButtonPlayImg.src = './src/images/play-lg.svg';

            }

            // this.radioPlay();
            
            console.log('click');
        });

        


        // audioPlayer.addEventListener('timeupdate', () => {
            
        //     // radioClimat.refreshTrackdata();
        //     // this.updateProgress();
        //     // const duration = audioPlayer.duration;
        //     // console.log(duration);
        //     // const currentTime = audioPlayer.currentTime;
        //     // console.log(currentTime);
        //     // const progress = (currentTime / duration) * 100;
        //     // console.log(progress);
    
        //     // audioProgressTiming.style.width = progress + '%';
    
        //     // const minutesPassed = Math.floor(currentTime / 60) || '0';
        //     // const secondsPassed = Math.floor(currentTime % 60) || '0';
    
        //     // const minutesTotal = Math.floor(duration / 60) || '0';
        //     // const secondsTotal = Math.floor(currentTime % 60) || '0';
    
        //     // audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        //     // audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
    
        // });


       




        
    },


    radioInit: function(){
        // const audioImg = document.querySelector('#audioImg');//
        // // const audioPlayer = document.querySelector('#audioPlayer');
        // // console.log(audioPlayer);
        // const audioButtonPlay = document.querySelector('#audioButtonPlay');//
        // const audioButtonPlayImg = document.querySelector('.play--btn__icon');
        // const audioProgressTiming = document.querySelector('#audioProgress');//
        // const audioTimePassed =  document.querySelector('#currentTime');//
        // const audioTimeTotal =  document.querySelector('#durationTime');//
        

        // const loadTrack = () => {

        //     addZero = n => n < 10 ? '0' + n : n;
           
        //     // const track = playlist[trackIndex];
        //     // audioImg.src = `./audio/${track}.jpg`
        //     // audioHeader.textContent = track.toUpperCase();
        //     // audioPlayer.src = `./audio/${track}.mp3`


        //     audioPlayer.src = "http://xn--80aalqalhjoq5a.xn--p1ai:8000/stream";
        //     // audioPlayer.play(); 
        //     // if (isPlayed){
        //     //     audioPlayer.play();
        //     // } else {
        //     //     audioPlayer.pause();
        //     // }


        //     // audioButtonPlay.addEventListener('click', () =>{
        //     //     this.radioPlay();
        //     //     console.log('click');
        //     // });

            
        // };

        // audioPlayer.addEventListener('timeupdate', () => {
        //     const duration = audioPlayer.duration;
        //     console.log(duration);
        //     const currentTime = audioPlayer.currentTime;
        //     console.log(currentTime);
        //     const progress = (currentTime / duration) * 100;
        //     console.log(progress);
    
        //     audioProgressTiming.style.width = progress + '%';
    
        //     const minutesPassed = Math.floor(currentTime / 60) || '0';
        //     const secondsPassed = Math.floor(currentTime % 60) || '0';
    
        //     const minutesTotal = Math.floor(duration / 60) || '0';
        //     const secondsTotal = Math.floor(currentTime % 60) || '0';
    
        //     audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        //     audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
    
        // });


        // audioProgress.addEventListener('click', event => {
        //        const x = event.offsetX; 
        //        const allWidth = audioProgress.clientWidth;
        //        const progress = (x / allWidth) * audioPlayer.duration;
        //        audioPlayer.currentTime = progress;
        
        // });
    

        // loadTrack();
        
    },


    // updateProgress: function() {

    //     if (this.lastTrack && this.lastTrack.ts && this.lastTrack.length) {
    //         this.showProgress = true;
    //         let timeFromStart = (+ new Date()) - this.lastTrack.ts;
    //         if (timeFromStart > this.lastTrack.length) {
    //             timeFromStart = this.lastTrack.length;
    //         }
    //         this.playbackTime = this.formatTime(timeFromStart / 1000);
    //         this.totalTrackTime = this.formatTime(this.lastTrack.length / 1000);
    //         this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;

    //         if (this.playingProgress >= 100) {
    //             this.refreshTrackdata();
    //         }

    //     }

    //     else {
    //         this.showProgress = false;
    //     }

    //     // Update UI
    //     let progressWrap = document.getElementById('trackProgressWrap');
    //     if (!progressWrap) {
    //         return;
    //     }
    //     let progressWidth = progressWrap.offsetWidth;
    //     let barWidth = 100 - this.playingProgress;
    //     let pixWidth = progressWidth * (barWidth / 100.);
    //     this.trackProgress = progressWidth - pixWidth;
    //     this.pbbStyle.left = `${this.trackProgress}px`;
    // },



};


// radioClimat.refreshTrackdata();
radioClimat.data();



// console.log(radioClimat.lastTrack);
// console.log(radioClimat.trackImage);
console.log(radioClimat.data);