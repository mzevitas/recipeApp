(function () {

  angular.module('Recipe', ['ngRoute', 'ngCookies'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
    .constant('PARSE_URI', 'https://api.parse.com/1')
    .config( function ($routeProvider) {


      $routeProvider.when('#/signUp', {
        templateUrl: 'scripts/users/user-signup.html',
        controller: 'UserController'
      });

      $routeProvider.when('#/login', {
        templateUrl: 'scripts/users/user-login.html',
        controller: 'UserController'
      });



      //$routeProvider.when('/addRecipe', {
      //  templateUrl: 'scripts/recipe/add_recipe.html'
      //  //controller: ''
      //});



    });

}());

(function () {

  angular.module('Recipe')
    .controller('UserController', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.addUser = function (user) {
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
      function ($http, $location, $cookieStore, PARSE_HEADERS) {


        var signUp = function (user) {
          $http.post(PARSE_URI + 'users', user, PARSE_HEADERS).success(function (data) {
            $location.path('#/');


          });
        };

        var login = function (user) {
          var params = 'email=' + user.email + '&password=' + user.password;
          $http.get('https://api.parse.com/1/login/?' + params, PARSE_HEADERS)
            .success(function (data) {
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
