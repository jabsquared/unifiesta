angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("eventx/event.html","<!DOCTYPE html>\r\n<ion-view name=\"event\" class=\"event\">\r\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\r\n\r\n    <ion-nav-buttons side=\"left\">\r\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\r\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\r\n          Back\r\n        </button>\r\n      </a>\r\n    </ion-nav-buttons>\r\n\r\n  <ion-nav-title>\r\n    {{event.start | date:\'HH:mm a\'}}\r\n  </ion-nav-title>\r\n\r\n\r\n  <ion-nav-buttons side=\"right\">\r\n    <button class=\"button button-icon icon ion-ios-bell\" ng-click=\"schedule({{event}})\">\r\n    </button>\r\n  </ion-nav-buttons>\r\n\r\n  </ion-nav-bar>\r\n\r\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"true\" padding=\"true\">\r\n\r\n    <div class=\"card\">\r\n      <h3 class=\"event-title\">\r\n        {{event.name}}\r\n      </h3>\r\n      <p class=\"event-description\">\r\n        {{event.desc}}\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"card\" ng-show=\"hasImage\">\r\n      <ion-slide-box>\r\n        <ion-slide ng-repeat=\"ei in event.img\">\r\n          <img ng-src=\"img/eimg/{{ei}}.png\" alt=\"Event #{{$index}}\" />\r\n        </ion-slide>\r\n      </ion-slide-box>\r\n\r\n    </div>\r\n  </ion-content>\r\n\r\n</ion-view>\r\n");
$templateCache.put("eventx/events.html","<!DOCTYPE html>\r\n<ion-view name=\"events\" class=\"events\">\r\n\r\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\r\n\r\n    <ion-nav-buttons side=\"left\">\r\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\r\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\r\n          Back\r\n        </button>\r\n      </a>\r\n    </ion-nav-buttons>\r\n\r\n    <ion-nav-title>\r\n      <univision-logo></univision-logo>\r\n    </ion-nav-title>\r\n\r\n  </ion-nav-bar>\r\n\r\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"true\">\r\n    <ion-list can-swipe=\"listCanSwipe\" show-delete=\"shouldShowDelete\">\r\n      <ion-item class=\"list\" collection-repeat=\"event in events\">\r\n        <div class=\"card\">\r\n\r\n          <a ng-click=\"schedule(event)\">\r\n            <div class=\"item item-avatar\">\r\n              <i class=\"icon ion-android-time\"></i>\r\n              <h2>Start : {{event.start | date:\'HH:mm a\'}}</h2>\r\n              <p>\r\n                End: {{event.end | date:\'HH:mm a\'}}\r\n              </p>\r\n            </div>\r\n          </a>\r\n\r\n          <a ng-href=\"#/events/{{event.id}}\">\r\n            <div class=\"item\">\r\n              <h2>{{event.name | limitTo : 27 : 0}}</h2>\r\n              <p>\r\n                {{event.desc | limitTo : 27 : 0}}\r\n              </p>\r\n            </div>\r\n          </a>\r\n\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("homex/home.html","<!DOCTYPE html>\r\n<ion-view name=\"home\" class=\"home\" >\r\n\r\n  <ion-content class=\"has-footer\" padding=\"true\">\r\n\r\n    <img alt=\"Univision\" ng-src=\"img/main/header.png\" />\r\n\r\n    <div>\r\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'events\')\">\r\n        Event Schedule\r\n      </button>\r\n\r\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'boothmap\')\">\r\n        Event Map\r\n      </button>\r\n\r\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'pnp\')\">\r\n        Parking Map\r\n      </button>\r\n\r\n      <div class=\"raffle\">\r\n        <h3 class=\"bold\">Raffle #: 7489348</h3>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("mapx/boothmap.html","<!DOCTYPE html>\r\n\r\n<ion-view name=\"boothmap\" class=\"boothmap\">\r\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\r\n\r\n    <ion-nav-buttons side=\"left\">\r\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\r\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\r\n          Back\r\n        </button>\r\n      </a>\r\n    </ion-nav-buttons>\r\n\r\n  <ion-nav-title>\r\n    Booth\r\n  </ion-nav-title>\r\n\r\n  <ion-nav-buttons side=\"right\">\r\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\r\n    </button>\r\n  </ion-nav-buttons>\r\n  </ion-nav-bar>\r\n\r\n\r\n  <ion-content class=\"has-header has-footer\" scroll=\"false\" has-bouncing=\"false\" padding=\"true\">\r\n    <!-- <a href=\"comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic\" ,target=\"_blank\">Click here for map</a> -->\r\n    <div class=\"map\" data-tap-disabled=\"true\">\r\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" markers=\"markers\" width=\"100%\" height=\"100%\">\r\n      </leaflet>\r\n    </div>\r\n\r\n    <div ng-if=\"showCard\" class=\"card\">\r\n      <h3>{{info.name}}</h3>\r\n      <p class=\"website\">{{info.website}}</p>\r\n      <p>{{info.desc}}</p>\r\n    </div>\r\n    <!-- <h4>Longitude: {{long}}</h4>\r\n    <h4>Laditude: {{lat}}</h4> -->\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("mapx/pnp.html","<!DOCTYPE html>\r\n\r\n<ion-view name=\"pnp\" class=\"pnp\">\r\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\r\n\r\n  <ion-nav-buttons side=\"left\">\r\n    <a nav-direction=\"back\" ng-click=\"goBack()\">\r\n      <button class=\"button icon-left button-clear ion-ios-arrow-left\">\r\n        Back\r\n      </button>\r\n    </a>\r\n  </ion-nav-buttons>\r\n\r\n  <ion-nav-title>\r\n    Parking\r\n  </ion-nav-title>\r\n\r\n  <ion-nav-buttons side=\"right\">\r\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\r\n    </button>\r\n  </ion-nav-buttons>\r\n  </ion-nav-bar>\r\n\r\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"false\" padding=\"true\">\r\n    <div class=\"map\" data-tap-disabled=\"true\">\r\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" height=\"100%\" markers=\"markers\" width=\"100%\">\r\n      </leaflet>\r\n    </div>\r\n\r\n    <div ng-if=\"showCard\" class=\"card\">\r\n      <h3>Parking Lot {{info.number}}</h3>\r\n      <p>\r\n        {{info.address}}\r\n      </p>\r\n      <button class=\"button button-block bold button-energized\">\r\n        Get Directions\r\n      </button>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("sponsorx/sponsors.html","<!DOCTYPE html>\r\n<ion-view title=\"Sponsors\" class=\"sponsors\">\r\n	<ion-nav-bar class=\"bar-energized\" align-title=\"center\">\r\n\r\n		<ion-nav-buttons side=\"left\">\r\n			<a nav-direction=\"back\" ng-click=\"goBack()\">\r\n				<button class=\"button icon-left button-clear ion-ios-arrow-left\">\r\n					Back\r\n				</button>\r\n			</a>\r\n		</ion-nav-buttons>\r\n\r\n	</ion-nav-bar>\r\n\r\n	<ion-content class=\"has-header\" has-bouncing=\"true\" padding=\"true\">\r\n		<div class=\"row\" ng-repeat=\"s in sps\" ng-if=\"$index % 4 === 0\">\r\n\r\n			<div class=\"col col-25 card\" ng-if=\"$index < sps.length\">\r\n				<div class=\"box\">\r\n					<!-- Put image into a white box, with rounded corner etc.. -->\r\n					<img ng-src=\"{{sps[$index].src}}\" />\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"col col-25 card\" ng-if=\"$index + 1 < sps.length\">\r\n				<div class=\"box\">\r\n\r\n					<img ng-src=\"{{sps[$index + 1].src}}\"/>\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"col col-25 card\" ng-if=\"$index + 2 < sps.length\">\r\n				<div class=\"box\">\r\n					<img ng-src=\"{{sps[$index + 2].src}}\"/>\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"col col-25 card\" ng-if=\"$index + 3 < sps.length\">\r\n				<div class=\"box\">\r\n					<img ng-src=\"{{sps[$index + 3].src}}\" />\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n\r\n	</ion-content>\r\n\r\n</ion-view>\r\n");}]);