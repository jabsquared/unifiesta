app.controller('SponsorsCtrl', function($scope, $ionicHistory) {
  console.log('CTRL: Sponsors');

  $scope.sps = [];
  for (var i = 0; i < 9; ++i) {
    $scope.sps[i] = 'img/sps/s' + -~i + '.jpg';
  }

  $scope.toggle = function() {
    // Bring the thing down.
  };

  $scope.spsBack = function () {


    $ionicHistory.goBack();
  };

});
