angular.module("appRoutes", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/home", {
        templateUrl: "partials/index",
      })
      .when("/about", {
        templateUrl: "partials/index",
      })
      .when("/register", {
        templateUrl: "partials/register",
        controller: "regCtrl",
        controllerAs: "register",
      })
      .when("/login", {
        templateUrl: "partials/login",
      })
      // .otherwise({
      //   redirectTo: "/",
      // });
  },
]);
