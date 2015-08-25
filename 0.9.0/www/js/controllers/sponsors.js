app.controller('SponsorsCtrl', function($scope, $state,$ionicHistory, sponsorData) {
  console.log('CTRL: Sponsors');

  $scope.sps = sponsorData.all();

  $scope.sf = sponsorData.getSf();

  // console.log($scope.sf);

  $scope.toggle = function() {
    // Bring the thing down.
    sponsorData.setSf(false);
    $state.go('sponsors');
  };

  $scope.spsBack = function() {
    $ionicHistory.goBack();
  };

});
