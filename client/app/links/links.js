angular.module('shortly.links', [
'ngAnimate',
'fx.animations'
])

.controller('LinksController', function ($scope, Links, $filter) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    $scope.sites = [];
    Links.getLinks().then(function(data) {
      for (var i = 0; i < data.length; i++) {
        if(data[i].title.length > 30){
          $scope.sites.push({
            title: $filter('titleLength')(data[i].title),
            url: data[i].url,
            code: data[i].code,
            baseUrl: data[i].base_url,
            visits: data[i].visits
          });
        } else {
          $scope.sites.push({
            title: data[i].title,
            url: data[i].url,
            code: data[i].code,
            baseUrl: data[i].base_url,
            visits: data[i].visits
          });
        }
      };
      $scope.data.links = $scope.sites;
    });
  };
  $scope.getLinks();
})

.filter('titleLength', function() {
  return function(title) {
    var result = title;
    result = title.slice(0, 30) + '...';
    return result;
  };
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
