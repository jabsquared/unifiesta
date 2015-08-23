app.controller('SponsorsCtrl', function($scope, $state) {
  console.log('CTRL: Sponsors');

  $scope.sps = [];
  for (var i = 0; i < 9; ++i) {
    $scope.sps[i] = '../img/sps/s' + -~i + '.jpg';
  }
  $scope.toggle = function() {

  };

});
