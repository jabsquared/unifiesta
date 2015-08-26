app.factory('sponsorData', function() {
  console.log('SERV: Sponsor Data');
  var sps = [];
  for (var i = 0; i < 32; ++i) {
    sps[i] = {
      id: 'p' + i,
      src: 'img/sps/sponsor' + -~i + '.jpg',
    };
  }
  return {
    all: function() {
      return sps;
    },
  };
});
