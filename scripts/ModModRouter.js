const app = document.querySelector(".app");
// const centerContentBody = document.querySelector('.center-content-body');
const audioPlayer = document.querySelector('#audioPlayer');

let hellopreloader = document.getElementById("hellopreloader_preload");


audioPlayer.src = "http://xn--80aalqalhjoq5a.xn--p1ai:8000/stream";

class RadioClimat {

    constructor() {
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
    }

    todayDate = () => {
        let date = new Date();
        return `${date.getFullYear()}-${+date.getMonth()+1}-${date.getDate()}`;
    }

    dataObj = {};

    dataPlayLists = {};

    data = (response) => {

        console.log(response);
        let data = response.results[0];
        let timeFromStart = (+new Date()) - data.ts;
        let duration = data.length;
        this.dataObj = {
            data,
            timeFromStart,
            songName: data.title,
            groupName: data.playlist_title,
            img_url: data.img_large_url,
            duration,
            playbackTime: radioClimat.formatTime(timeFromStart / 1000),
            totalTrackTime: radioClimat.formatTime(duration / 1000),
            currentTrackID: data.all_music_id,
            playingProgress: (timeFromStart / duration) * 100,

        }
        return this.dataObj;

    }

    playListImg = (response) => {

    }

    dataTrack = (response) => {
        // console.log(response);
        this.dataObj.albumName = response.album;
    }

    getData = async (url) => {

        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
    }

    sendData = async (url, settings) => {
        const res = await fetch();
    }

    getWeekShchedule = () => {
        return this.getData(`${this.SERVER}/api/v2/grid/?end_ts=${(+new Date()) + 86400*7}&server=1&start_ts=${(+new Date())}`)
    }

    getDayShchedule = () => {
        return this.getData(`${this.SERVER}/api/v2/grid/?end_ts=${(+new Date()) + 86400}()}&server=1&start_ts=${(+new Date())}`);
    }

    getServers = () => {
        return this.getData(`${this.SERVER}api/v2/servers/`);
    }

    getServerChanels = () => {
        return this.getData(`${this.SERVER}/api/v2/channels/?server=1`);
    }

    getCurrent = () => {
        return this.getData(`${this.SERVER}api/v2/history/?limit=1&offset=0&server=1`);
    }

    // getPlayListImg = (id,name) => {

    //     this.getAllMusic.then(response => {

    //         console.log(response);

    //     });

    // }

    // getNextDayTs = () => {
    //    nextDayTs =  + (new Date()) + 86400;
    //    return nextDayTs;
    // }

    getSchedule = () => {
        return this.getData(`http://xn--80aalqalhjoq5a.xn--p1ai:8080/api/schedule/`);
    }

    getPlayLists = () => {
        return this.getData(`${this.SERVER}/api/v2/playlists/`);
        // http://xn--80aalqalhjoq5a.xn--p1ai:8080/api/v2/playlists/2/
    }

    getPlayList = (id) => {
        return this.getData(`${this.SERVER}/api/v2/playlists/${id}`);
        // http://xn--80aalqalhjoq5a.xn--p1ai:8080/api/v2/playlists/2/
    }



    getAllMusic = () => {
        return this.getData(`${this.SERVER}api/v2/music/`);
    }

    getEfirHistory = () => {
        return this.getData(`${this.SERVER}/api/v2/history/`);
    }

    getDjs = () => {
        return this.getData(`${this.SERVER}/api/djs`);
    }

    getDj = () => {
        return this.getData(`${this.SERVER}/api/djs/1`);
    }

    getTrackInfo = (id) => {
        return this.getData(`${this.SERVER}api/v2/music/${id}`);
    }

    refreshTrackdata = () => {
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
        let pad = function (n) {
            return (n < 10 ? "0" + n : n);
        };

        sec = parseInt(sec);
        let h = Math.floor(sec / 3600),
            m = Math.floor((sec / 3600) % 1 * 60),
            s = sec % 60;
        if (h > 0) {
            return pad(h) + ":" + pad(m) + ":" + pad(s);
        } else {
            return pad(m) + ":" + pad(s);
        }
    }

};

