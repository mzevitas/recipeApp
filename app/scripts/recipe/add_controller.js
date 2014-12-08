(function (){

  angular.module('Recipe')
    .controller('addRecipe', ['$scope', 'RecipeFactory',
    function ($scope, RecipeFactory){

      RecipeFactory.getRecipe().success( function(data){
      $scope.recipe= data.results;

    });

      $scope.addRecipe = function (recipe) {
        RecipeFactory.addRecipe(recipe);





        //
        //
        //
        //
        //
        //
        //function hasGetUserMedia() {
        //  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        //  navigator.mozGetUserMedia || navigator.msGetUserMedia);
        //}
        //
        //if (hasGetUserMedia()) {
        //  // Good to go!
        //} else {
        //  alert('getUserMedia() is not supported in your browser');
        //}
        //
        //var errorCallback = function(e) {
        //  console.log('Reeeejected!', e);
        //};
        //
        //navigator.getUserMedia  = navigator.getUserMedia ||
        //navigator.webkitGetUserMedia ||
        //navigator.mozGetUserMedia ||
        //navigator.msGetUserMedia;
        //
        //var video = document.querySelector('video');
        //
        //if (navigator.getUserMedia) {
        //  navigator.getUserMedia({audio: true, video: true}, function(stream) {
        //    video.src = window.URL.createObjectURL(stream);
        //  }, errorCallback);
        //} else {
        //  video.src = 'somevideo.webm'; // fallback.
        //}
        //
        //var hdConstraints = {
        //  video: {
        //    mandatory: {
        //      minWidth: 250,
        //      minHeight: 250
        //    }
        //  }
        //};
        //
        //navigator.getUserMedia(hdConstraints, errorCallback);
        //
        //
        //
        //var vgaConstraints = {
        //  video: {
        //    mandatory: {
        //      maxWidth: 640,
        //      maxHeight: 360
        //    }
        //  }
        //};
        //
        //navigator.getUserMedia(vgaConstraints, errorCallback);
        //
        //
        //MediaStreamTrack.getSources(function(sourceInfos) {
        //  var audioSource = null;
        //  var videoSource = null;
        //
        //  for (var i = 0; i != sourceInfos.length; ++i) {
        //    var sourceInfo = sourceInfos[i];
        //    if (sourceInfo.kind === 'audio') {
        //      console.log(sourceInfo.id, sourceInfo.label || 'microphone');
        //
        //      audioSource = sourceInfo.id;
        //    } else if (sourceInfo.kind === 'video') {
        //      console.log(sourceInfo.id, sourceInfo.label || 'camera');
        //
        //      videoSource = sourceInfo.id;
        //    } else {
        //      console.log('Some other kind of source: ', sourceInfo);
        //    }
        //  }
        //
        //  sourceSelected(audioSource, videoSource);
        //});
        //
        //function sourceSelected(audioSource, videoSource) {
        //  var constraints = {
        //    audio: {
        //      optional: [{sourceId: audioSource}]
        //    },
        //    video: {
        //      optional: [{sourceId: videoSource}]
        //    }
        //  };
        //
        //  navigator.getUserMedia(constraints, errorCallback);
        //}
        //
        //function fallback(e) {
        //  video.src = 'fallbackvideo.webm';
        //}
        //
        //function success(stream) {
        //  video.src = window.URL.createObjectURL(stream);
        //}
        //
        //if (!navigator.getUserMedia) {
        //  fallback();
        //} else {
        //  navigator.getUserMedia({video: true}, success, fallback);
        //}



      };


    }]);


}());
