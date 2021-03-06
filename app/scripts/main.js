(function () {

  angular.module('Recipe', ['ngRoute', 'ngCookies'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
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

      $routeProvider.when('/viewrecipe/:rid', {
        templateUrl: 'scripts/recipe/single-page.html',
        controller: 'singlePage'
      });

      $routeProvider.when('/breakfast', {
        templateUrl: 'scripts/recipe/breakfast.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/profile', {
        templateUrl: 'scripts/recipe/profile.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/lunch', {
        templateUrl: 'scripts/recipe/lunch.html',
        controller: 'addRecipe'
      });
      $routeProvider.when('/dinner', {
        templateUrl: 'scripts/recipe/dinner.html',
        controller: 'addRecipe'
      });
      $routeProvider.when('/dessert', {
        templateUrl: 'scripts/recipe/dessert.html',
        controller: 'addRecipe'
      });
      $routeProvider.when('/apps', {
        templateUrl: 'scripts/recipe/apps.html',
        controller: 'addRecipe'
      });
      $routeProvider.when('/drinks', {
        templateUrl: 'scripts/recipe/drinks.html',
        controller: 'addRecipe'
      });

    });




}());
