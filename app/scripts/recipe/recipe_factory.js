(function (){

  angular.module('Recipe')
    .factory('RecipeFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, $cookieStore, PARSE_HEADERS) {


        var url = 'https://api.parse.com/1/classes/Recipe/';

        var getIngred = function () {
          return $http.get(url, PARSE_HEADERS);
        };

        var addIngred = function (ingred) {
          $http.post(url, ingred, PARSE_HEADERS)
            .success( function () {
              $location.path('/');
            }
          );
        };

        var deleteIngred = function (wID) {
          return $http.delete(url + wID, PARSE_HEADERS);
        };

        return {
          getIngred: getIngred,
          addIngred: addIngred,
          deleteIngred: deleteIngred
        }

      }
    ]);
}());
