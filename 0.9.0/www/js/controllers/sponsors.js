app.controller('SponsorsCtrl', function($scope, $ionicHistory, sponsorData) {
  console.log('CTRL: Sponsors');

  $scope.sps = sponsorData.all();


  $scope.toggle = function() {
    // Bring the thing down.

  };

  $scope.spsBack = function() {
    $ionicHistory.goBack();
  };

  $scope.slideChanged = function(currSlide) {
    $scope.currentSlide = currSlide;
  };
});
