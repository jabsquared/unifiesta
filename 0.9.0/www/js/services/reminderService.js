app.factory('reminderService', function($cordovaLocalNotification, $ionicPopup, eventData) {
  function add(minutes, single_event) {
    console.log("entered add function");

    var newDate = subtractMinutes(single_event.start, minutes);

    // Real funtion
    function subtractMinutes(date_obj, minutes) {
      date_obj = new Date(date_obj);
      console.log(new Date(date_obj.getTime() - minutes * 60000));
      return new Date(date_obj.getTime() - minutes * 60000);
    }

    // function subtractMinutes(date_obj, minutes) {
    //   date_obj = new Date();
    //   console.log(new Date(date_obj.getTime() + 1 * 60000));
    //   return new Date(date_obj.getTime() + 1 * 60000);
    // }

    $cordovaLocalNotification.schedule({
      id: single_event.id,
      title: 'Event Reminder',
      text: single_event.name + ' starts in ' + minutes + ' minutes.',
      at: newDate,
      sound: null,
      icon: 'file://img/main/logo.png',
      smallIcon: 'file://img/small.png',
      led: 'FBA50A',
      badge: 1
    }).then(function() {
      var alertPopup = $ionicPopup.alert({
        title: "Reminder Set,",
        template: "Enjoy!"
      });
      alertPopup.then(function(res) {
        eventData.reminder(single_event.id, true);
        console.log('Changed reminder to true!');
      });
    });
  }

  return {
    schedule: function(single_event) {
      var alarmPopup = $ionicPopup.show({
        title: '<font size="4" class="bold" color="white">establecer notificación</font>',
        // template: "",
        cssClass: 'oneline',
        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
          text: '<font size="3" color="white">5 minutos</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(5, single_event);
            return 10;
          }
        }, {
          text: '<font size="3" color="white">10 minutos</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(10, single_event);
            return 15;
          }
        }, {
          text: '<font size="3" color="white">15 minutos</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            add(15, single_event);
            return 30;
          }
        }, {
          text: '<font size="2" color="white">cancelar</font>',
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
        title: 'cancelar notificación',
        template: 'seguro que desea cancelar esta notificación?',
        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
          text: '<font size="3" color="white">no</font>',
          type: 'button-energized',
          onTap: function(e) {
            // Returning a value will cause the promise to resolve with the given value.
            return false;
          }
        }, {
          text: '<font size="3" color="white">sí</font>',
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
            eventData.reminder(event_id, false);
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
  //   console.log("Added a notification");
  // });
});
