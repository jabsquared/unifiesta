app.controller('HomeCtrl', ['$scope', '$state', '$ionicHistory', 'sponsorData', function($scope, $state, $ionicHistory, sponsorData){
  console.log('CTRL: Home');

  $scope.navigate = function (title) {
    $state.go(title);
  };
}]);
