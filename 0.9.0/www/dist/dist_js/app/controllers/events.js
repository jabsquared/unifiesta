app.controller('EventsCtrl', ['$scope', '$state', 'reminderService', '$ionicPlatform', 'eventData', '$ionicModal', '$ionicHistory', function($scope, $state, reminderService, $ionicPlatform, eventData, $ionicModal, $ionicHistory) {

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
    reminderService.schedule(single_event);
  };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

}]);
