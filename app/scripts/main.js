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
        templateUrl: 'scripts/recipe/add_recipe.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/', {
        templateUrl: 'scripts/recipe/home.html',
        controller: 'addRecipe'
      });



    });




}());
