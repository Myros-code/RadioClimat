 
 
 
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
         <input type="text" class="order-input__item" placeholder="Ваше имя" id ="nameInput">
     </div>

     <div class="order-input__block">
         <div class="order-desc">Ваш телефон</div>
         <input type="text" class="order-input__item" placeholder="Ваш телефон" id ="phoneInput">
     </div>

     <div class="order-input__block">
         <div class="order-desc">Ваш емаил</div>
         <input type="text" class="order-input__item" placeholder="Ваш емаил" id = "emailInput">
     </div>
 </div>

 <div class="order-text-message">
     <div class="order-desc">Ваш заказ</div>
     <textarea class="order-textarea" placeholder="Ваш заказ" name="" id="orderInput" cols="30" rows="10"></textarea>
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
                    
                   
                     <div class="volume-full__img">
                     <div class="anotherOne">
                     <div class="another">
                    <div class="volume-value__block">
                     <svg  width="124" height="325" viewBox="0 0 124 325" fill="none" xmlns="http://www.w3.org/2000/svg ">
                     <path class="volume-value__path" d="M38.9346 6.38426C65.7656 24.3461 87.194 49.2808 100.916 78.5081C114.638 107.735 120.135 140.15 116.816 172.267C113.497 204.384 101.488 234.99 82.0788 260.793C62.6698 286.597 36.5952 306.622 6.65805 318.718" stroke="url(#paint0_linear)" stroke-width="12" stroke-linecap="round"/>
                     <defs>
                     <linearGradient id="paint0_linear" x1="14.0612" y1="315.968" x2="3.61749" y2="-11.3838" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#4CB8C4"/>
                     <stop offset="0.359375" stop-color="#3CD3AD"/>
                     <stop offset="0.645833" stop-color="#6EEC48"/>
                     <stop offset="1" stop-color="#EF9327"/>
                     </linearGradient>
                     </defs>
                    </svg>
                    </div>
                    </div>
                    </div>
                    </div>






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
                     <span class="group-name" id ="groupName">Group name</span>
                     <span class="albom-name"id ="albomName" >Albom name</span>
                 </div>

                 <div class="second">
                     <span class="song-name" id ="songName">Song name</span>
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
                 <a href="#!" class="player-button__item  play--btn__item "  id ="audioButtonPlay">
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
                 <div class="progres-value" id = "audioProgress"></div>
                 <span class="time current" id = "currentTime">0:00</span>
                 <span class="time duration" id = "durationTime">2:47</span>
             </div>

             <div class="volume">
                 <input class="volume-item" type="range" id="volume" name="volume"
                 min="0" max="1" step ="0.01">
             </div>
                
     </div>

 </div>

</div>`;

let testRadio = ` 

<a href="/main" class="sidebar-nav__item">main</a>

`;

let testMain = `
<a href="/radio"  data-page="radio">radio</a>
`;


class RadioClimat {

    constructor (){
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
    }

    // data = () => {
    //     return {
    //         translations: {
    //             en: {
    //                 already_voted: "You have already voted for this track",
    //                 likes: "Likes",
    //                 dislikes: "Dislikes",
    //             },
    //             ru: {
    //                 already_voted: "Вы уже голосовали за этот трэк",
    //                 likes: "За",
    //                 dislikes: "Против",
    //             },
    //             fr:{
    //                 already_voted: "Vous avez déjà voté pour ce titre",
    //                 likes: "J'Aime",
    //                 dislikes: "J'Aime pas",
    //             }
    //         },
    //         loaded: true,
    //         trackImage: '',
    //         trackImageFailover: '',
    //         trackMetadata: '',
    //         showProgress: false,
    //         playbackTime: '',
    //         pbbStyle: {
    //             left: '0px',
    //         },
    //         voteResultNeg: {
    //             color: null,
    //             'font-size': '12px',
    //             'line-height': '50px',
    //         },
    //         voteResultPos: {
    //             color: null,
    //             'font-size': '12px',
    //             'line-height': '50px',
    //         },
    //         totalTrackTime: '',
    //         // Voting
    //         canVote: false,
    //         trackLikes: 0,
    //         trackDislikes: 0,
    //         voteRowHeight: 50,
    //         styleObject: {
    //         }

    //     } 
        
    // }

    getData = async (url) => {
        
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
    }

    sendData = async (url, settings) => {
        const res = await fetch ();
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
    
};





const radioClimat = new RadioClimat();



 const createRadioTestPage = () => {

    if(app.firstChild.nextSibling.classList.contains("radio-page")){

            
    } else {

        let testRadio = ` 

        <a href="/main" class="sidebar-nav__item">main</a>
        
        `;

        app.innerHTML = testRadio;

        Router.init();
        Router.handlerInit();

    }

 }



 
 const createMainTestPage = () => {

    if(app.firstChild.nextSibling.classList.contains("main-page")){

    } else {
        let testMain = `
        <a href="/radio"  data-page="radio">radio</a>
        `;
        
        app.innerHTML = testMain;

    }
    Router.init();
    Router.handlerInit();

    
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // `класс` роутера
 let Router = {

    // маршруты и соответствующие им обработчики
    routes: {
        "/radio": "radio",
        "/main": "main",
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

    replay: function(){
                
 // инициализируем роутер
      Router.init();
       
      // запускаем главную страницу
      Router.dispatch('/radio');
     
      
      // обработчик нажатий на ссылки
      let handler = event =>  {
         
          // получаем запрошенный url
          let url = new URL(event.currentTarget.href);
         
          // запускаем роутер, предавая ему path
          Router.dispatch(url.pathname);
         
          // запрещаем дальнейший переход по ссылке
          event.preventDefault();
      }
     
      // получаем все ссылки на странице
      let anchors = document.querySelectorAll('a');
     
      // вешаем на событие onclick обработчик
      for( let anchor of anchors ) anchor.onclick = handler;
     

    },

    handlerInit: function(){
        let handler = event =>  {
         
            // получаем запрошенный url
            let url = new URL(event.currentTarget.href);
           
            // запускаем роутер, предавая ему path
            Router.dispatch(url.pathname);
           
            // запрещаем дальнейший переход по ссылке
            event.preventDefault();
        }
       
        // получаем все ссылки на странице
        let anchors = document.querySelectorAll('a');
        console.log(anchors);
       
        // вешаем на событие onclick обработчик
        for( let anchor of anchors ) anchor.onclick = handler;

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
        this.init();
        this.handlerInit();
        radioClimat.getCurrent().then(response => createRadioTestPage());

        this.init();
        this.handlerInit();
        console.log('radio');

    },


    // контроллер статей
    main: function() {
        console.log('main');
        this.init();
        radioClimat.getCurrent().then(response => createMainTestPage());
        this.init();
        this.handlerInit();
    },
   
   
    // контроллер блога компаний
  

}