const radioClimat = new RadioClimat();

setInterval(() => {
    radioClimat.getCurrent().then(response => radioClimat.data(response));
    radioClimat.getCurrent().then(response => radioClimat.getTrackInfo(response.results[0].all_music_id)).then(response => radioClimat.dataTrack(response));
}, 1000);


const getPlayListsData = () => {


    //   radioClimat.getWeekShchedule().then(response => {
    //     radioClimat.dataPlayLists = {};


    //     response.forEach( (elem, i)=>{

    //         let playlist = {
    //             count: i,
    //             name: elem.name,
    //         };

    //         radioClimat.dataPlayLists[i] =  playlist;

    //     });


    // radioClimat.getWeekShchedule().then(response => {
    //     radioClimat.dataPlayLists = {};


    //     response.forEach( (elem, i)=>{

    //         let playlist = {
    //             count: i,
    //             name: elem.name,
    //         };

    //         radioClimat.dataPlayLists[i] =  playlist;

    //     });



    // .then(() => {
    //     console.log(radioClimat.dataPlayLists.forEach(elem =>{
    //         console.log(elem);
    //     }))

    // });

    // radioClimat.getAllMusic().then((response) => {
    //     console.log(response);

    //     // response.find((response));

    //     response.forEach(elem, i, arr => {
    //         elem.find('Макс Корж');
    //         console.log(elem);
    //     })

    // });

    // });



}

const getPlayListImg = (id,name) => {

    radioClimat.getAllMusic().then(response => {

    console.log(response) ;

    });

}

// getPlayListsData();


function preloaderInit(){
        
    if (hellopreloader.style.display != 'flex') {
        hellopreloader.style.opacity = 1;
        hellopreloader.style.display = 'flex';
    }

}
function preloaderHide(){
    setTimeout(() => {

        hellopreloader.style.opacity = 1;

        let interhellopreloader = setInterval(function () {
    
            hellopreloader.style.opacity = hellopreloader.style.opacity - 0.05;
            if (hellopreloader.style.opacity <= 0.05) {
    
                clearInterval(interhellopreloader);
    
                hellopreloader.style.display = "none";
    
            }
    
        }, 16);

    }, 1000);


}

const showPreloader = () => {

    preloaderInit();

    preloaderHide()
   
}

console.log(radioClimat.getDayShchedule());
console.log(radioClimat.getData(`${radioClimat.SERVER}/api/v2/grid`));


