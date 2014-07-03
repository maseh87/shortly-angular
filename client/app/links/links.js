angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  var links = [];
  $scope.getLinks = function(){
    Links.getLinks().then(function(data) {
      data.forEach(function(dataObj) {
        links.push(dataObj);
      })
      $scope.data.links = links;
    });
  };
  $scope.getLinks();
});
