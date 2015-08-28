app.factory('eventData', function() {
  console.log('SERV: Event Data');

  var events = [{
      id: 1,
      name: "Zumba con Gaby",
      type: "Zumba",
      start: new Date('2015-08-13T10:45:00-08:00'),
      end: new Date('2015-08-13T10:55:00-08:00'),
      desc: "Zumba",
      img: [
        "event"
      ],
      reminder: false
    }, {
      id: 2,
      name: "Tribu India Muckleshoot", //Tribu India Muckleshoot
      type: "Presentacion",
      start: new Date('2015-08-13T10:55:00-08:00'),
      end: new Date('2015-08-13T11:00:00-08:00'),
      desc: "Bienvenida",
      img: [],
      reminder: false
    }, {
      id: 3,
      name: "Zumba con Gaby cont.",
      type: "Zumba",
      start: new Date('2015-08-13T11:00:00-08:00'),
      end: new Date('2015-08-13T11:15:00-08:00'),
      desc: "Zumba",
      img: [],
      reminder: false
    }, {
      id: 4,
      name: "Paquita la del Barrio",
      type: "Ranchera",
      start: new Date('2015-08-13T11:15:00-08:00'),
      end: new Date('2015-08-13T11:20:00-08:00'),
      desc: 'Ranchera',
      img: [],
      reminder: false
    }, {
      id: 5,
      name: "Janeth Apodaca",
      type: "Ranchera",
      start: new Date('2015-08-13T11:20:00-08:00'),
      end: new Date('2015-08-13T11:25:00-08:00'),
      desc: 'Ranchera',
      img: [],
      reminder: false
    }, {
      id: 6,
      name: "Yeyito",
      type: "Bachata",
      start: new Date('2015-08-13T11:25:00-08:00'),
      end: new Date('2015-08-13T11:30:00-08:00'),
      desc: 'Bachata',
      img: [],
      reminder: false
    }, {
      id: 7,
      name: "Impacto Versátil",
      type: "Rap",
      start: new Date('2015-08-13T11:30:00-08:00'),
      end: new Date('2015-08-13T11:45:00-08:00'),
      desc: 'Rap',
      img: [],
      reminder: false
    }, {
      id: 8,
      name: "Eskandalosos",
      type: "Cumbia/Tierra Cali",
      start: new Date('2015-08-13T11:45:00-08:00'),
      end: new Date('2015-08-13T12:00:00-08:00'),
      desc: 'Cumbia/Tierra Cali',
      img: [],
      reminder: false
    }, {
      id: 9,
      name: "Los Chicharitos",
      type: "Payasos",
      start: new Date('2015-08-13T12:00:00-08:00'),
      end: new Date('2015-08-13T12:20:00-08:00'),
      desc: 'Payasos',
      img: [],
      reminder: false
    }, {
      id: 10,
      name: "Guera de Michoacán",
      type: "Mariachi",
      start: new Date('2015-08-13T12:20:00-08:00'),
      end: new Date('2015-08-13T12:30:00-08:00'),
      desc: 'Mariachi',
      img: [],
      reminder: false
    }, {
      id: 11,
      name: "El Ingrato",
      type: "Ranchera",
      start: new Date('2015-08-13T12:30:00-08:00'),
      end: new Date('2015-08-13T12:40:00-08:00'),
      desc: 'Ranchera',
      img: [],
      reminder: false
    }, {
      id: 12,
      name: "Arturo Delgado",
      type: "Bolero",
      start: new Date('2015-08-13T12:40:00-08:00'),
      end: new Date('2015-08-13T12:50:00-08:00'),
      desc: 'Bolero',
      img: [],
      reminder: false
    }, {
      id: 13,
      name: "Ernesto Torres",
      type: "Rock/Pop",
      start: new Date('2015-08-13T12:50:00-08:00'),
      end: new Date('2015-08-13T13:10:00-08:00'),
      desc: 'Rock/Pop',
      img: [],
      reminder: false
    }, {
      id: 14,
      name: "Leones de la Sierra",
      type: "Regional",
      start: new Date('2015-08-13T13:10:00-08:00'),
      end: new Date('2015-08-13T13:30:00-08:00'),
      desc: 'Regional',
      img: [],
      reminder: false
    }, {
      id: 15,
      name: "Tigre Vazquez",
      type: "Regional",
      start: new Date('2015-08-13T13:30:00-08:00'),
      end: new Date('2015-08-13T13:50:00-08:00'),
      desc: 'Regional',
      img: [],
      reminder: false
    }, {
      id: 16,
      name: "Zertero Musical",
      type: "Tierra Cali",
      start: new Date('2015-08-13T13:50:00-08:00'),
      end: new Date('2015-08-13T14:10:00-08:00'),
      desc: 'Tierra Cali',
      img: [],
      reminder: false
    }, {
      id: 17,
      name: "Destino Musical",
      type: "Cumbia",
      start: new Date('2015-08-13T14:10:00-08:00'),
      end: new Date('2015-08-13T14:30:00-08:00'),
      desc: 'Cumbia',
      img: [],
      reminder: false
    }, {
      id: 18,
      name: "Comando G3",
      type: "Regional",
      start: new Date('2015-08-13T14:30:00-08:00'),
      end: new Date('2015-08-13T14:50:00-08:00'),
      desc: 'Regional',
      img: [],
      reminder: false
    }, {
      id: 19,
      name: "Paquita la del Barrio",
      type: "Ranchera",
      start: new Date('2015-08-13T14:50:00-08:00'),
      end: new Date('2015-08-13T15:00:00-08:00'),
      desc: 'Ranchera',
      img: [],
      reminder: false
    }, {
      id: 20,
      name: "Plebilloz",
      type: "Regional",
      start: new Date('2015-08-13T15:00:00-08:00'),
      end: new Date('2015-08-13T15:15:00-08:00'),
      desc: 'Regional',
      img: [],
      reminder: false
    }, {
      id: 21,
      name: "Lobo Z Siete",
      type: "Banda",
      start: new Date('2015-08-13T15:15:00-08:00'),
      end: new Date('2015-08-13T15:30:00-08:00'),
      desc: 'Banda',
      img: [],
      reminder: false
    }, {
      id: 22,
      name: "Kina Salazar",
      type: "Ranchera",
      start: new Date('2015-08-13T15:30:00-08:00'),
      end: new Date('2015-08-13T15:40:00-08:00'),
      desc: 'Ranchera',
      img: [],
      reminder: false
    }, {
      id: 23,
      name: "Tropical Fusion",
      type: "Bachata",
      start: new Date('2015-08-13T15:40:00-08:00'),
      end: new Date('2015-08-13T15:45:00-08:00'),
      desc: 'Bachata',
      img: [],
      reminder: false
    }, {
      id: 24,
      name: "La Guerrerense",
      type: "Mariachi",
      start: new Date('2015-08-13T15:45:00-08:00'),
      end: new Date('2015-08-13T15:55:00-08:00'),
      desc: 'Mariachi',
      img: [],
      reminder: false
    }, {
      id: 25,
      name: "Zafire Seattle",
      type: "Salsa dance",
      start: new Date('2015-08-13T15:45:00-08:00'),
      end: new Date('2015-08-13T16:00:00-08:00'),
      desc: 'Salsa dance',
      img: [],
      reminder: false
    }, {
      id: 26,
      name: "Grupo Avión",
      type: "Pop",
      start: new Date('2015-08-13T16:00:00-08:00'),
      end: new Date('2015-08-13T16:15:00-08:00'),
      desc: 'Pop',
      img: [],
      reminder: false
    }, {
      id: 27,
      name: "Eduardo y Vanessa",
      type: "Salsa",
      start: new Date('2015-08-13T16:15:00-08:00'),
      end: new Date('2015-08-13T16:20:00-08:00'),
      desc: 'Salsa',
      img: [],
      reminder: false
    }, {
      id: 28,
      name: "Colombia Presente",
      type: "Cumbia/Salsa",
      start: new Date('2015-08-13T16:20:00-08:00'),
      end: new Date('2015-08-13T16:30:00-08:00'),
      desc: 'Cumbia/Salsa',
      img: [],
      reminder: false
    }, {
      id: 29,
      name: "Panama Folklórico Seattle",
      type: "Folklórico",
      start: new Date('2015-08-13T16:30:00-08:00'),
      end: new Date('2015-08-13T16:40:00-08:00'),
      desc: 'Folklórico',
      img: [],
      reminder: false
    }, {
      id: 30,
      name: "Ometepe",
      type: "Folklórico",
      start: new Date('2015-08-13T16:40:00-08:00'),
      end: new Date('2015-08-13T16:50:00-08:00'),
      desc: 'Folklórico',
      img: [],
      reminder: false
    }, {
      id: 31,
      name: "Ballet Guelaguetza",
      type: "Folklórico",
      start: new Date('2015-08-13T16:50:00-08:00'),
      end: new Date('2015-08-13T17:00:00-08:00'),
      desc: 'Folklórico',
      img: [],
      reminder: false
    }, {
      id: 32,
      name: "Irma la Jalisciense",
      type: "Regional",
      start: new Date('2015-08-13T17:00:00-08:00'),
      end: new Date('2015-08-13T17:10:00-08:00'),
      desc: 'Regional',
      img: [],
      reminder: false
    }, {
      id: 33,
      name: "Orquestra La Grande del NW",
      type: "Salsa",
      start: new Date('2015-08-13T17:10:00-08:00'),
      end: new Date('2015-08-13T17:30:00-08:00'),
      desc: 'Salsa',
      img: [],
      reminder: false
    }, {
      id: 34,
      name: "Mariachi Ayutla",
      type: "Mariachi",
      start: new Date('2015-08-13T17:30:00-08:00'),
      end: new Date('2015-08-13T18:00:00-08:00'),
      desc: 'Mariachi',
      img: [],
      reminder: false
    }, {
      id: 35,
      name: "Estrellitas Mexicanas",
      type: "Folklórico",
      start: new Date('2015-08-13T18:00:00-08:00'),
      end: new Date('2015-08-13T18:10:00-08:00'),
      desc: 'Folklórico',
      img: [],
      reminder: false
    }, {
      id: 36,
      name: "ángeles de México",
      type: "Folklórico",
      start: new Date('2015-08-13T18:10:00-08:00'),
      end: new Date('2015-08-13T18:30:00-08:00'),
      desc: 'Ballet Folklórico ',
      img: [],
      reminder: false
    }, {
      id: 37,
      name: "Hermanos Gonzalez",
      type: "Tierra Cali",
      start: new Date('2015-08-13T18:30:00-08:00'),
      end: new Date('2015-08-13T18:45:00-08:00'),
      desc: 'Grupo de arpa - Tierra Cali',
      img: [],
      reminder: false
    }, {
      id: 38,
      name: "Voces de Mexico",
      type: "Mariachi",
      start: new Date('2015-08-13T18:45:00-08:00'),
      end: new Date('2015-08-13T19:00:00-08:00'),
      desc: 'Mariachi Juvenil',
      img: [],
      reminder: false
    }, {
      id: 39,
      name: "Consulado Mexicano", //Ceremonia Civica/ Himno Nacional / Grito de Independencia /
      type: "Ceremonia",
      start: new Date('2015-08-13T19:00:00-08:00'),
      end: new Date('2015-08-13T19:10:00-08:00'),
      desc: 'Grito de Independencia', //Ceremonia Civica/ Himno Nacional /
      img: [],
      reminder: false
    }, {
      id: 40,
      name: "Bailadores de Bronce",
      type: "Folklórico",
      start: new Date('2015-08-13T19:10:00-08:00'),
      end: new Date('2015-08-13T19:30:00-08:00'),
      desc: 'Folklórico',
      img: [],
      reminder: false
    }, {
      id: 41,
      name: "Banda Vagos",
      type: "Banda",
      start: new Date('2015-08-13T19:30:00-08:00'),
      end: new Date('2015-08-13T19:45:00-08:00'),
      desc: 'Banda',
      img: [],
      reminder: false
    }, {
      id: 42,
      name: "César y El Imperio",
      type: "Banda",
      start: new Date('2015-08-13T19:45:00-08:00'),
      end: new Date('2015-08-13T20:00:00-08:00'),
      desc: 'Banda',
      img: [],
      reminder: false
    }, {
      id: 43,
      name: "Clausura",
      type: "Banda",
      start: new Date('2015-08-13T20:00:00-08:00'),
      end: new Date('2015-08-13T20:30:00-08:00'),
      desc: 'Edgar Guerrero / Nayelli Valle',
      img: [],
      reminder: false
    }
  ];

  return {
    all: function() {
      return events;
    },
    remove: function(events) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(id) {
      return events[+(~-id)];
      // return null;
    }
  };
});