const start = () => {

    radioClimat.getCurrent().then(response => radioClimat.data(response)).then(()=>showPreloader());
    radioClimat.getCurrent().then(response => radioClimat.getTrackInfo(response.results[0].all_music_id)).then(response => radioClimat.dataTrack(response));

    let radioPage = `
    <div class="page radio-page" >  
   
        <div class="sidebar radio-sidebar">
   
            <a class="sidebar-logo" href="/radio">
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
                            <img src="${(function(){ if (radioClimat.dataObj.img_url == null){ return './src/images/обложка.png'} else { return radioClimat.dataObj.img_url}})()}" alt="albom-cover" id="audioImg" class="albom__img">
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
                    <div class="progres-value" id="audioProgress" ></div>
                    <span class="time current" id = "currentTime">${radioClimat.dataObj.playbackTime}</span>
                    <span class="time duration" id = "durationTime">${radioClimat.dataObj.totalTrackTime}</span>
                </div>
   
                <div class="names">
                    <span class="group-name" id = "groupName">${radioClimat.dataObj.groupName}</span>
                    <span class="song-name" id = "songName">${radioClimat.dataObj.songName}</span>
                    <span class="albom-name" id = "albomName">${radioClimat.dataObj.albumName}</span>
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

    app.innerHTML = radioPage;

    Player.radioPlay();

    setInterval(() => {
        Player.setSongNames(radioClimat.dataObj.songName, radioClimat.dataObj.groupName, radioClimat.dataObj.albumName);
        Player.setTimeProgress(radioClimat.dataObj.playbackTime, radioClimat.dataObj.totalTrackTime);
        Player.setBarProgress(radioClimat.dataObj.playingProgress);
    }, 1000);

   



Router.mobMenuInit();
Router.init();
Router.handlerInit();

}

const createRadioPage = () => {
    showPreloader();
    // preloaderInit();
    
    if (app.firstChild.nextSibling.classList.contains("radio-page")) {

        const search = document.querySelector(".search-input");
        mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
        search.style.opacity = "1";
        search.style.visibility = "visible";

    } 

    else {

        // if (app.firstChild.nextSibling.classList.contains("main-page")){
        //     showPreloader();
        // }

        let radioPage = `
        <div class="page radio-page" >  
       
            <div class="sidebar radio-sidebar">
       
                <a class="sidebar-logo" href="/radio">
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
                                <img src="${(function(){ if (radioClimat.dataObj.img_url == null){ return './src/images/обложка.png'} else { return radioClimat.dataObj.img_url}})()}" alt="albom-cover" id="audioImg" class="albom__img">
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
                        <div class="progres-value" id="audioProgress" ></div>
                        <span class="time current" id = "currentTime">${radioClimat.dataObj.playbackTime}</span>
                        <span class="time duration" id = "durationTime">${radioClimat.dataObj.totalTrackTime}</span>
                    </div>
       
                    <div class="names">
                        <span class="group-name" id = "groupName">${radioClimat.dataObj.groupName}</span>
                        <span class="song-name" id = "songName">${radioClimat.dataObj.songName}</span>
                        <span class="albom-name" id = "albomName">${radioClimat.dataObj.albumName}</span>
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

        app.innerHTML = radioPage;

        Player.radioPlay();

        // setInterval(() => {
        //     Player.setSongNames(radioClimat.dataObj.songName, radioClimat.dataObj.groupName, radioClimat.dataObj.albumName);
        //     Player.setTimeProgress(radioClimat.dataObj.playbackTime, radioClimat.dataObj.totalTrackTime);
        //     Player.setBarProgress(radioClimat.dataObj.playingProgress);
        // }, 1000);

        Router.mobMenuInit();



    }

    Router.init();
    Router.handlerInit();
    // preloaderHide()
  

};


const createMainPage = () => {

    // showPreloader();
    // preloaderInit();


    if (app.firstChild.nextSibling.classList.contains("main-page")) {

        const search = document.querySelector(".search-input");
        mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
        search.style.opacity = "1";
        search.style.visibility = "visible";

    } else {

        let mainPage = `


        <div class="page main-page" >
       
        <div class="content main-content">
       
            <div class="styling-block">
       
            </div>
       
       
            <div class="sidebar main-sidebar">

                
                <a class="sidebar-logo" href="/radio">
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

               
               
       
                    <a class="mobile-logo" href="/radio">
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
                            
                        </div>
       
                    </div>
       
                    <div class="mobile-efirs">
       
       
                        <h2 class="title sidebar--title">Сегодня в ефире</h1>
       
       
                        <div class="efirs">

                        </div>
       
       
                    </div>
       
       
                    <div class="shchedule__block main-content-body__block">
       
                        <h1 class="title block--title">Расписание</h1>
       
                        <div class="schedule-items">
       
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
                            <span class="group-name" id ="groupName">${radioClimat.dataObj.groupName}</span>
                            <span class="albom-name"id ="albomName" >${radioClimat.dataObj.albumName}</span>
                        </div>
       
                        <div class="second">
                            <span class="song-name" id ="songName"${radioClimat.dataObj.songName}</span>
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
                        <span class="time current" id = "currentTime">${radioClimat.dataObj.playbackTime}</span>
                        <span class="time duration" id = "durationTime">${radioClimat.dataObj.totalTrackTime}</span>
                    </div>
       
                    <div class="volume">
                        <input class="volume-item" type="range" id="volume" name="volume"
                        min="0" max="1" step ="0.01">
                    </div>
                       
            </div>
       
        </div>
       
        </div>`;
        app.innerHTML = mainPage;

        Player.radioPlay();

        Router.mobMenuInit();
    }
    
    // Router.mobMenuInit();
    Router.init();
    Router.handlerInit();

  

  

};



