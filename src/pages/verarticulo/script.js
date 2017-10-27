angular.module('ionicApp', ['ionic']).directive('dynamic', function ($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function (scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  })
  .controller('AppCtrl', ['$scope', '$sce', function($scope, $sce) {
    var apiResult = 'This is <a  ng-click="doThing()">wonderful!</a>';
    
    $scope.text = apiResult;
    
    $scope.doThing = function(){
      alert('click');
    }
  }]);