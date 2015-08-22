app.controller('BoothMapCtrl', function($scope, $state, $stateParams, event_data) {

  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    console.log("navigator.geolocation works well");
  }

  console.log('inside boothmp controller');

  var watchOptions = {
    frequency: 1000,
    timeout: 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  // Feilds
  $scope.findMe = false;
  $scope.long = 0;
  $scope.lat = 0;
  var watchID;

  // onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  //
  var onSuccess = function(position) {
    $scope.long = position.coords.longitude;
    $scope.lat = position.coords.latitude;
    $scope.markers.user = {
      lat: $scope.lat,
      long: $scope.long,
      focus: false,
      draggable: false,
      message: "User!",
      icon: {}
    };
    $ionicPopup.alert({
      title: 'Success!',
      template: 'Your location has been recorded.'
    });
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  }

  $scope.toggleGeoLocation = function() {
    $scope.findMe = !$scope.findMe;
    if ($scope.findMe) {
      console.log('About to get location');
      watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
        enableHighAccuracy: false
      });
    } else {
      console.log('Clearing watchID');
      if (watchID !== null || watchID !== undefined) {
        navigator.geolocation.clearWatch(watchID);
      }
    }
  };

  angular.extend($scope, {
    auburn: {
      lat: 47.307492,
      lng: -122.230582,
      zoom: 17,
      bounceAtZoomLimits: true
    },
    center: {
      autoDiscover: true
    },
    markers: {
      mainStage: {
        lat: 47.307492,
        lng: -122.230582,
        focus: false,
        draggable: false,
        message: "Main Stage!",
        icon: {
          type: 'extraMarker',
          icon: 'fa-home',
          markerColor: '#f00',
          prefix: 'fa',
          shape: 'circle'
        }
      },
      p1: {
        lat: 47.307263,
        lng: -122.231312,
        focus: false,
        draggable: false,
        message: "Parking Lot!",
        icon: {
          // Add custom parking icon or text
        }
      },
      b1: {
        lat: 47.307367,
        lng: -122.229776,
        focus: false,
        draggable: false,
        message: "<div ng-include src=\"'../templates/booths/jabsquared.html'\"></div>",
        icon: {
          type: 'extraMarker',
          icon: 'fa-star',
          markerColor: 'green',
          prefix: 'fa',
          shape: 'circle'
        }
      },
      user: {},
    },
    events: {
      markers: {
        enable: ['dragend']
          //logic: 'emit'
      }
    },
    controls: {
      scale: false
    }
  });

  $scope.$on("leafletDirectiveMarker.dragend", function(event, args) {
    console.log('hola');
    $scope.markers.m1.lat = args.model.lat;
    $scope.markers.m1.lng = args.model.lng;
  });

});
