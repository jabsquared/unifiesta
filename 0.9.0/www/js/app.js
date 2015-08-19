// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'leaflet-directive']);

app.run(function($ionicPlatform, $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //ios8 permission handler
    if (device.platform === "iOS") {
      window.plugin.notification.local.promptForPermission();
    }
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    window.plugin.notification.local.onadd = function(id, state, json) {
      var notification = {
        id: id,
        state: state,
        json: json
      };
      $timeout(function() {
        $rootScope.$broadcast("$cordovaLocalNotification:added", notification);
      });
    };
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup state for login page
    .state('schedule', {
    url: '/schedule',
    templateUrl: 'templates/schedule.html',
    controller: 'EventsCtrl'
  })

  .state('event', {
    url: '/event/:id',
    templateUrl: 'templates/event.html',
    controller: 'EventCtrl'
  })

  .state('maps', {
    url: '/maps',
    templateUrl: 'templates/maps.html',
    controller: 'MapsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/schedule');
});
