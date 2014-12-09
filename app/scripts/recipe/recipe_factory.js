(function (){

  angular.module('Recipe')
    .factory('RecipeFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, $cookieStore, PARSE_HEADERS) {



        var getRecipe = function () {
          return $http.get('https://api.parse.com/1/classes/Recipe/', PARSE_HEADERS);
        };

        var addRecipe = function (recipe) {
          $http.post('https://api.parse.com/1/classes/Recipe/', recipe, PARSE_HEADERS)
            .success( function () {

              $location.path('/');
            }
          );


        };

        var getSingle = function (rid) {
          return $http.get('https://api.parse.com/1/classes/Recipe/' + rid, PARSE_HEADERS);
        };










        return {
          getRecipe: getRecipe,
          addRecipe: addRecipe,
          getSingle: getSingle
        }

      }
    ]);
}());
