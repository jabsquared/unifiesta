app.controller('SponsorsCtrl', function($scope, $state, $ionicHistory, sponsorData, $rootScope, $ionicSlideBoxDelegate) {
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
    $rootScope.showFooter = true;
    console.log($rootScope.showFooter);
    $ionicHistory.goBack();
  };

  $scope.currentSlide = 0;
  console.log('Active Slide=' + $scope.currentSlide);

  $scope.slideChanged = function(slide) {
    $scope.currentSlide = $ionicSlideBoxDelegate.currentIndex();
    console.log('Active Slide=' + $scope.currentSlide);
  };
});
