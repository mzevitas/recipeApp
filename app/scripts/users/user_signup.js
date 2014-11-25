(function () {

  angular.module('Recipe')
    .controller('UserSignUpController', ['$scope', 'UserFactory',
      function ($scope, UserFactory) {

        UserFactory.postSignUp('username, email, password').success( function (data) {
          $scope.user = data.results;
        });

        $scope.postSignUp('username, email, password') = function (user) {
          UserFactory.postSignUp(user);
        };



      }]);

}());
