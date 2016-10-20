angular.module('giphyApp')
      .controller('GiphyController', GiphyController);


function GiphyController(goofy) {
  var giphy = this;
  console.log('GiphyController loaded');

  giphy.searchString = '';
  giphy.results = [];
  giphy.images = '';


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

    
