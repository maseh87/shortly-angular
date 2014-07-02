angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = true;
  $scope.getLinks = function() {};
  $scope.addLink = function(link) {
    Links.addLink(link).then(function(data) {
      $scope.loading = false;
    });
  };
});
