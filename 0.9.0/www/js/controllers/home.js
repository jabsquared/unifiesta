app.controller('HomeCtrl', function($scope, $rootScope, $state, $ionicHistory){
  console.log('CTRL: Home');

  // $scope.raffle // GET from https=
  $scope.raffle = 99;

  $scope.navigate = function (title) {
    $rootScope.showFooter = false;
    $state.go(title);
  };
});
