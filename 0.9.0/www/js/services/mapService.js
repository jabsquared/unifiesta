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
  }, {//4 Univision
    lat: 47.307436,
    lng: -122.230094,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, {//5 jabSquared
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
    icon: boothIcon,
    iconAngle: 270,
  }, {
    lat: 47.307386,
    lng: -122.229649,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 90,
  }, { //39
    lat: 47.307693,
    lng: -122.230424,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }, { //40
    lat: 47.306941,
    lng: -122.229799,
    focus: false,
    draggable: false,
    icon: boothIcon,
    iconAngle: 270,
  }];

  var info = [{
    id: '1',
    name: 'Arte Floral - Gelatina',
    desc: '',
    img: ['v1']
  }, {
    id: '2',
    name: 'Phillips Law',
    desc: '',
    img: ['v2']
  }, {
    id: '3',
    name: 'Xfinity',
    desc: '',
    img: ['v3']
  }, {
    id: '4',
    name: 'Univision',
    desc: '',
    img: ['v4']
  }, {
    id: '5',
    name: 'jabSquared/CodeDay',
    desc: '',
    img: [
      'v5a',
      'v5b'
    ]
  }, {
    id: '6',
    name: 'Harris Mitsubishi',
    desc: '',
    img: ['v6']
  }, {
    id: '7',
    name: 'Auburn Downtown',
    desc: '',
    img: ['v7']
  }, {
    id: '8',
    name: 'Adrys Promotions',
    desc: '',
    img: ['v8']
  }, {
    id: '9',
    name: 'Globo Azul',
    desc: '',
    img: ['v9']
  }, {
    id: '10',
    name: 'McDonalds',
    desc: '',
    img: ['v10']
  }, {
    id: '11',
    name: 'Costco',
    desc: '',
    img: ['v11']
  }, {
    id: '12',
    name: 'Salchipulpos Bonilla',
    desc: '',
    img: ['v12']
  }, {
    id: '13',
    name: 'Delridge Insurance',
    desc: '',
    img: ['v13']
  }, {
    id: '14',
    name: 'Los Agaves',
    desc: '',
    img: ['v14']
  }, {
    id: '15',
    name: 'Bontanas Don Nacho',
    desc: '',
    img: ['v15']
  }, {
    id: '16',
    name: 'Fruteria Veronica',
    desc: '',
    img: ['v16']
  }, {
    id: '17',
    name: 'JE Tires',
    desc: '',
    img: ['v17']
  }, {
    id: '18',
    name: 'Studios Fany',
    desc: '',
    img: ['v18']
  }, {
    id: '19',
    name: 'El Lago Mexican R',
    desc: '',
    img: ['v19']
  }, {
    id: '20',
    name: 'Vikay Design',
    desc: '',
    img: ['v20']
  }, {
    id: '21',
    name: 'Pizza Dudes',
    desc: '',
    img: ['v21']
  }, {
    id: '22',
    name: 'Stitchin Mich',
    desc: '',
    img: ['v22']
  }, {
    id: '23',
    name: 'El Portal de Sahuayo',
    desc: '',
    img: ['v23']
  }, {
    id: '24',
    name: 'Taco Goal',
    desc: '',
    img: ['v24']
  }, {
    id: '25',
    name: 'Chilly Billy Polar Ice',
    desc: '',
    img: ['v25']
  }, {
    id: '26',
    name: 'Royal Prestige',
    desc: '',
    img: ['v26']
  }, {
    id: '27',
    name: 'Salvadorian Bakery',
    desc: '',
    img: ['v27']
  }, {
    id: '28',
    name: 'Blosom Catering',
    desc: '',
    img: ['v28']
  }, {
    id: '29',
    name: 'Lets Read',
    desc: '',
    img: ['v29']
  }, {
    id: '30',
    name: 'Rainbow',
    desc: '',
    img: ['v30']
  }, {
    id: '31',
    name: 'NW Casas',
    desc: '',
    img: ['v31']
  }, {
    id: '32',
    name: 'Fruteria Sahuayo',
    desc: '',
    img: ['v32']
  }, {
    id: '33',
    name: 'Antojitos Araceli',
    desc: '',
    img: ['v33']
  }, {
    id: '34',
    name: 'Colomiana',
    desc: '',
    img: ['v34']
  }, {
    id: '35',
    name: 'Fritangas Rodriguez',
    desc: '',
    img: ['v35']
  }, {
    id: '36',
    name: 'Botanas Lucy',
    desc: '',
    img: ['v36']
  }, {
    id: '37',
    name: 'Jump N Jumper',
    desc: '',
    img: ['v37']
  }, {
    id: '38',
    name: 'Plaza Garibaldi',
    desc: '',
    img: ['v38']
  }, {
    id: '39',
    name: 'Main Stage',
    desc: ''
  }, {
    id: '40',
    name: 'Restrooms	',
    desc: ''
  }];

  for (var i = 0; i < booth.length; i++) {
    // booth[i].message = "Booth " + -~i;
    booth[i].info = info[i];
    booth[i].message = info[i].name;
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
