(function () {

  angular.module('Recipe', ['ngRoute'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
    .config( function ($routeProvider) {

      $routeProvider.when('/login', {
        templateUrl: 'scripts/users/user-login.html',
        controller: 'UserLoginController'
      });

      $routeProvider.when('/signup', {
        templateUrl: 'scripts/users/user-signup.html',
        controller: 'UserSignUpController'
      })

    });

}());
