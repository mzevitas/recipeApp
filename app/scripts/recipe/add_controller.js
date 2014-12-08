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



      $scope.openFilePicker = function () {

       filepicker.setKey("AcTWNDhu6RM25T2p8o86gz");

       filepicker.pick(
         {
           mimetypes: ['image/*', 'text/plain'],
           container: 'window',
           services: ['COMPUTER', 'FACEBOOK', 'GMAIL'],
         },
         function (Blob) {
           console.log(JSON.stringify(Blob));
         },
         function (FPError) {
           console.log(FPError.toString());
         }
       );
     };


    }]);
}());