const createPodcastsPage = () => {
    // console.log(mobMenu.style.top);
    // if (mobMenu.style.top != "-800px"){

    //     mobMenu.style.top = "-800px";

    // }

    let podcasts = ` 
    <div class="center-content-page schedule--center-content-page" >
    <div class="leading__block center-content-body__block">

        <h1 class="title block--title">Наши ведущие</h1>

        <div class="leading-items">

        
            
        </div>

    </div>

    <div class="mobile-efirs">


        <h2 class="title sidebar--title">Сегодня в ефире</h1>


        <div class="efirs"> 

        </div>
    


    </div>


    <div class="shchedule__block main-content-body__block">

        <h1 class="title block--title">Расписание</h1>

        <div class="schedule-items">

        </div>

    </div>


    </div>`;

    const centerContentBody = document.querySelector('.center-content-body');

    centerContentBody.innerHTML = podcasts;
    let efirBlock = document.querySelectorAll('.efirs');

    if (efirBlock[1]){
        console.log(efirBlock[1]);
        while (efirBlock[1].firstChild) {
            efirBlock[1].removeChild(efirBlock[1].firstChild);
        }
    }

    // efirBlock.forEach(elem =>() => {
    //     console.log(elem);
    //     // while (elem.firstChild) {
    //     //     elem.removeChild(elem.firstChild);
    //     // }
    // });

    let leadingBlock = document.querySelector('.leading-items');
    let scheduleBlock = document.querySelector('.schedule-items');
   

    // console.log(efirBlock);


    radioClimat.getDjs().then(response => {

        response.objects.forEach((elem, i) => {
            // console.log(elem);

            let leadItem = `
           <div class="lead-item">
       
           <a href="#!" class="lead-item__link">
   
               <figure class="lead-item__figure">
   
                   <div class="lead-img__wrap">
                       <img src="${elem.image}" alt="Dj" class="lead-img">
                   </div>
                   
                   <figcaption class="lead-name"><h3>${elem.name}</h3></figcaption>
   
               </figure>
   
           </a>
           </div>`;

            leadingBlock.innerHTML += leadItem;
        });

    });


    radioClimat.getWeekShchedule().then(response => {

        

        response.forEach((elem, i) => {
            // getPlayListImg(elem.id,elem.name);

            let scheduleItem = `<div class="schedule-item" id = "schedule-item_${i}">

            <a href="#!" class="schedule-item__link">

                <figure class="schedule-item__figure">

                    <div class="schedule-img__wrap">
                        <img src="./src/images/schedule-1.png" alt="" class="schedule-img">
                    </div>

                    <figcaption class="schedule-info">

                        <h3 class="news-name">${elem.name}</h3>

                        <div class="news-post__date">

                            <span class="date-post">${elem.start_date}</span>

                            <span class="time-post">${elem.start_time}</span>

                        </div>
                    
                    </figcaption>

                </figure>

            </a>

            </div>`;

            

            scheduleBlock.innerHTML += scheduleItem;

            if(elem.start_date === radioClimat.todayDate()){
            
                console.log(elem);
                console.log("da");

                let efirItem = `
                <div class="efir-item">
       
                <a href="#!" class="efir-item__link">

                    <figure class="efir-item__figure">

                        <div class="efir-img__wrap">
                            <img src="./src/images/efir-img.png" alt="" class="efir-img">
                        </div>

                        <figcaption class="efir-info">

                            <h3 class="efir-name">${elem.name}</h3>

                            <div class="efir-post__date">

                                <span class="time-post">${elem.start_time}</span>

                            </div>
                        
                        </figcaption>

                    </figure>

                </a>

                </div>`;

                efirBlock.forEach(block => {

                    block.innerHTML += efirItem;

                });
                    
            }

        });

    }).then(()=>preloaderHide());


    // preloaderHide();




}

