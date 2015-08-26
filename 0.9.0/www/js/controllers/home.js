app.controller('HomeCtrl', function($scope, $state, $ionicHistory, sponsorData){
  console.log('CTRL: Home');

  $scope.navigate = function (title) {
    $state.go(title);
  };
});
