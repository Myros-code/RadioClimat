class RadioClimat {

    constructor (){
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
        // this.API_KEY = 'd1aa4cc43434aa21dae36425fec7828f';
    }



    getData = async (url) => {
        
        const res =await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }

    // getTestData = () => {
    //     return  this.getData('test.json');
    // }

    // getTestCard = () => {
    //     return this.getData('card.json');
    // }

    // getSearchResult = query => {
    //   this.temp = `${this.SERVER}/search/tv/?api_key=${this.API_KEY}&query=${query}&language=ru-RU`;
    //   return  this.getData(this.temp);
    // }

    // getNextPage = page => {
    //     return  this.getData(this.temp + '&page=' + page);
    // }





    // getTvShow = id => {
    //     return this.getData(`${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`);
    // }

    // getTopRated = () => this.getData(`${this.SERVER}/tv/top_rated?api_key=${this.API_KEY}&language=ru-RU`);

    // getPopular = () => this.getData(`${this.SERVER}/tv/popular?api_key=${this.API_KEY}&language=ru-RU`);

    // getWeek = () => this.getData(`${this.SERVER}/tv/on_the_air?api_key=${this.API_KEY}&language=ru-RU`);

    // getToday = () => this.getData(`${this.SERVER}/tv/airing_today?api_key=${this.API_KEY}&language=ru-RU`);

    getServers = () =>{return this.getData(`${this.SERVER}api/v2/servers/`);}

    getServerChanels = () =>{return this.getData(`${this.SERVER}/api/v2/channels/?server=1 `);}
    
    getEfirHistory = () =>{return this.getData(`${this.SERVER}/api/v2/history/`);}

    getDjs = () =>{return this.getData(`${this.SERVER}/api/djs`);}


    getTrack = () =>{return this.getData(`${this.SERVER}/api/v2/music/49`);}



    // let url = `${this.apiBase}/music/${this.lastTrack.all_music_id}/`;



   

    
}

const radioClimat = new RadioClimat();


radioClimat.getEfirHistory().then((response) => CreateEfir(response));

radioClimat.getTrack().then((response) => getTrackData(response));


const CreateEfir = (response) => {
    console.log(response);
    const currentTrackNum = 0;
    const currentTrackData = response[currentTrackNum];
    console.log(currentTrackData);

    currentTrackID = response[currentTrackNum].all_music_id;
    console.log(currentTrackID);
}



const getTrackData = (response) => {
    console.log(response);

}

console.log(radioClimat.getServers());
console.log(radioClimat.getServerChanels());
console.log(radioClimat.getEfirHistory());
console.log(radioClimat.getDjs());
console.log(radioClimat.getTrack());
