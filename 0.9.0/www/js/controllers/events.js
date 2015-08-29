app.controller('EventsCtrl', function($scope, $state, reminderService, $ionicPlatform, eventData, $ionicModal, $ionicHistory) {

  $scope.reminderStyle = {'background-color' : 'blue'};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  console.log("CTRL: Events");

  $scope.events = eventData.all();
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true;

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
