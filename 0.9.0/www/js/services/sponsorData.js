app.factory('sponsorData', function() {
  console.log('SERV: Sponsor Data');
  var img = [];
  for (var i = 0; i < 32; ++i) {
    img[i] = 'img/sps/sponsor' + -~i + '.jpg';
  }
  return {
    img: img,
  };
});