const CreateOrderPage = () => {


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

    const centerContentBody = document.querySelector('.center-content-body');

    centerContentBody.innerHTML = order;


    let efirBlock = document.querySelectorAll('.efirs');

    if (efirBlock[0]){
        console.log(efirBlock[1]);
        while (efirBlock[0].firstChild) {
            efirBlock[0].removeChild(efirBlock[0].firstChild);
        }
    }

  

    radioClimat.getWeekShchedule().then(response => {

        response.forEach((elem, i) => {

            if(elem.start_date === radioClimat.todayDate()){
            
                let efirItem = `
                <div class="efir-item">
       
                <a href="#!" class="efir-item__link">

                    <figure class="efir-item__figure">

                        <div class="efir-img__wrap">
                            <img src="./src/images/efir-img.png" alt="" class="efir-img">
                        </div>

                        <figcaption class="efir-info">

                            <h3 class="efir-name">${elem.name}</h3>

                            <div class="efir-post__date">

                                <span class="time-post">${elem.start_time}</span>

                            </div>
                        
                        </figcaption>

                    </figure>

                </a>

                </div>`;

                efirBlock.forEach(block => {

                    block.innerHTML += efirItem;

                });
                    
            }

        });

    }).then(()=>preloaderHide());

    // preloaderHide();


};




