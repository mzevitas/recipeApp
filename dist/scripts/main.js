(function () {

  angular.module('Recipe', ['ngRoute', 'ngCookies'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
    //.constant('https://api.parse.com/1/')
    .config( function ($routeProvider) {


      $routeProvider.when('/signup', {
        templateUrl: 'scripts/users/user-signup.html',
        controller: 'UserController'
      });

      $routeProvider.when('/login', {
        templateUrl: 'scripts/users/user-login.html',
        controller: 'UserController'
      });



      $routeProvider.when('/addRecipe', {
        templateUrl: 'scripts/recipe/add_recipe.html'
        //controller: ''
      });



    });

}());

(function () {

  angular.module('Recipe')
    .controller('UserController', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.signUp = function (user) {
          UserFactory.signUp(user);
        };

        $scope.login = function (user) {
          UserFactory.login(user);
        };

        $scope.logout = function () {
          UserFactory.logout();
        };

      }
    ]);

}());

(function () {

  angular.module('Recipe')
    .factory('UserFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location,  $cookieStore, PARSE_HEADERS) {


        var signUp = function (user) {
          $http.post('https://api.parse.com/1/users/', user, PARSE_HEADERS).success(function (data) {
            $location.path('/');
          });
        };

        var login = function (user) {
          var params = '?username=' + user.username + '&password=' + user.password;
          $http.get('https://api.parse.com/1/login/' + params, PARSE_HEADERS)
            .success(function (data) {
              $location.path('/');
              $cookieStore.put('currentUser', data);
              return myUser();
            });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return myUser();
        };


        return {
          login: login,
          logout: logout,
          signUp: signUp

        }
      }

    ]);

}());

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

(function (){

  angular.module('Recipe')
    .controller('addRecipe', ['$scope', 'RecipeFactory',
    function ($scope, RecipeFactory){

      RecipeFactory.getRecipe().success( function(data){
      $scope.recipe= data.results;

    });

      $scope.addRecipe = function (recipe) {
        RecipeFactory.addRecipe(recipe);
      };


    }]);


}());

