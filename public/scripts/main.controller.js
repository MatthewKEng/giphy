angular.module('giphyApp')
      .controller('GiphyController', GiphyController);


function GiphyController(goofy) {
  var giphy = this;
  console.log('GiphyController loaded');

  giphy.searchString = '';
  giphy.results = [];
  giphy.images = '';

  // swapi.getFilms()
  //      .then(function(films){
  //        main.films = films;
  //      });

  giphy.getRandomImage = function(){goofy.getRandomImage()
      .then(function (goof) {
        giphy.images = goof;

      });
};


  giphy.getSearchImage = function () {

    if (/\s/.test(giphy.search)) {
      giphy.searchString = (giphy.search).split(' ').join('+');
    } else {
      giphy.searchString = giphy.search;
    }
        goofy.getSearchImage(giphy.searchString)
        .then(function (funny) {
          giphy.results = funny;
        });
      };
    }

    // $http.get(API + '/search?q=' + giphy.searchString + '&' + API_KEY)
    //   .then(function (response) {
    //     var arrayOfSearch = response.data.data;
    //     arrayOfSearch.forEach(function (element) {
    //       var search = element.images.downsized.url;
    //       giphy.results.push(search);
