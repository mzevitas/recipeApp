(function (){

  angular.module('Recipe')
    .controller('singlePage', ['$scope', 'RecipeFactory', '$routeParams',
      function ($scope, RecipeFactory, $routeParams) {

        RecipeFactory.getSingle($routeParams.rid).success( function(data){
          $scope.r= data;

        });

        $scope.imageFile.getUrl();

      //RecipeFactory.imageFile.getUrl();

          }
      ]);
}());
