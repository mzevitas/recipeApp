//(function () {
//
//  angular.module('Recipe')
//    .factory('RecipeFactory', ['$http', '$location', 'PARSE_HEADERS',
//      function ($http, $location, PARSE_HEADERS) {
//
//        var url = '';
//
//        var getWhiskies = function () {
//          return $http.get(url, PARSE_HEADERS);
//        };
//
//        var addWhiskey = function (whiskey) {
//          $http.post(url, whiskey, PARSE_HEADERS)
//            .success( function () {
//              $location.path('/');
//            }
//          );
//        };
//
//        var deleteWhiskey = function (wID) {
//          return $http.delete(url + wID, PARSE_HEADERS);
//        };
//
//        return {
//          getWhiskies: getWhiskies,
//          addWhiskey:  addWhiskey,
//          deleteWhiskey: deleteWhiskey
//        }
//
//      }
//    ]);
//
//}());
