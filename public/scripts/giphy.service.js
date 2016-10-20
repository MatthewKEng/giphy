angular.module('giphyApp')
        .service('goofy', giphyAPIService);


function giphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs';
  var API_KEY =  'api_key=dc6zaTOxFJmzC';


  this.getRandomImage = function() {
    return $http.get(API + '/random?' + API_KEY + '&tag=')
                .then(function(response) {
                  return response.data.data.image_url;
                });
  };

  this.getSearchImage = function(query) {
    return $http.get(API + '/search?q=' + query + '&' + API_KEY)
    .then(function (response) {
      console.log(response);
      return response.data.data;

      });

};


}


//   this.getFilmData = function(url) {
//     return $http.get(url)
//                 .then(function(response) {
//                   return response.data;
//                 });
//   };
// }
