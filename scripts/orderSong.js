// // const nameInput = document.querySelector('#nameInput');
// // const phoneInput = document.querySelector('#phoneInput');
// // const emailInput = document.querySelector('#emailInput');
// // const orderInput = document.querySelector('#orderInput');

// // const countries = [

// //     {country: "RU", code: '+7',  length:15, pattern:"+[0-9]\s[0-9]{3}\s[0-9]{4}\s[0-9]{3}"},
// //     {country: "UA", code: '+380',  length:17, pattern:"+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}"},
// //     {country: "KZ", code: '+77',  length:15, pattern:"+[0-9]{2}\s[0-9]{4}\s[0-9]{4}"},
// //     {country: "LT", code: '+370',  length:15, pattern:"+[0-9]{3}\s[0-9]{4}\s[0-9]{4}"},
// //     {country: "BY", code: '+375',  length:17 , pattern:"+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}"},

// // ];


// // inputNumber.addEventListener('input', function() {
// //     const country = countries.find(n => !this.value.indexOf(n.code));
// //     inputNumber.length = country ? country.length : '20';
// //     inputNumber.pattern = country ? country.pattern : '[0-9]{,20}';
// // });
// data() {
//     return {
//       translations: {
//         en: {
//           back: "Previous",
//           next: "Next",
//           search: "Search",
//           request: "Request",
//           nothingFound: "Nothing found",
//           loadError: "There was an error while trying to load music",
//           requestTrack: "Request",
//           paginatePrev: "Prev",
//           paginateNext: "Next",
//           trackrequestModalTitle: "Track request",
//           trackrequestModalSubmit: "Submit",
//           trackrequestModalCancel: "Cancel",
//           trackArtist: "Artist",
//           trackTitle: "Title",
//           listenerName: "Your name",
//           listenerMessage: "Shoutout",
//           charactersLeft: "Characters left",
//           trackRequestSuccessfull:
//             "Your track request has been sent successfully.",
//           trackrequestModalClose: "Close",
//           trackRequestFailure: "Request failed, please try again later.",
//           trackRequestBlocked:
//             "This track has already been requested recently, please try again later.",
//           trackRequestBlockedIp:
//             "You have already made a request recently, please try again later."
//         },
//         fr: {
//           back: "Précédent",
//           next: "Suivant",
//           search: "Recherche",
//           request: "Demande",
//           nothingFound: "Rien n'a été trouvé",
//           loadError: "Une erreur s'est produite lors du chargement de la musique",
//           requestTrack: "Requête",
//           paginatePrev: "Préc",
//           paginateNext: "Suiv",
//           trackrequestModalTitle: "Demande de musique",
//           trackrequestModalSubmit: "Soumettre",
//           trackrequestModalCancel: "Annuler",
//           trackArtist: "Artiste",
//           trackTitle: "Titre",
//           listenerName: "Votre nom",
//           listenerMessage: "Message",
//           charactersLeft: "Caractères restants",
//           trackRequestSuccessfull:
//             "Votre demande de piste a été envoyée avec succès.",
//           trackrequestModalClose: "Fermer",
//           trackRequestFailure: "La demande a échoué, veuillez réessayer plus tard.",
//           trackRequestBlocked:
//             "Cette piste a déjà été demandée récemment, veuillez réessayer plus tard.",
//           trackRequestBlockedIp:
//             "Vous avez déjà fait une demande récemment, veuillez réessayer plus tard."
//         },
//         ru: {
//           back: "Назад",
//           next: "Вперед",
//           search: "Поиск",
//           request: "Заказать",
//           nothingFound: "Ничего не найдено",
//           loadError: "Ошибка загрузки трэков",
//           requestTrack: "Заказать",
//           paginatePrev: "Назад",
//           paginateNext: "Вперед",
//           trackrequestModalTitle: "Заказ песни",
//           trackrequestModalSubmit: "Отправить",
//           trackrequestModalCancel: "Отмена",
//           trackArtist: "Исполнитель",
//           trackTitle: "Название",
//           listenerName: "Представьтесь",
//           listenerMessage: "Сообщение в эфир",
//           charactersLeft: "Осталось сиволов",
//           trackRequestSuccessfull: "Ваша заявка успешно отправлена.",
//           trackrequestModalClose: "Закрыть",
//           trackRequestFailure: "Ошибка, попробуйте повторить позже.",//1
//           trackRequestBlocked://1
//             "Этот трэк уже был заказан недавно, попробуйте повторить запрос позже.",
//           trackRequestBlockedIp://1
//             "Вы уже заказывали трэк недавно, попробуйте повторить запрос позже."
//         }
//       },
//       page: 0,
//       offset: 10,
//       search_q: "",
//       tracks: [],
//       totalPages: 0,
//       loadError: false,
//       loading: false,
//       nothingFound: false,
//       showModal: false,
//       maxMessageLength: 300,
//       selectedTrack: null,
//       charactersLeft: 300,
//       trackRequestSuccessfull: false,//1 
//       trackRequestUnsuccessfull: false,//1
//       name: "",
//       message: "",
//       language: "en",
//       trackImageFailover: ""
//     };
//   },



















// function resetRequestData() {
//     this.trackRequestUnsuccessfull = this.trackRequestSuccessfull = this.trackRequestBlocked = this.trackRequestBlockedIp = this.trackRequestFailure = false;
//   },
//   sendRequest() {
//     let url = `${this.apiBase}/track_requests/`;
//     let data = {
//       server_id: this.serverId,
//       person: this.name,
//       message: this.message,
//       music_id: this.selectedTrack.id,
//       ip_timeout: this.ipTimeout,
//       track_timeout: this.trackTimeout,
//     };
//     this.resetRequestData();
//     axios
//       .post(url, data)
//       .then(response => {
//         this.trackRequestSuccessfull = true;
//         this.selectedTrack = null;
//       })
//       .catch(e => {
//         this.trackRequestUnsuccessfull = true;
//         /// Track blocked
//         if (e.response.data && e.response.data.track_blocked) {
//           this.trackRequestBlocked = true;
//         } else if (e.response.data && e.response.data.ip_blocked) {
//           /// Ip blocked
//           this.trackRequestBlockedIp = true;
//         } else {
//           // General error
//           this.trackRequestFailure = true;
//         }
//         this.selectedTrack = null;
//       });
//   },









//   function orderCheck (){
//     const nameInput = document.querySelector('#nameInput');
// const phoneInput = document.querySelector('#phoneInput');
// const emailInput = document.querySelector('#emailInput');
// const orderInput = document.querySelector('#orderInput');

// const countries = [

//     {country: "RU", code: '+7',  length:15, pattern:"+[0-9]\s[0-9]{3}\s[0-9]{4}\s[0-9]{3}"},
//     {country: "UA", code: '+380',  length:17, pattern:"+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}"},
//     {country: "KZ", code: '+77',  length:15, pattern:"+[0-9]{2}\s[0-9]{4}\s[0-9]{4}"},
//     {country: "LT", code: '+370',  length:15, pattern:"+[0-9]{3}\s[0-9]{4}\s[0-9]{4}"},
//     {country: "BY", code: '+375',  length:17 , pattern:"+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}"},

// ];


// phoneInput.addEventListener('input', function() {
//     // console.log(this);
//     // console.log(this.value);
//     // console.log(this.value.indexOf);
//     // console.log("vvod");
//     // const country = countries.find(n => !this.value.indexOf(n.code));
//     // console.log(country );
//     // console.log(country);
//     // inputNumber.length = country ? country.length : '20';
//     // inputNumber.pattern = country ? country.pattern : '[0-9]{,20}';
// });

// }