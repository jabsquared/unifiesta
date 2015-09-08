app.controller('EventsCtrl', function($scope, $ionicScrollDelegate, $rootScope, $state, reminderService, $ionicPlatform, eventData, $ionicHistory) {

  $scope.goBack = function() {
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };

  console.log('CTRL: Events');
  if (!$scope.events)
    $scope.events = eventData.all();

  $scope.go = function(path) {
    $state.go(path);
  };

  $scope.schedule = function(singleEvent) {

    // $ionicScrollDelegate.scrollBottom();

    if (!singleEvent.reminder) {
      reminderService.schedule(singleEvent);
    } else {
      reminderService.cancel(singleEvent.id);
    }
  };

  $scope.$on('$cordovaLocalNotification:added', function(id, state, json) {
    console.log('Added a notification');
  });

});
