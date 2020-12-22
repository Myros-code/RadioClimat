const app = document.querySelector(".app");
// const centerContentBody = document.querySelector('.center-content-body');
const audioPlayer = document.querySelector('#audioPlayer');

let hellopreloader = document.getElementById("hellopreloader_preload");


audioPlayer.src = "http://xn--80aalqalhjoq5a.xn--p1ai:8000/stream";



let APP = {

    data: () => {

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
        };
    },

    methods: {

        stop: function() {
            clearInterval(this.timerHandle);
            clearInterval(this.refreshTrackHandle);
        },

        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        vote: function(up) {
            this.voteRowHeight = document.getElementById('track_st_vote-row').clientHeight;
            if (this.lastTrack && this.lastTrack.all_music_id) {
                let url = `${this.apiBase}/music/${this.lastTrack.all_music_id}/`;
                url += up ? 'like/' : 'dislike/';
                axios.post(url)
                    .then(response => {
                        if (response.data) {
                            this.trackLikes = response.data.up;
                            this.trackDislikes = response.data.down;
                        }
                    })
                    .catch(e => {
                        if (e.response.data && e.response.data.result === "already_voted") {
                            alert(this.translations[this.lang].already_voted);
                        }
                    });
            }
        },

        voteUp: function() {
            this.vote(true);
        },

        voteDown: function() {
            this.vote(false);
        },

        updateProgress() {

            if (this.lastTrack && this.lastTrack.ts && this.lastTrack.length) {
                this.showProgress = true;
                let timeFromStart = (+ new Date()) - this.lastTrack.ts;
                if (timeFromStart > this.lastTrack.length) {
                    timeFromStart = this.lastTrack.length;
                }
                this.playbackTime = this.formatTime(timeFromStart / 1000);
                this.totalTrackTime = this.formatTime(this.lastTrack.length / 1000);
                this.playingProgress = (timeFromStart / this.lastTrack.length) * 100;
                if (this.playingProgress >= 100) {
                    this.refreshTrackdata();
                }
            }

            else {
                this.showProgress = false;
            }

            // Update UI
            let progressWrap = document.getElementById('trackProgressWrap');
            if (!progressWrap) {
                return;
            }

            let progressWidth = progressWrap.offsetWidth;
            let barWidth = 100 - this.playingProgress;
            let pixWidth = progressWidth * (barWidth / 100.);
            this.trackProgress = progressWidth - pixWidth;
            this.pbbStyle.left = `${this.trackProgress}px`;
            
        },
        formatTime(sec) {
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
        },
        refreshTrackdata() {
            axios.get(`${this.apiBase}/history/?limit=1&offset=0&server=${(this.serverId || 1)}`)
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
    },
    created: function() {
        // Create styles
        let rgbBg = this.hexToRgb(this.bgcolor);
        this.styleObject = {
            'background-color': `rgba(${rgbBg.r}, ${rgbBg.g}, ${rgbBg.b}, ${this.bgopacity})`
        };
        if (this.bgimage) {
            this.styleObject['background'] = `url('${this.bgimage}') no-repeat center center`;
            this.styleObject['-webkit-background-size'] = "cover";
            this.styleObject['-moz-background-size'] = "cover";
            this.styleObject['-o-background-size'] = "cover";
            this.styleObject['background-size'] = "cover";
        }




    }

}

class RadioClimat {

    constructor() {
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
    }


  









    todayDate = () => {
        let date = new Date();
        return `${date.getFullYear()}-${+date.getMonth()+1}-${date.getDate()}`;
    }

    dataObj = {
      

    };



    dataPlayLists = {};

    data = (response) => {

        let data = response.results[0];
        let timeFromStart = (+new Date()) - data.ts;
        let duration = data.length;
        this.dataObj = {
            data,
            timeFromStart,
            songName: data.title,
            lastTrackId : data.id,
            lastTrackAll_music_id : data.all_music_id,
            groupName: data.playlist_title,
            img_url: data.img_large_url,
            duration,
            playbackTime: radioClimat.formatTime(timeFromStart / 1000),
            totalTrackTime: radioClimat.formatTime(duration / 1000),
            currentTrackID: data.all_music_id,
            playingProgress: (timeFromStart / duration) * 100,
            canVote: false,

            translations: {

                ru: {
                    already_voted: "Вы уже голосовали за этот трэк",
                    likes: "За",
                    dislikes: "Против",
                },
    
            },

        }
        
        return this.dataObj;

    }

    vote = (up) => {

        if (this.dataObj.data && this.dataObj.lastTrackAll_music_id) {

            let url = `${this.SERVER}api/v2/music/${this.dataObj.lastTrackAll_music_id}/`;

            url += up ? 'like/' : 'dislike/';

           

            this.sendData(url,{}).then(response => {
                if (response) {
                    this.dataObj.trackLikes = response.up;
                    this.dataObj.trackDislikes = response.down;
                }

            })
            .catch(e => {
                if (e){
                    alert(this.dataObj.translations.ru.already_voted);
                }
            });

        }
    }

    voteUp = () => {
        this.vote(true);
    }

    

    voteDown = () => {
        this.vote(false);
    }


    playListImg = (response) => {

    }

    dataTrack = (response) => {
        this.dataObj.albumName = response.album;
        this.dataObj.trackLikes = response.human_up + response.auto_up;
        this.dataObj.trackDislikes = response.human_down + response.auto_down;
    }

    getData = async (url) => {

        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
    }

    sendData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (res.ok) {
            return await res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
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
