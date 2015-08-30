app.controller('EventsCtrl', function($scope, $state, reminderService, $ionicPlatform, eventData, $ionicHistory) {

  $scope.goBack = function() {

    $ionicHistory.goBack();
  };

  console.log("CTRL: Events");
  if (!$scope.events)
    $scope.events = eventData.all();

  $scope.go = function(path) {
    $state.go(path);
  };

  $scope.schedule = function (single_event) {
    if (!single_event.reminder){
      reminderService.schedule(single_event);
    } else {
      reminderService.cancel(single_event.id);
    }
  };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

});
