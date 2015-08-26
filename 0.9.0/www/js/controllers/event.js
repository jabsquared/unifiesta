
app.controller('EventCtrl', function($scope, $state, $stateParams, eventData, $ionicHistory, scheduleReminder) {
  console.log('CTRL: Event');

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.event = eventData.get($stateParams.id);

  $scope.schedule = function (single_event) {
    scheduleReminder.schedule(single_event);
  };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

});
