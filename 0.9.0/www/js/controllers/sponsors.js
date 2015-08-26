app.controller('SponsorsCtrl', function($scope, $state,$ionicHistory, sponsorData, $rootScope) {
  console.log('CTRL: Sponsors');

  $scope.sps = sponsorData.all();


  console.log($rootScope.showFooter);

  $scope.toggle = function() {
    // Bring the thing down.
    $rootScope.showFooter = false;

    $state.go('sponsors');
  };

  $scope.goBack = function() {
    $rootScope.showFooter = true;

    $ionicHistory.goBack();

  };
});
