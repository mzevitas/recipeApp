(function () {

  angular.module('Recipe', ['ngRoute', 'ngCookies'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'FYN9rd7vsrQZXkBs1wV24CsZjHqoK8UnYSAtjAFt',
        'X-Parse-REST-API-Key': 'x0slvTxdLwWvbU3O6qzFU0NuWEhJ5nkcx0khi3EK',
        'Content-Type': 'application/json'
      }
    })
    //.constant('https://api.parse.com/1/')
    .config( function ($routeProvider) {


      $routeProvider.when('/signup', {
        templateUrl: 'scripts/users/user-signup.html',
        controller: 'UserController'
      });

      $routeProvider.when('/login', {
        templateUrl: 'scripts/users/user-login.html',
        controller: 'UserController'
      });



      $routeProvider.when('/addRecipe', {
        templateUrl: 'scripts/recipe/add_recipe.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/', {
        templateUrl: 'scripts/recipe/home.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/viewrecipe/:rid', {
        templateUrl: 'scripts/recipe/single-page.html',
        controller: 'singlePage'
      });

      $routeProvider.when('/breakfast/:category', {
        templateUrl: 'scripts/recipe/breakfast.html',
        controller: 'addRecipe'
      });

      $routeProvider.when('/profile', {
        templateUrl: 'scripts/recipe/profile.html',
        controller: 'addRecipe'
      });

    });




}());

(function () {

  angular.module('Recipe')
    .controller('UserController', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.signUp = function (user) {
          UserFactory.signUp(user);
        };

        $scope.login = function (user) {
          UserFactory.login(user);
        };

        $scope.logout = function () {
          UserFactory.logout();
        };

      }
    ]);

}());

(function () {

  angular.module('Recipe')
    .factory('UserFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location,  $cookieStore, PARSE_HEADERS) {


        var signUp = function (user) {
          $http.post('https://api.parse.com/1/users/', user, PARSE_HEADERS).success(function (data) {
            $location.path('/');
          });
        };

        var login = function (user) {
          var params = '?username=' + user.username + '&password=' + user.password;
          $http.get('https://api.parse.com/1/login/' + params, PARSE_HEADERS)
            .success(function (data) {
              $location.path('/');
              $cookieStore.put('currentUser', data);
              return checkUser();
            });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return checkUser();
        };


        var checkUser = function (user) {
          var user = $cookieStore.get('currentUser');
          if(user) {
            $('#user').html('Welcome back ' + user.username);
            $('.loginbtn').hide();
            $('.signupbtn').hide();
            $location.path('/profile');
          } else {
            $('#user').html('Please Log In');
            $location.path('/login');
          }
        };

        var currentUser = function () {
          return $cookieStore.get('currentUser');
        }


        return {
          login: login,
          logout: logout,
          signUp: signUp,
          checkUser: checkUser

        }
      }

    ]);

}());

(function (){

  angular.module('Recipe')
    .factory('RecipeFactory', ['$http', '$location', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, $cookieStore, PARSE_HEADERS) {



        var getRecipe = function () {
          return $http.get('https://api.parse.com/1/classes/Recipe/', PARSE_HEADERS);
        };

        var addRecipe = function (recipe) {
          $http.post('https://api.parse.com/1/classes/Recipe/', recipe, PARSE_HEADERS)
            .success( function () {

              $location.path('/');
            }
          );


        };

        var getSingle = function (rid) {
          return $http.get('https://api.parse.com/1/classes/Recipe/' + rid, PARSE_HEADERS);
        };


        var findCategory = function (category) {
          return $http.get('https://api.parse.com/1/classes/Recipe/' + category, PARSE_HEADERS);
        };







        return {
          getRecipe: getRecipe,
          addRecipe: addRecipe,
          getSingle: getSingle,
          findCategory: findCategory
        }

      }
    ]);
}());

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
