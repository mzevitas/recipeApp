(function (){

  angular.module('Recipe')
    .controller('singlePage', ['$scope', 'RecipeFactory', '$routeParams',
      function ($scope, RecipeFactory, $routeParams) {

        RecipeFactory.getSingle($routeParams.rid).success( function(data){
          $scope.r= data;
        });



        RecipeFactory.findCategory($routeParams.category).success( function(sortData){
          $scope.r= sortData;
        });



          }
      ]);
}());
