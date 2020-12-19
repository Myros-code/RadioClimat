class RadioClimat {

    constructor (){
        this.SERVER = 'http://xn--80aalqalhjoq5a.xn--p1ai:8080/';
        // this.API_KEY = 'd1aa4cc43434aa21dae36425fec7828f';
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

   
    // let url = `${this.apiBase}/music/${this.lastTrack.all_music_id}/`;
    
}




const radioClimat = new RadioClimat();





let trackStatus = {
    props: [
        'apiBase', 'serverId', 'lang',
        'bgcolor', 'bgimage', 'bgopacity',
        'meta_font_size','meta_font_style','meta_font_color','meta_opacity',
        'progress_bar_color', 'progress_bar_bg_color', 'progress_bar_height', 'progress_opacity', 'progress_font_color', 'progress_font_opacity',
        'track_image_default', 'track_image_size',
        'vote_buttons_color', 'vote_show',
        'vote_results_font_color_neg', 'vote_results_font_color_pos', 'vote_results_font_size',
        ],
    apiBase: "http://xn--80aalqalhjoq5a.xn--p1ai:8080/",
    serverId: 1,
    lang: ru,

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

    mounted() {
        window.sc_vueTrackWidget = this;
    },

    beforeDestroy: () => {
        this.stop();
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
        // Metadata styling
        let rgbMeta = this.hexToRgb(this.meta_font_color);
        this.metaStyle = {
            'font-size': `${this.meta_font_size}px`,
            'color': `rgba(${rgbMeta.r}, ${rgbMeta.g}, ${rgbMeta.b}, ${this.meta_opacity})`,
            'font-style': this.meta_font_style,
        }
        // Progress bar styling
        let rgbPb = this.hexToRgb(this.progress_bar_color);
        let rgbPbBg = this.hexToRgb(this.progress_bar_bg_color);
        let rgbPbFnt = this.hexToRgb(this.progress_font_color);
        this.metaStyle = {
            'font-size': `${this.meta_font_size}px`,
            'color': `rgba(${rgbMeta.r}, ${rgbMeta.g}, ${rgbMeta.b}, ${this.meta_opacity})`,
            'font-style': this.meta_font_style,
        }
        this.pbStyle = {
            'background': `rgba(${rgbPb.r}, ${rgbPb.g}, ${rgbPb.b}, ${this.progress_opacity})`,
            'height': `${this.progress_bar_height}px`,
        }
        this.pbbStyle = {
            'height': `${this.progress_bar_height}px`,
            'background': `rgb(${rgbPbBg.r}, ${rgbPbBg.g}, ${rgbPbBg.b})`,
        }
        this.pbtStyle = {
            'color': `rgba(${rgbPbFnt.r}, ${rgbPbFnt.g}, ${rgbPbFnt.b}, ${this.progress_font_opacity})`,
        }
        // Current track
        this.coverStyle = {
            width: `${this.track_image_size}%`
        }
        this.trackImageFailover = this.track_image_default;
        // Vote buttons style
        let rgbVoteBtn = this.hexToRgb(this.vote_buttons_color);
        this.voteBtnStyle = {
            fill: `rgb(${rgbVoteBtn.r}, ${rgbVoteBtn.g}, ${rgbVoteBtn.b})`
        }
        // Vote buttons styling
        let rgbVoteNeg = this.hexToRgb(this.vote_results_font_color_neg);
        let rgbVotePos = this.hexToRgb(this.vote_results_font_color_pos);
        this.voteResultNeg = {
            'color': `rgb(${rgbVoteNeg.r}, ${rgbVoteNeg.g}, ${rgbVoteNeg.b})`,
            'font-size': `${this.vote_results_font_size}px`,
            'line-height': this.voteRowHeight + 'px',
        }
        this.voteResultPos = {
            'color': `rgb(${rgbVotePos.r}, ${rgbVotePos.g}, ${rgbVotePos.b})`,
            'font-size': `${this.vote_results_font_size}px`,
            'line-height': this.voteRowHeight + 'px',
        }
        this.showVote = this.vote_show === 'true';
        this.refreshTrackdata();
        this.refreshTrackHandle = setInterval(() => {
            this.refreshTrackdata();
        }, 15 * 1000);
        this.updateProgress();
        this.timerHandle = setInterval(() => {
            this.updateProgress();
        }, 1000);
    },
}