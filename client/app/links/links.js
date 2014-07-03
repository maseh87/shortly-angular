angular.module('shortly.links', [
'ngAnimate',
'fx.animations'
])

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
      console.log(scope.link);
    },
    templateUrl: 'app/links/link.tpl.html',
    replace: true,
    scope: {link: '='}
  };
});
