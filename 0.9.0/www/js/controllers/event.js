app.controller('EventCtrl', function($scope, $sce, $rootScope, $state, $stateParams, eventData, $ionicHistory, reminderService) {
  console.log('CTRL: Event');

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.event = eventData.get($stateParams.id);

  $scope.getURL = function(id) {
    return $sce.trustAsResourceUrl('https://googledrive.com/host/0B6cBGXlREHi2flp4RU16VlVFNWdtZ2owQklTTlQzREU3dUZZUUF6c2lRZDYzTG1qaHc5UUE/' + id + '-min.jpg');
  };

  $scope.hasImage = ($scope.event.img.length > 0);

  console.log($scope.hasImage);

  $scope.schedule = function(singleEvent) {
    if (!singleEvent.reminder) {
      reminderService.schedule(singleEvent);
    } else {
      reminderService.cancel(singleEvent.id);
    }
  };

  $scope.$on('$cordovaLocalNotification:added', function(id, state, json) {
    alert('Added a notification');
  });

});
