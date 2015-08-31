app.controller('HomeCtrl', function($scope, $rootScope, $state, $ionicHistory){
  console.log('CTRL: Home');

  $scope.navigate = function (title) {
    $rootScope.showFooter = false;
    $state.go(title);
  };
});
