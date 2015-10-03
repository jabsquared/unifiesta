app.controller('SponsorsCtrl', function($scope, $state, $ionicHistory, sponsorData, $rootScope, $ionicSlideBoxDelegate, $timeout) {
  console.log('CTRL: Sponsors');

  $scope.img = sponsorData.img;

  $scope.url = sponsorData.url;

  console.log($rootScope.showFooter);

  $scope.toggle = function() {
    // Bring the thing down.
    $rootScope.showFooter = false;
    $state.go('sponsors');
  };

  $scope.goBack = function() {
    // $ionicSlideBoxDelegate.update();
    // console.log($rootScope.showFooter);
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };

  $scope.currentSlide = 0;
  // console.log('Active Slide=' + $scope.currentSlide);
  $scope.slideChanged = function(index) {
    $scope.currentSlide = $ionicSlideBoxDelegate.currentIndex();
    // console.log('Active Slide=' + $scope.currentSlide);
    // $scope.$apply();

    $scope.$digest();
  };
});
