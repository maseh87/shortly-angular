angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();
})
.directive('card', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attr) {

    },
    templateUrl: 'app/links/link.tpl.html',
    replace: true
  };
});
