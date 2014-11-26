(function (){

  angular.module('Recipe')
    .controller('UserLoginController', ['$scope', '$http', '$location', 'PARSE_HEADERS',
    function ($scope, $http, $location, PARSE_HEADERS){

    }

      $scope.addWhiskey = function (whiskey) {
        WhiskeyFactory.addWhiskey(whiskey);
      };
    ]);

}());
