// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'leaflet-directive', 'templates', 'ngStorage']);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.forwardCache(true);

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'homex/home.html',
    controller: 'HomeCtrl'
  })

  .state('events', {
    url: '/events',
    templateUrl: 'eventx/events.html',
    controller: 'EventsCtrl'
  })

  .state('event', {
    url: '/events/:id',
    templateUrl: 'eventx/event.html',
    controller: 'EventCtrl'
  })

  .state('boothmap', {
    url: '/boothmap',
    templateUrl: 'mapx/boothmap.html',
    controller: 'BoothMapCtrl'
  })

  .state('pnp', {
    url: '/pnp',
    templateUrl: 'mapx/pnp.html',
    controller: 'PnPCtrl'
  })

  .state('sponsors', {
    url: '/sponsors',
    templateUrl: 'sponsorx/sponsors.html',
    controller: 'SponsorsCtrl'
  });
});

app.run(function($ionicPlatform, $timeout, $cordovaDevice, $rootScope, $templateCache, $http) {
  console.log("RUN");

  $rootScope.showFooter = true;

  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //ios8 permission handler
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (typeof(device) !== 'undefined') {
      //mode code here give a hard coded value,
      if (device.platform === "iOS") {
        window.plugin.notification.local.promptForPermission();
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
    }
  });
});
