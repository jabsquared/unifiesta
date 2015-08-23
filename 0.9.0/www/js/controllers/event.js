app.controller('EventCtrl', function($scope, $state, $stateParams, $ionicPopup, event_data) {
  $scope.event = event_data.get($stateParams.id);
  $scope.schedule = function(single_event) {
    // convert date string back into date object
    // date_obj = new Date(date_obj);
    // prompt user for reminder options
    var alarmPopup = $ionicPopup.show({
      title: "Set Reminder",
      // template: "",
      cssClass: 'oneline',
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: '5 minutes',
        type: 'button-calm',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(5, single_event);
          return 10;
        }
      }, {
        text: '10 minutes',
        type: 'button-positive',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(10, single_event);
          return 15;
        }
      }, {
        text: '15 minutes',
        type: 'button-royal',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(15, single_event);
          return 30;
        }
      }, {
        text: 'Cancel',
        type: 'button-assertive',
        cssClass: 'oneline',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          return;
        }
      }]
    });
    console.log("alarmPopup:");
    console.log(alarmPopup);
  };

});
