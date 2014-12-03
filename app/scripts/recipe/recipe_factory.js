(function (){

  angular.module('Recipe')
    .factory('RecipeFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, $cookieStore, PARSE_HEADERS) {


        //var url = 'https://api.parse.com/1/classes/Recipe/';

        var getRecipe = function () {
          var steps= recipe.title + recipe.ingredients + recipe.directions + recipe.photo;
          return $http.get('https://api.parse.com/1/classes/Recipe/' + steps, PARSE_HEADERS);
        };

        var addRecipe = function (recipe) {
          $http.post('https://api.parse.com/1/classes/Recipe/', recipe, PARSE_HEADERS)
            .success( function () {

              $location.path('/');
            }
          );
        };



        return {
          getRecipe: getRecipe,
          addRecipe: addRecipe
        }

      }
    ]);
}());
