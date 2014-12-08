(function (){

  angular.module('Recipe')
    .controller('addRecipe', ['$scope', 'RecipeFactory','$routeParams',
    function ($scope, RecipeFactory, $routeParams){

      RecipeFactory.getRecipe().success( function(data){
      $scope.recipe= data.results;

    });

      $scope.addRecipe = function (recipe) {
        RecipeFactory.addRecipe(recipe);

      };




      filepicker.setKey("AcTWNDhu6RM25T2p8o86gz");

      $("#somebutton").on("click", function (e) {
        e.preventDefault();

      filepicker.pick(
        {
          mimetypes: ['image/*', 'video/*', 'text/plain'],
          container: 'window',
          services: ['COMPUTER', 'VIDEO']
        },
        function (Blob) {
          RecipeFactory.addRecipe(Blob)
          console.log(Blob);
          console.log(JSON.stringify(Blob));
        },
        function (FPError) {
          console.log(FPError.toString());

        }
      );
        });




    }]);
}());


