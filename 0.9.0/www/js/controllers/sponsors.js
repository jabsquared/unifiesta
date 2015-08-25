app.controller('SponsorsCtrl', function($scope, $state,$ionicHistory, sponsorData) {
  console.log('CTRL: Sponsors');

  $scope.sps = sponsorData.all();

  $scope.sf = true;

  $scope.toggle = function() {
    // Bring the thing down.
    sponsorData.sf = true;
    $state.go('sponsors');
  };

  $scope.spsBack = function() {
    $ionicHistory.goBack();
  };

});
