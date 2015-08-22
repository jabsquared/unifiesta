app.controller('BoothMapCtrl', function($scope, $state, $stateParams, $cordovaGeolocation, event_data) {

  console.log('inside boothmp controller');

  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  // Feilds
  $scope.findMe = false;
  var watch;
  var lat;
  var long;

  $scope.toggleGeoLocation = function() {
    $scope.findMe = !$scope.findMe;
    if ($scope.findMe) {
      watch = $cordovaGeolocation.watchPosition(watchOptions);
      watch.then(
        null,
        function(err) {
          // error
        },
        function(position) {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
      });
    }else{
      watch.clearWatch();
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
      user: {
        lat: lat,
        lng: long,
        focus: false,
        draggable: false,
        message: "User!",
        icon: {}
      },
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
