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
