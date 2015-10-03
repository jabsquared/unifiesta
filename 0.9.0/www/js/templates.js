angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("eventx/event.html","<!DOCTYPE html><ion-view name=event class=event><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title>{{::event.start | date:\'HH:mm a\'}}</ion-nav-title><ion-nav-buttons side=right><button ng-class=\"event.reminder ? \'button button-icon icon ion-ios-star scheduled\' : \'button button-icon icon ion-ios-star-outline\'\" ng-click=schedule({{event}})></button></ion-nav-buttons><ion-content class=has-header has-bouncing=true padding=true><div class=card><h3 class=event-title>{{::event.name}}</h3><p class=event-description>{{::event.desc}}</p></div><div class=card><ion-slide-box show-pager=false><ion-slide><img ng-src=https://googledrive.com/host/0B6cBGXlREHi2flp4RU16VlVFNWdtZ2owQklTTlQzREU3dUZZUUF6c2lRZDYzTG1qaHc5UUE/{{event.id}}-min.jpg alt=Loading... imageonload=\"spinner=\'true\'\"><br><ion-spinner class=\"center spinner-energized\" icon=lines ng-hide=spinner></ion-spinner></ion-slide></ion-slide-box></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("eventx/events.html","<!DOCTYPE html><ion-view name=events class=events><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title><img alt=\"Independent de Mexico\" class=logo ng-src=img/main/header.png></ion-nav-title><ion-content class=has-header has-bouncing=true><ion-list><ion-item class=list collection-repeat=\"event in events\"><div class=card><a ng-click=schedule(event)><div class=\"item item-avatar\"><i ng-class=\"event.reminder ? \'icon ion-ios-star scheduled\' : \'icon ion-ios-star-outline\'\"></i><h2>Start: {{event.start | date:\'hh:mm a\'}}</h2><p>End: {{event.end | date:\'hh:mm a\'}}</p></div></a> <a ng-href=#/events/{{event.id}}><div class=item><h2>{{event.name | limitTo : 18 : 0}}</h2><p>{{event.desc | limitTo : 18 : 0}}</p></div></a></div></ion-item></ion-list><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("homex/home.html","<!DOCTYPE html><ion-view name=home class=home><ion-nav-title>Univision <img class=unilogo alt=Univision ng-src=img/main/logo-18.png> <span class=bold>Events</span></ion-nav-title><ion-content class=has-header has-bouncing=true padding=true><img alt=Univision ng-src=img/main/header.png><div class=option><button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'events\')\">Event Schedule</button> <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'boothmap\')\">Event Map</button> <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'pnp\')\">Parking Map</button><div class=raffle><h3 class=bold>Raffle #: 7489348</h3></div></div><div class=hidden><h1>jabSquared</h1></div></ion-content></ion-view><ion-footer-bar ng-controller=SponsorsCtrl class=\"sponsors bar-energized\" ng-show=$root.showFooter><a ng-click=toggle()><h1 class=\"title bold\">Sponsors</h1><ion-slide-box show-pager=false does-continue=true auto-play=true slide-interval=2700 on-slide-changed=slideChanged(index)><ion-slide ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\"><div class=sgroup><img ng-src={{::img[$index]}} alt=img{{$index}}> <img ng-src=\"{{::img[$index + 1]}}\" alt=img{{$index+1}}> <img ng-src=\"{{::img[$index + 2]}}\" alt=img{{$index+2}}> <img ng-src=\"{{::img[$index + 3]}}\" alt=img{{$index+3}}></div></ion-slide></ion-slide-box></a></ion-footer-bar>");
$templateCache.put("mapx/boothmap.html","<!DOCTYPE html><ion-view name=boothmap class=boothmap><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title>Booth</ion-nav-title><ion-nav-buttons side=right><button ng-style=iconColor class=\"button icon-right ion-android-locate button-clear\" ng-click=toggleGeoLocation()></button></ion-nav-buttons><ion-content class=has-header scroll=false has-bouncing=false padding=true><div class=map data-tap-disabled=true><leaflet center=auburn tiles=tiles url-hash-center=yes event-broadcast=events markers=markers width=100% height=100%></leaflet></div><div ng-if=showCard class=card><h3>{{info.name}}</h3><p class=website>{{info.website}}</p><p>{{info.desc}}</p></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("mapx/pnp.html","<!DOCTYPE html><ion-view name=pnp class=pnp><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title>Parking</ion-nav-title><ion-nav-buttons side=right><button ng-style=iconColor class=\"button icon-right ion-android-locate button-clear\" ng-click=toggleGeoLocation()></button></ion-nav-buttons><ion-content class=has-header has-bouncing=true padding=true><div class=map data-tap-disabled=true><leaflet center=auburn tiles=tiles url-hash-center=yes event-broadcast=events height=100% markers=markers width=100%></leaflet></div><div ng-if=!showCard class=card><p><b>ALL</b> street parking are<br><b>FREE!</b></p><div class=\"item-divider item-text-wrap\"><p><b>For parking lots,<br></b> Select a marker on the map above for more detail</p></div></div><div ng-if=showCard class=card><h3>Parking Lot {{info.number}}</h3><p>{{info.address}}</p><a class=\"button button-block bold button-energized\" href=\"https://maps.google.com/?q={{info.address}}&t=m\">Get Directions</a></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("sponsorx/sponsors.html","<!DOCTYPE html><ion-view title=Sponsors class=sponsors><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-content class=has-header has-bouncing=true padding=true><div class=center><div class=row ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\"><div class=\"col col-25 card\" ng-if=\"$index < img.length\"><div class=box><img ng-src={{::img[$index]}}></div></div><div class=\"col col-25 card\" ng-if=\"$index + 1 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 1]}}\"></div></div><div class=\"col col-25 card\" ng-if=\"$index + 2 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 2]}}\"></div></div><div class=\"col col-25 card\" ng-if=\"$index + 3 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 3]}}\"></div></div></div></div></ion-content></ion-view>");}]);