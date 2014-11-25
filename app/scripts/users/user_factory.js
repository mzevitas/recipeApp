(function () {

  angular.module('Recipe')
    .factory('UserFactory', ['$http', '$location', 'PARSE_HEADERS',
      function ($http, $location, PARSE_HEADERS) {

        var UserSignupController = 'https://api.parse.com/1/users';
        var urlli = 'https://api.parse.com/1/login'

        var signUp = function () {
          return $http.get(urlsu, PARSE_HEADERS);
        };

        var logIn = function () {
          return $http.get(urlli, PARSE_HEADERS)
        };



        var addWhiskey = function (whiskey) {
          $http.post(url1, whiskey, PARSE_HEADERS)
            .success( function () {
              $location.path('/');
            }
          );
        };

        var deleteWhiskey = function (wID) {
          return $http.delete(url + wID, PARSE_HEADERS);
        };

        return {
          getWhiskies: getWhiskies,
          addWhiskey:  addWhiskey,
          deleteWhiskey: deleteWhiskey
        }

      }
    ]);

}());
