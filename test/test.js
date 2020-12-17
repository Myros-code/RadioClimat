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
    
    getEfirHistory = () =>{return this.getData(`${this.SERVER}/api/v2/history/?limit=10&offset=0&server=1 `);}

    getTracks = () =>{return this.getData(`${this.SERVER}/api/v2/playlist_tracks/`);}



   

    
}

const radioClimat = new RadioClimat();

console.log(radioClimat.getServers());
console.log(radioClimat.getServerChanels());
console.log(radioClimat.getEfirHistory());
console.log(radioClimat.getTracks());