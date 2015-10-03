
app.controller('EventCtrl', function($scope, $rootScope, $state, $stateParams, eventData, $ionicHistory, reminderService) {
  console.log('CTRL: Event');


  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.event = eventData.get($stateParams.id);

  $scope.hasImage = ($scope.event.img.length > 0);

  console.log($scope.hasImage);

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
