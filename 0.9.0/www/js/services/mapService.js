app.factory('mapService', function() {
  console.log('SERV: Map ');

  var boothIcon = {
    type: 'div',
    iconSize: [18, 18],
    popupAnchor: [0, 0],
    className: "card",
    html: "<i class='icon ion-disc'></i>"
      // type: 'extraMarker',
      // icon: 'ion-disc',
      // markerColor: 'orange-dark',
      // prefix: 'fa',
      // shape: 'square',
  };

  var carMarker = {
    type: 'extraMarker',
    icon: 'ion-model-s',
    markerColor: 'red',
    prefix: 'fa',
    shape: 'circle'
  };

  var booth = [{
    lat: 47.307436,
    lng: -122.230424,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307436,
    lng: -122.230314,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307436,
    lng: -122.230204,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307436,
    lng: -122.230094,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307436,
    lng: -122.229984,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 300,
  }, {
    lat: 47.307496,
    lng: -122.229879,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307576,
    lng: -122.229879,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307656,
    lng: -122.229879,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307736,
    lng: -122.229879,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307816,
    lng: -122.229879,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307773,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307693,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307613,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307533,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307453,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307386,
    lng: -122.229739,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307271,
    lng: -122.230259,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307271,
    lng: -122.230039,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307271,
    lng: -122.229874,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307271,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307216,
    lng: -122.230259,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307216,
    lng: -122.230039,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307216,
    lng: -122.229874,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 0,
  }, {
    lat: 47.307216,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307161,
    lng: -122.230259,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307161,
    lng: -122.230039,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307161,
    lng: -122.229874,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307161,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307106,
    lng: -122.230259,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307106,
    lng: -122.230039,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307106,
    lng: -122.229874,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307106,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307051,
    lng: -122.230259,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307051,
    lng: -122.230039,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307051,
    lng: -122.229874,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307051,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307106,
    lng: -122.230424,
    focus: false,
    draggable: false,
    info: {
      id: '37',
      name: 'Jump N Jumper',
      desc: ''
    },
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307386,
    lng: -122.229649,
    focus: false,
    draggable: false,
    info: {
      id: '38',
      name: 'Plaza Garibaldi',
      desc: ''
    },
    icon: boothIcon,
    iconAngle: 90,
  }, {
    lat: 47.307693,
    lng: -122.230424,
    focus: false,
    draggable: false,
    info: {
      id: '39',
      name: 'Main Stage',
      desc: ''
    },
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.306941,
    lng: -122.229799,
    focus: false,
    draggable: false,
    info: {
      id: '40',
      name: 'Restrooms	',
      desc: ''
    },
    icon: boothIcon,
    iconAngle: 270,
  }];

  for (var i = 0; i < booth.length; i++) {
    // booth[i].message = "Booth " + -~i;
    booth[i].message = booth[i].info.name;
  }

  var boothCount = booth.length;

  var pnp = [{ // PARKING #1
    lat: 47.306496,
    lng: -122.232631,
    focus: false,
    draggable: false,
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
    info: {
      number: 8,
      address: '100 Auburn Ave, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #9 find address
    lat: 47.306735,
    lng: -122.228364,
    focus: false,
    draggable: false,
    info: {
      number: 9,
      address: '24 A St SE, Auburn, WA 98002'
    },
    icon: carMarker,
  }, { // PARKING #10
    lat: 47.308582,
    lng: -122.226938,
    focus: false,
    draggable: false,
    info: {
      number: 10,
      address: '159-199 1st St NE, Auburn, WA 98001'
    },
    icon: carMarker,
  }, { // PARKING #11
    lat: 47.308270,
    lng: -122.224944,
    focus: false,
    draggable: false,
    info: {
      number: 11,
      address: '314-328 1st St NE, Auburn, WA 98001'
    },
    icon: carMarker,
  }];

  for (var pi = 0; pi < pnp.length; pi++) {
    pnp[pi].message = "Parking #" + -~pi;
  }

  var pnpCount = pnp.length;
  var firstTimeLocating = true;

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

      firstTimeLocating = true;
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
            enableHighAccuracy: true
          });
        return;
      }
      $scope.dissableGeoLocation();
    },
    // onSuccess Callback, accepts a Position object, which contains the
    // current GPS coordinates
    onSuccess: function($scope, position, mapTitle) {
      console.log('Marking location...');

      while ((mapTitle === "pnp" && $scope.markers.length > pnpCount) ||
        (mapTitle === "booth" && $scope.markers.length > boothCount)) {
        $scope.markers.pop();
      }

      $scope.markers.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        focus: false,
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

      if (firstTimeLocating) {
        $scope.auburn.lat = position.coords.latitude;
        $scope.auburn.lng = position.coords.longitude;
        firstTimeLocating = false;
      }

      document.getElementById("map").click();
    },
    // onError Callback receives a PositionError object
    onError: function(error) {
      console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }
  };
});
