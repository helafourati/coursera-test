(function () {
  'use strict';
  angular.module('myFirstApp', [] )
  .controller('MyFirstController', function ($scope) {
    $scope.name ="Hela";
    $scope.sayHello = function () {
      return "Hello Coursera!";

    };

  });
})();