// `класс` роутера
let Router = {


    // маршруты и соответствующие им обработчики
    routes: {
        "/" : "start",
        "/radio": "radio",
        "/main": "main",
        "/main/order": "main_order",
        // "/main/feeds/": "main_feeds",
        // "/main/schedule": "main_shchedule",
        // "/main/podcasts/": "main_podcasts",
    },


    mobMenuInit: function () {

        const mobMenuToggleBtn = document.querySelector("#mobMenuToggle");
        const mobMenuToggleImg = document.querySelector("#mobMenuToggleImg");
        const mobMenu = document.querySelector(".mob-menu");
        const search = document.querySelector(".search-input");
        const menuNavBtns = document.querySelectorAll('.mob-menu__nav-item');

        console.log(mobMenu.style.top);



        menuNavBtns.forEach(elem => {

            elem.addEventListener('click', ()=>{

                if (mobMenu.style.top != "-800px"){
                    mobMenu.style.top = "-800px";
                }

            })

        });

        mobMenuToggleBtn.addEventListener("click", () => {

            if (mobMenu.style.top == "83px") {

                mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
                search.style.opacity = "1";
                search.style.visibility = "visible";
                mobMenu.style.top = "-800px";

            } else {

                mobMenuToggleImg.src = "../src/images/mobMenuOff.svg";
                search.style.opacity = "0";
                search.style.visibility = "hidden";
                mobMenu.style.top = "83px";

            }


        });



    },



    replay: function () {
        Router.init();

        // запускаем главную страницу
        Router.dispatch('/radio');

        Router.init();

        // обработчик нажатий на ссылки
        let handler = event => {

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
        for (let anchor of anchors) anchor.onclick = handler;

    },

    // метод проходиться по массиву routes и создает
    // создает объект на каждый маршрут
    init: function () {

        // объявляем свойство _routes
        this._routes = [];
        for (let route in this.routes) {

            // имя метода-обрботчика
            let method = this.routes[route];

            // добавляем в массив роутов объект
            this._routes.push({

                // регулярное выражение с которым будет сопоставляться ссылка
                // ее надо преобразовать из формата :tag в RegEx
                // модификатор g обязателен
                pattern: new RegExp('^' + route.replace(/:\w+/g, '(\\w+)') + '$'),

                // метод-обработчик
                // определяется в объекте Route
                // для удобства
                callback: this[method]
            });

        }

    },

    handlerInit: function () {
        let handler = event => {

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
        for (let anchor of anchors) anchor.onclick = handler;

    },

    dispatch: function (path) {

        if (window.screen.width < 415) {

            //     const mobMenuToggleImg = document.querySelector("#mobMenuToggleImg");
            const mobMenu = document.querySelector(".mob-menu");
            //     const search = document.querySelector(".search-input");

            mobMenu.style.top = "-800px";
            //     mobMenuToggleImg.src = "../src/images/mobMenuOn.svg";
            //     search.style.visibility = "visible";
            //     search.style.opacity = "1";

            //     console.log('menshe');

        }


        // количество маршрутов в массиве
        var i = this._routes.length;

        // цикл до конца
        while (i--) {

            // если запрошенный путь соответствует какому-либо
            // маршруту, смотрим есть ли маршруты
            var args = path.match(this._routes[i].pattern);

            // если есть аргументы
            if (args) {

                // вызываем обработчик из объекта, передавая ему аргументы
                // args.slice(1) отрезает всю найденную строку
                this._routes[i].callback.apply(this, args.slice(1))
            }
        }
    },


    // обработчик
    // главной страницы
    start: function () {
      
        start();
    },

    radio: function () {
        // preloaderInit();
      createRadioPage();
    //   preloaderHide();
    },


    // контроллер статей
    main: function () {
        preloaderInit();
       createMainPage();
        createPodcastsPage();
    },

    main_order: function () {
        preloaderInit();
        createMainPage();
        CreateOrderPage();
    },


};


let Player = {

    setSongNames: function (songName, groupName, albumName) {

        const songNameField = document.querySelector('#songName');
        const groupNameField = document.querySelector('#groupName');
        const albumNameField = document.querySelector('#albomName');

        songNameField.textContent = songName;
        groupNameField.textContent = groupName;
        albumNameField.textContent = albumName;

    },

    setTimeProgress: function (passed, total) {

        const audioTimePassed = document.querySelector('#currentTime'); //
        const audioTimeTotal = document.querySelector('#durationTime'); //

        audioTimePassed.textContent = passed;
        audioTimeTotal.textContent = total;

    },

    setBarProgress: function (playingProgress) {

        let progressWrap = document.querySelector('.progres');
        let audioProgressTiming = document.querySelector('#audioProgress'); //

        if (playingProgress >= 100) {
            radioClimat.refreshTrackdata();
        }

        if (!progressWrap) {
            return;
        }

        let progressWidth = progressWrap.offsetWidth;
        let barWidth = 100 - playingProgress;
        let pixWidth = progressWidth * (barWidth / 100.);
        let trackProgress = progressWidth - pixWidth;

        audioProgressTiming.style.width = `${trackProgress}px`;

    },

    refresh: function () {
        this.setSongNames(songName, groupName, albumName);
        this.setSongNames(passed, total);
        this.setSongNames(playingProgress);
    },


    radioPlay: function () {

        const audioButtonPlayImg = document.querySelector('.play--btn__icon');
        const audioButtonPlay = document.querySelector('#audioButtonPlay'); //

        const volume = document.querySelector('#volume');

        if (volume) {
            volume.addEventListener('change', (elem) => {
                audioPlayer.volume = elem.target.value;
            });

        }

        this.checkPlay(audioButtonPlayImg, audioButtonPlay);


        audioButtonPlay.addEventListener('click', () => {

            radioClimat.refreshTrackdata();

            const isPlayed = audioPlayer.paused;

            if (isPlayed) {

                audioPlayer.play();
                audioButtonPlayImg.src = './src/images/pause.png';

            } else {

                audioPlayer.pause();
                audioButtonPlayImg.src = './src/images/play-lg.svg';

            }

        });

    },

    checkPlay: function (audioButtonPlayImg, audioButtonPlay) {

        if (!audioPlayer.paused) {

            audioButtonPlayImg.src = './src/images/pause.png';

        } else {

            audioButtonPlayImg.src = './src/images/play-lg.svg';
        }

    },





};