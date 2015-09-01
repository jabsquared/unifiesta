app.factory('mapService', function() {
  console.log('SERV: Map ');

  var booth = [{
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
  var boothCount = booth.length;

  var carMarker = {
    type: 'extraMarker',
    icon: 'fa-car',
    markerColor: 'red',
    prefix: 'fa',
    shape: 'circle'
  };

  var pnp = [{ // PARKING #1
    lat: 47.306496,
    lng: -122.232631,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 1,
      address: 'Auburn Station (Southbound)'
    },
    icon: carMarker,
  }, { // PARKING #2
    lat: 47.306631,
    lng: -122.231422,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 2,
      address: 'Auburn Station (Northbound)'
    },
    icon: carMarker,
  }, { // PARKING #3
    lat: 47.307866,
    lng: -122.231431,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 3,
      address: '120 1st St NW, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #4
    lat: 47.308252,
    lng: -122.231476,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 4,
      address: '101-199 1st St NW, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #5
    lat: 47.308301,
    lng: -122.230421,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 5,
      address: '101 N Division St, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #6
    lat: 47.306857,
    lng: -122.230529,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 6,
      address: '22 A St SW, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #7
    lat: 47.306282,
    lng: -122.230538,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 7,
      address: '12 1st St SW, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #8
    lat: 47.307701,
    lng: -122.228734,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 8,
      address: '100 Auburn Ave, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #9 find address
    lat: 47.307701,
    lng: -122.228734,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 9,
      address: '100 Auburn Ave, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #10
    lat: 47.308582,
    lng: -122.226938,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 10,
      address: '159-199 1st St NE, Auburn, WA 98001'
    },
    icon: JSON.parse(JSON.stringify(carMarker)),//carMarker,
  }, { // PARKING #11
    lat: 47.308270,
    lng: -122.224944,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 11,
      address: '314-328 1st St NE, Auburn, WA 98001'
    },
    icon: carMarker,
  }];

  var pnpCount = pnp.length;

  return {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    booth: booth,
    pnp: pnp,
    dissableGeoLocation: function($scope, mapTitle) {

      $scope.findMe = false;
      console.log('Clearing watchID');
      $scope.iconColor = {
        color: '#DDDDDDFF'
      };

      navigator.geolocation.clearWatch($scope.watchID);

      // Check which map is it
      while ((mapTitle === "pnp" && $scope.markers.length > pnpCount) ||
        (mapTitle === "booth" && $scope.markers.length > boothCount)) {
        $scope.markers.pop();
      }

      console.log($scope.markers);
      $scope.auburn.lat = $scope.center.lat;
      $scope.auburn.lng = $scope.center.lng;
    },
    toggleGeoLocation: function($scope) {
      $scope.findMe = !$scope.findMe;
      if ($scope.findMe) {
        console.log('About to get location');
        $scope.iconColor = {
          color: '#387EF5'
        };
        $scope.watchID = navigator.geolocation.watchPosition(
          $scope.onSuccess,
          $scope.onError, {
            frequency: 9999,
            timeout: 9999,
            enableHighAccuracy: false
          });
        return;
      }
      $scope.dissableGeoLocation();
    },
    // onSuccess Callback, accepts a Position object, which contains the
    // current GPS coordinates
    onSuccess: function($scope, position, mapTitle) {
      console.log('Marking location...');

      while ((mapTitle === "pnp" && $scope.markers.length > pnp.length) ||
        (mapTitle === "booth" && $scope.markers.length > booth.length)) {
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
          type: 'extraMarker',
          icon: 'fa-user',
          markerColor: 'orange',
          prefix: 'fa',
          shape: 'square'
        }
      });

      $scope.auburn.lat = position.coords.latitude;
      $scope.auburn.lng = position.coords.longitude;
    },
    // onError Callback receives a PositionError object
    onError: function(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }
  };
});
