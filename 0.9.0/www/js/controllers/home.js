app.controller('HomeCtrl', function($scope, $state, $ionicHistory, sponsorData){
  $scope.navigate = function (title) {
    $state.go(title);
  };
});
