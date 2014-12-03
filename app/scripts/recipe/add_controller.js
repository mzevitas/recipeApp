(function (){

  angular.module('Recipe')
    .controller('addRecipe', ['$scope', 'RecipeFactory',
    function ($scope, RecipeFactory){

      RecipeFactory.getRecipe().success( function(data){
      $scope.recipe= data.results;

    });

      $scope.addRecipe = function (recipe) {
        RecipeFactory.addRecipe(recipe);
      };


    }]);


}());
