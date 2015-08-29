app.controller('HomeCtrl', function($scope, $state, $ionicHistory){
  console.log('CTRL: Home');

  $scope.navigate = function (title) {
    $state.go(title);


  };
});
