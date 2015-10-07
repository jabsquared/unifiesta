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
      info: {
        id: '1',
        name: 'Arte Floral - Gelatina',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307436,
      lng: -122.230314,
      focus: false,
      draggable: false,
      info: {
        id: '2',
        name: 'Phillips Law',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307436,
      lng: -122.230204,
      focus: false,
      draggable: false,
      info: {
        id: '3',
        name: 'Xfinity',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307436,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '4',
        name: 'Univision',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307436,
      lng: -122.229984,
      focus: false,
      draggable: false,
      info: {
        id: '5',
        name: 'jabSquared',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 300,
    }, {
      lat: 47.307496,
      lng: -122.229879,
      focus: false,
      draggable: false,
      info: {
        id: '6',
        name: 'Harris Mitsubishi',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307576,
      lng: -122.229879,
      focus: false,
      draggable: false,
      info: {
        id: '7',
        name: 'Auburn Downtown',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307656,
      lng: -122.229879,
      focus: false,
      draggable: false,
      info: {
        id: '8',
        name: 'Adrys Promotions',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307736,
      lng: -122.229879,
      focus: false,
      draggable: false,
      info: {
        id: '9',
        name: 'Globo Azul',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307816,
      lng: -122.229879,
      focus: false,
      draggable: false,
      info: {
        id: '10',
        name: 'McDonalds',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307773,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '11',
        name: 'Costco',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307693,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '12',
        name: 'Salchipulpos Bonilla',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307613,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '13',
        name: 'Delridge Insurance',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307533,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '14',
        name: 'Los Agaves',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307453,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '15',
        name: 'Bontanas Don Nacho',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.230204,
      focus: false,
      draggable: false,
      info: {
        id: '16',
        name: 'Fruteria Veronica',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '17',
        name: 'JE Tires',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229984,
      focus: false,
      draggable: false,
      info: {
        id: '18',
        name: 'Studios Fany',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229874,
      focus: false,
      draggable: false,
      info: {
        id: '19',
        name: 'El Lago Mexican R',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229599,
      focus: false,
      draggable: false,
      info: {
        id: '20',
        name: 'Vikay Design',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229489,
      focus: false,
      draggable: false,
      info: {
        id: '21',
        name: 'Pizza Dudes',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229379,
      focus: false,
      draggable: false,
      info: {
        id: '22',
        name: 'Stitchin Mich',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307271,
      lng: -122.229269,
      focus: false,
      draggable: false,
      info: {
        id: '23',
        name: 'El Portal de Sahuayo',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 0,
    }, {
      lat: 47.307216,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '24',
        name: 'Taco Goal',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307216,
      lng: -122.229874,
      focus: false,
      draggable: false,
      info: {
        id: '25',
        name: 'Chilly Billy Polar Ice',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307216,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '26',
        name: 'Royal Prestige',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307161,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '27',
        name: 'Salvadorian Bakery',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307161,
      lng: -122.229874,
      focus: false,
      draggable: false,
      info: {
        id: '28',
        name: 'Blosom Catering',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307161,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '29',
        name: 'Lets Read',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307106,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '30',
        name: 'Rainbow',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307106,
      lng: -122.229874,
      focus: false,
      draggable: false,
      info: {
        id: '31',
        name: 'NW Casas',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307106,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '32',
        name: 'Fruteria Sahuayo',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.307051,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '33',
        name: 'Antojitos Araceli',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307051,
      lng: -122.229874,
      focus: false,
      draggable: false,
      info: {
        id: '34',
        name: 'Colomiana',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.307051,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '35',
        name: 'Fritangas Rodriguez',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }, {
      lat: 47.306949,
      lng: -122.230094,
      focus: false,
      draggable: false,
      info: {
        id: '36',
        name: 'Botanas Lucy',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 270,
    }, {
      lat: 47.306949,
      lng: -122.229874,
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
      lat: 47.306949,
      lng: -122.229819,
      focus: false,
      draggable: false,
      info: {
        id: '38',
        name: 'Plaza Garibaldi',
        desc: ''
      },
      icon: boothIcon,
      iconAngle: 90,
    }
    //, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '39',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // }, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '40',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // }, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '41',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // }, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '42',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // }, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '43',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // }, {
    //   lat: 47.307491,
    //   lng: -122.230149,
    //   focus: false,
    //   draggable: false,
    //       //   info: {
    //     id: '44',
    //     name: '',
    //     desc: ''
    //   },
    //   icon: boothIcon,
    // iconAngle: 270,
    // },
  ];

  for (var i = 0; i < booth.length; i++) {
    booth[i].message="Booth " + i;
  }

  var boothCount = booth.length;

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
    icon: carMarker,
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

      while ((mapTitle === "pnp" && $scope.markers.length > pnpCount) ||
        (mapTitle === "booth" && $scope.markers.length > boothCount)) {
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
