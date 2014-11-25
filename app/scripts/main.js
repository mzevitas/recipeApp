(function () {

  angular.module('Recipe', ['ngRoute'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
    .config( function ($routeProvider) {
    //
    //  $routeProvider.when('/', {
    //    templateUrl: 'scripts/whiskey/home.html',
    //    controller: 'WhiskeyController'
    //  });
    //
    //  $routeProvider.when('/add', {
    //    templateUrl: 'scripts/whiskey/add.html',
    //    controller: 'WhiskeyController'
    //  })
    //
    });

}());
