(function (){

  angular.module('Recipe')
    .controller('RecipeFactory', ['$scope', 'RecipeFactory',
    function ($scope, RecipeFactory){

    RecipeFactory.getIngred().success( function(data){
      $scope.recipe= data.results;

    });

      $scope.addIngred = function (recipe) {
        RecipeFactory.addIngred(recipe);
      };


    }]);


}());
