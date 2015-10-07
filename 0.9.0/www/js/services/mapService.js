app.factory('mapService', function() {
  console.log('SERV: Map ');

  var booth = [{
    lat: 47.307491,
    lng: -122.230369,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '1',
      website: 'jabsquared.ninja',
      desc: 'We build website and mobile apps that help your business grow!'
    }
  }, {
    lat: 47.307491,
    lng: -122.230259,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '2',
      website: 'jabsquared.ninja',
      desc: 'We build wqebsite and mobile apps that help your business grow!'
    }
  }, {
    lat: 47.307491,
    lng: -122.230149,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '3',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'burger',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307491,
    lng: -122.230039,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '4',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307546,
    lng: -122.229984,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '5',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307601,
    lng: -122.229929,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '6',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307656,
    lng: -122.229929,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '7',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307701,
    lng: -122.229929,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '8',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307756,
    lng: -122.229929,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '9',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307756,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '10',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307701,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '11',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307656,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '12',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307601,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '13',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307513,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '14',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.230314,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '15',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.230204,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '16',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '17',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229984,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '18',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '19',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229599,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '20',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229489,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '21',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229379,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '22',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307271,
    lng: -122.229269,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '23',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307216,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '24',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307216,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '25',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307216,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '26',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307161,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '27',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307161,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '28',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307161,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '29',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307106,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '30',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307106,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '31',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307106,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '32',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307051,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '33',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307051,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '34',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307051,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '35',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.306949,
    lng: -122.230094,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '36',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.306949,
    lng: -122.229874,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '37',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.306949,
    lng: -122.229819,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: '38',
      website: 'jabsquared.ninja',
      desc: 'We buird website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
      prefix: 'fa',
      shape: 'circle'
    }
  }
  //, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '39',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // }, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '40',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // }, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '41',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // }, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '42',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // }, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '43',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // }, {
  //   lat: 47.307491,
  //   lng: -122.230149,
  //   focus: false,
  //   draggable: false,
  //   message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
  //   info: {
  //     name: '44',
  //     website: 'jabsquared.ninja',
  //     desc: 'We buird website and mobile apps that help your business grow!'
  //   },
  //   icon: {
  //     type: 'extraMarker',
  //     icon: 'fa-diamond',
  //     markerColor: 'green',
  //     prefix: 'fa',
  //     shape: 'circle'
  //   }
  // },
];
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
