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


        //var getLogin = function (user) {
        //  $http.post(urlli, user, PARSE_HEADERS)
        //    .success( function () {
        //      $location.path('/');
        //    }
        //  );
        //};
        //
        //


        var postSignUp = function (user) {
          $http.post(urlsu, user, PARSE_HEADERS)
            .success( function () {
              $location.path('/');
            }
          );
        };



        return {
          //getLogin: getLogin,
          postSignUp: postSignUp
        }

      }
    ]);

}());
