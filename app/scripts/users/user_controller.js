(function () {

  angular.module('Recipe')
    .controller('UserController', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.signUp = function (user) {
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
