(function () {

  angular.module('Recipe')
    .factory('UserFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, $cookieStore, PARSE_HEADERS) {


        var register = function (user) {
          $http.post('https://api.parse.com/1/users', user, PARSE_HEADERS).success( function (data) {

          });
        };

        var login = function (user) {
          var params = 'email='+user.username+'&password='+user.password;
          $http.get('https://api.parse.com/1/login/?'+params, PARSE_HEADERS)
            .success( function (data) {
              $cookieStore.put('currentUser', data);
              return myUser();
            });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return myUser();
        };

        var checkUser = function (user) {
          var user = $cookieStore.get('currentUser');
          console.log(user);
          if(user !== undefined) {
            $('#user').html('Welcome back ' + user.username);
            $location.path('/');
          } else {
            $('#user').html('Please Log In');
            $location.path('/');
          }
        };

        return {
          login:    login,
          logout:   logout,
          register: register,
          checkUser: checkUser
        }

      }
    ]);

}());
