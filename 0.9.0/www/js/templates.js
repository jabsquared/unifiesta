angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("eventx/event.html","<!DOCTYPE html><ion-view name=event class=event ng-cloak><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title>{{::event.start | date:\'HH:mm a\'}}</ion-nav-title><ion-nav-buttons side=right><button ng-class=\"event.reminder ? \'button button-icon icon ion-ios-star scheduled\' : \'button button-icon icon ion-ios-star-outline\'\" ng-click=schedule({{event}})></button></ion-nav-buttons><ion-content class=\"has-header xcentre\" has-bouncing=true padding=true><div class=card><h3 class=event-title>{{::event.name}}</h3><p class=event-description>{{::event.desc}}</p></div><div class=card><ion-slide-box show-pager=false><ion-slide ng-repeat=\"ei in event.img\"><img ng-src={{getURL(ei)}} alt=Loading... imageonload=\"spinner=\'true\'\"><br><ion-spinner class=\"center spinner-energized\" icon=lines ng-hide=spinner></ion-spinner></ion-slide></ion-slide-box></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("eventx/events.html","<!DOCTYPE html><ion-view name=events class=events ng-cloak><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Regresar</button></ion-nav-buttons><ion-nav-title><img alt=\"Independent de Mexico\" class=logo ng-src=img/main/header.png></ion-nav-title><ion-content class=has-header has-bouncing=true><ion-list><ion-item class=list collection-repeat=\"event in events\"><div id=Card{{event.id}} class=card><a ng-click=schedule(event)><div class=\"item item-avatar\"><i ng-class=\"event.reminder ? \'icon ion-ios-star scheduled\' : \'icon ion-ios-star-outline\'\"></i><h2>Inicia: {{event.start | date:\'hh:mm a\'}}</h2><p>Termina: {{event.end | date:\'hh:mm a\'}}</p></div></a> <a ng-href=#/events/{{event.id}}><div class=item><h2>{{event.name | limitTo : 27 : 0}}</h2><p>{{event.desc | limitTo : 27 : 0}}</p></div></a></div></ion-item></ion-list><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("homex/home.html","<!DOCTYPE html><ion-view name=home class=home ng-cloak><ion-nav-title><span class=\"bold main-title\">Univision</span> <img class=unilogo alt=Univision ng-src=img/main/logo-18-2.png> <span class=\"bold main-title\">Events</span></ion-nav-title><ion-content class=has-header has-bouncing=true padding=true><div class=content><img alt=Univision ng-src=img/main/header-shadow.png><div class=option><button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'events\')\">Programa</button> <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'boothmap\')\">Mapa del Evento</button> <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'pnp\')\">Estacionamientos</button><div class=raffle><h3 class=bold>Raffle #:<br><i ng-show=$storage.gotRaffle>{{$storage.raffle | numberFixedLen : 5}}</i> <i ng-hide=$storage.gotRaffle>Loading...</i></h3><br><ion-spinner class=\"center spinner-energized\" icon=lines ng-hide=$storage.gotRaffle></ion-spinner></div></div></div><div class=signature>jabSquared</div></ion-content></ion-view><ion-footer-bar ng-controller=SponsorsCtrl class=\"sponsors bar-energized\" ng-show=$root.showFooter><a ng-click=toggle()><h1 class=\"title bold\">Sponsors</h1><ion-slide-box show-pager=false does-continue=true auto-play=true slide-interval=2700 on-slide-changed=slideChanged(index)><ion-slide ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\"><div class=sgroup><img ng-src={{::img[$index]}} alt=img{{$index}}> <img ng-src=\"{{::img[$index + 1]}}\" alt=img{{$index+1}}> <img ng-src=\"{{::img[$index + 2]}}\" alt=img{{$index+2}}> <img ng-src=\"{{::img[$index + 3]}}\" alt=img{{$index+3}}></div></ion-slide></ion-slide-box></a></ion-footer-bar>");
$templateCache.put("mapx/boothmap.html","<!DOCTYPE html><ion-view name=boothmap class=boothmap ng-cloak><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Regresar</button></ion-nav-buttons><ion-nav-title></ion-nav-title><ion-nav-buttons side=right><button ng-style=iconColor class=\"button icon-right ion-android-locate button-clear\" ng-click=toggleGeoLocation()></button></ion-nav-buttons><ion-content class=has-header scroll=true has-bouncing=true padding=true><div class=map data-tap-disabled=true><leaflet id=map center=auburn tiles=tiles url-hash-center=yes event-broadcast=events defaults=defaults maxbounds=maxbounds markers=markers width=100% height=100%></leaflet></div><div ng-if=!showCard class=card><p>Para <b>localizar</b> en donde esta,<br>presione el <i class=ion-android-locate></i> icono a la <b>derecha</b></p><div class=\"item-divider item-text-wrap\"><p>Para <b>mirar</b> a un vendedor, <i class=ion-android-compass></i><br>solo toque lo<br>para más detalles.</p></div><p><i class=ion-pinpoint></i> <b>Para hacer un zoom,</b><br>pellizque el mapa</p></div><div ng-if=showCard class=card><h5 class=bold><b>{{info.name}}</b></h5><p>{{info.desc}}</p><div class=item-divider><ion-slide ng-repeat=\"vi in info.img\"><img ng-src={{getURL(vi)}} alt=Loading... imageonload=\"spinner=\'true\'\"><br><ion-spinner class=\"center spinner-energized\" icon=lines ng-hide=spinner></ion-spinner></ion-slide></div></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("mapx/pnp.html","<!DOCTYPE html><ion-view name=pnp class=pnp ng-cloak><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Regresar</button></ion-nav-buttons><ion-nav-title></ion-nav-title><ion-nav-buttons side=right><button ng-style=iconColor class=\"button icon-right ion-android-locate button-clear\" ng-click=toggleGeoLocation()></button></ion-nav-buttons><ion-content class=has-header has-bouncing=true padding=true><div class=map data-tap-disabled=true><leaflet id=map center=auburn tiles=tiles url-hash-center=yes event-broadcast=events height=100% markers=markers width=100%></leaflet></div><div ng-if=!showCard class=card><p><b>TODO</b> el estacionamiento de calle es<br><b>GRATIS!</b></p><div class=\"item-divider item-text-wrap\"><p><b>Para lotes de estacionamiento gratis,</b><br>seleccioné un marcador (<i class=ion-model-s></i>) en el mapa<br>para mas detalles</p></div><p>Por favor de <b>NO</b> estacionarse en <b>SAFEWAY</b></p></div><div ng-if=showCard class=card><h5 class=bold>Lote <b>#{{info.number}}</b></h5><div class=\"item-divider item-text-wrap\"><p>{{info.address}}</p><a class=\"button button-block bold button-assertive\" ng-click=openGMap({{geoInfo}}) target=_blank><i class=ion-android-navigate></i> navegar</a></div></div><div class=signature><h1>jabSquared</h1></div></ion-content></ion-view>");
$templateCache.put("sponsorx/sponsors.html","<!DOCTYPE html><ion-view class=sponsors ng-cloak><ion-nav-buttons side=left><button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=goBack()>Back</button></ion-nav-buttons><ion-nav-title><span class=bold>Sponsors</span> <i class=ion-thumbsup></i></ion-nav-title><ion-content class=has-header has-bouncing=true padding=true><div class=sblock><div class=row ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\"><div class=\"col col-25 card\" ng-if=\"$index < img.length\"><div class=box><img ng-src={{::img[$index]}}></div></div><div class=\"col col-25 card\" ng-if=\"$index + 1 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 1]}}\"></div></div><div class=\"col col-25 card\" ng-if=\"$index + 2 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 2]}}\"></div></div><div class=\"col col-25 card\" ng-if=\"$index + 3 < img.length\"><div class=box><img ng-src=\"{{::img[$index + 3]}}\"></div></div></div></div></ion-content></ion-view>");}]);