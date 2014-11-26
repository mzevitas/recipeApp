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
