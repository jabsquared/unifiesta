app.controller('EventsCtrl', function($scope, $ionicScrollDelegate, $rootScope, $state, reminderService, $ionicPlatform, eventData, $ionicHistory) {

  $scope.goBack = function() {
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };

  console.log("CTRL: Events");
  if (!$scope.events)
    $scope.events = eventData.all();

  $scope.go = function(path) {
    $state.go(path);
  };

  $scope.schedule = function(single_event) {

    $ionicScrollDelegate.scrollBottom();

    if (!single_event.reminder) {
      reminderService.schedule(single_event);
    } else {
      reminderService.cancel(single_event.id);
    }
  };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

});
