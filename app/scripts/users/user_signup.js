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
