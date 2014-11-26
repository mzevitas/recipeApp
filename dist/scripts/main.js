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
      });

    });

}());

(function () {

  angular.module('Recipe')
    .factory('UserFactory', ['$http', '$location', 'PARSE_HEADERS',
      function ($http, $location, PARSE_HEADERS) {

        var urlsu = 'https://api.parse.com/1/users';
        var urlli = 'https://api.parse.com/1/login'

          var signUp = function () {
          return $http.get(urlsu, PARSE_HEADERS);
        };

        var logIn = function () {
          return $http.get(urlli, PARSE_HEADERS)
        };


        var getLogin = function (logIn) {
          $http.post(urlli, logIn, PARSE_HEADERS)
            .success( function () {
              $location.path('/');
            }
          );
        };




        var postSignUp = function (signUp) {
          $http.post(urlsu, signUp, PARSE_HEADERS)
            .success( function () {
              $location.path('/');
            }
          );
        };



        return {
          getLogin: getLogin,
          postSignUp: postSignUp,
          signUp: signUp,
          logIn: logIn
        }

      }
    ]);

}());

(function (){

  angular.module('Recipe')
    .controller('UserLoginController', ['$scope',  'PARSE_HEADERS',
    function ($scope, $http, $location, PARSE_HEADERS) {


      $scope.getLogin = function (logIn) {
        UserFactory.getLogin(logIn);
      };

    }
    ]);



}());

(function () {

  angular.module('Recipe')
    .controller('UserSignUpController', ['$scope', 'UserFactory',
      function ($scope, UserFactory) {

        UserFactory.signUp('username, email, password').success( function (data) {
          $scope.user = data.results;
        });

        $scope.postSignUp = function (signUp) {
          UserFactory.postSignUp(signUp);
        };



      }]);

}());
