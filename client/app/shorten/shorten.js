angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = true;
  $scope.getLinks = function() {};
  $scope.addLink = function() {
    Links.addLink($scope.link).then(function(data) {
      $scope.loading = false;
      $location.path('/links');
    });
  };
});
