app.controller('BoothMapCtrl', function($scope, $state, $stateParams, leafletData, $ionicHistory) {
  console.log('CTRL: BoothMap');

  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    console.log("navigator.geolocation works well");
  }

  // Feilds
  $scope.findMe = false;
  $scope.lat = 0;
  $scope.long = 0;
  $scope.iconColor = {
    color: '#DDDDDDFF'
  };
  $scope.info = {};
  $scope.showCard = false;

  var watchID;
  // Fetching frequency, every sec...
  var watchOptions = {
    frequency: 1000,
    timeout: 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  $scope.markers = [{
    lat: 47.307492,
    lng: -122.230582,
    focus: false,
    draggable: false,
    message: "Main Stage!",
    icon: {
      type: 'extraMarker',
      icon: 'fa-music',
      markerColor: '#f00',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307263,
    lng: -122.231312,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    icon: {
      type: 'extraMarker',
      icon: 'fa-car',
      markerColor: 'blue',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307367,
    lng: -122.229776,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: 'jabSquared',
      website: 'jabsquared.ninja',
      desc: 'We build website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }];

  // onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  var onSuccess = function(position) {
    console.log('rending location!');
    $scope.lat = position.coords.latitude;
    $scope.long = position.coords.longitude;
    console.log('marker lat: ' + $scope.lat);
    console.log('marker long: ' + $scope.long);

    // Since Watching fetch data many time, this call will just stack up marker over and over again...

    if ($scope.markers.length > 3) {
      $scope.markers.pop();
    }

    $scope.markers.push({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      focus: true,
      // TODO: Fix auto focus. Only works with message.
      message: 'You are Here!',
      draggable: false,
      icon: {
        iconUrl: '/img/location.png'
      }
    });
    $scope.auburn.lat = $scope.lat;
    $scope.auburn.lng = $scope.long;
  };

  // onError Callback receives a PositionError object
  var onError = function(error) {
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  };

  $scope.dissableGeoLocation = function() {
    $scope.findMe = false;
    console.log('Clearing watchID');
    $scope.iconColor = {
      color: '#DDDDDDFF'
    };
    navigator.geolocation.clearWatch(watchID);
    // TODO: Fix bug. Marker shows after being popped.
    // $scope.markers.pop();
    if ($scope.markers.length > 3) {
      $scope.markers.pop();
    }
    console.log($scope.markers);
    $scope.auburn.lat = 47.307492;
    $scope.auburn.lng = -122.230582;
  };

  $scope.toggleGeoLocation = function() {
    $scope.findMe = !$scope.findMe;
    if ($scope.findMe) {
      console.log('About to get location');
      $scope.iconColor = {
        color: '#387EF5'
      };
      watchID = navigator.geolocation.watchPosition(
        onSuccess,
        onError, {
          enableHighAccuracy: false
        });
      return;
    }
    $scope.dissableGeoLocation();
  };

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    auburn: {
      lat: 47.307492,
      lng: -122.230582,
      zoom: 17,
      bounceAtZoomLimits: true
    },
    center: {
      autoDiscover: true
    },
    events: {
      markers: {
        enable: ['click']
          //logic: 'emit'
      }
    },
    controls: {
      scale: false
    },
  });

  $scope.$on('leafletDirectiveMarker.click', function(e, args) {
    if (args.leafletEvent.target.options.info) {
      console.log(args.leafletEvent.target.options.info);
      $scope.info = args.leafletEvent.target.options.info;
      $scope.showCard = true;
    } else {
      $scope.info = {};
      $scope.showCard = false;
    }
  });

  $scope.goBack = function() {
    $scope.dissableGeoLocation();
    $ionicHistory.goBack();
  };

});
