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
              return checkUser();
            });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return checkUser();
        };


        var checkUser = function (user) {
          var user = $cookieStore.get('currentUser');
          if(user) {
            $('#user').html('Welcome back ' + user.username);
            $('.loginbtn').hide();
            $('.signupbtn').hide();
            $location.path('/profile');
          } else {
            $('#user').html('Please Log In');
            $location.path('/login');
          }
        };

        var currentUser = function () {
          return $cookieStore.get('currentUser');
        }


        return {
          login: login,
          logout: logout,
          signUp: signUp,
          checkUser: checkUser

        }
      }

    ]);

}());
