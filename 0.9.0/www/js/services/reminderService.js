app.factory('reminderService', function($cordovaLocalNotification, $ionicPopup, eventData) {
  function add(minutes, single_event) {
    console.log("entered add function");

    // create var for current time
    // var now = new Date().getTime();
    // var _5SecondsFromNow = new Date(now + sec * 1000);

    var newDate = subtractMinutes(single_event.start, minutes);

    // Real funtion
    // function subtractMinutes(date_obj, minutes) {
    //   date_obj = new Date(date_obj);
    //   return new Date(date_obj.getTime() - minutes * 60000);
    // }

    function subtractMinutes(date_obj, minutes) {
      new_date_obj = new Date();
      return new Date(new_date_obj.getTime() + minutes * 1000);
      // return new Date(new_date_obj.getTime() + minutes * 6000);
    }

    $cordovaLocalNotification.schedule({
      id: single_event.id,
      title: 'Event Reminder',
      text: single_event.name + ' starts in ' + minutes + ' minutes.',
      at: newDate,
      sound: null,
      icon: 'file://img/main/logo.png',
      smallIcon: 'file://img/small.png',
      led: 'FBA50A',
      badge: 1,
    }).then(function() {
      var alertPopup = $ionicPopup.alert({
        title: "Alert has been Set",
        template: "Thanks!"
      });
      alertPopup.then(function(res) {
        // eventData.reminder(single_event.id, true);
        // console.log('Changed reminder to true!');
      });
    });
  }

  return {
    schedule: function(single_event) {
      eventData.reminder(single_event.id, true);
      console.log('Changed reminder to true!');
      var alarmPopup = $ionicPopup.show({
        title: '<font size="3" class="bold" color="black">Set Reminder</font>',
        // template: "",
        cssClass: 'oneline',
        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
          text: '<font size="3" color="white">5 minutes</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(5, single_event);
            return 10;
          }
        }, {
          text: '<font size="3" color="white">10 minutes</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(10, single_event);
            return 15;
          }
        }, {
          text: '<font size="3" color="white">15 minutes</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(15, single_event);
            return 30;
          }
        }, {
          text: '<font size="2" color="white">Cancel</font>',
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
    },
    cancel: function(event_id) {
      // A confirm dialog
      var confirmPopup = $ionicPopup.confirm({
        title: 'Cancel Reminder',
        template: 'Are you sure you want to cancel this reminder?',
        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
          text: '<font size="3" color="white">No</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            return false;
          }
        }, {
          text: '<font size="3" color="white">Yes</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            return true;
          }
        }]
      });
      confirmPopup.then(function(res) {
        if (res) {
          $cordovaLocalNotification.cancel(event_id).then(function (result) {
            console.log(result);
            eventData.reminder(single_event.id, false);
            console.log('Changed reminder to false!');
          });
          console.log('Yes!');
        } else {
          console.log('Nope!');
        }
      });

    }
  };

  // $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
  //   alert("Added a notification");
  // });
});
