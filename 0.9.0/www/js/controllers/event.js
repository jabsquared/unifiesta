app.controller('EventCtrl', function($scope, $state, eventData, scheduleReminder) {
  $scope.event = eventData.get($stateParams.id);

  $scope.schedule = function (single_event) {
    scheduleReminder.schedule(single_event);
  };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

});
