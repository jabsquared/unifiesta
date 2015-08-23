app.controller('SponsorsCtrl', function($scope, $state, $rootScope) {
  $scope.sps = [];
  for (var i = 0; i < 9; ++i) {
    $scope.sps[i] = '../img/sps/s' + -~i + '.jpg';
  }
  $scope.toggle = function() {
      $rootScope.showFooter = !$rootScope.showFooter;
    };
});
