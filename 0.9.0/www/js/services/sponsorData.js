app.factory('sponsorData', function() {
  console.log('SERV: Sponsor Data');
  var sps = [];
  for (var i = 0; i < 32; ++i) {
    sps[i] = {
      id: 'p' + i,
      src: 'img/sps/sponsor' + -~i + '.jpg',
    };
  }

  var url = [
    "http://www.harrismitsubishinw.com/",
    "http://www.harrismitsubishinw.com/",
    "http://www.auburnwa.gov/home.html",
    "https://codeday.org/seattle",
    "http://www.muckleshootcasino.com/",
    "http://www.delridgeinsurancewest.com/",
    "http://www.meencanta.com/",
    "http://www.multicare.org/",
    "http://www.auburnareawa.org/",
    "http://www.auburndt.org/",
    "http://www.letsreadkingcounty.org/",
    "http://www.pgaribaldi.com/",
    "http://www.studiosfany.com/",
    "http://www.cuatesarte.com/",
    "http://www.xfinity.com/cable-internet-packages.html",
    "http://www.justiceforyou.com/?keyword=phillips%20law&gclid=COnr6qPOtccCFQIQaQodbJoFGw",
    "http://www.vikaydesign.com/",
    "http://www.globoazulevents.com/",
    "http://www.americasmovingmachines.com/",
    "https://www.facebook.com/domingo.flores.10?fref=ts",
    "https://www.facebook.com/deejaymixx?fref=ts",
    "http://consulmex.sre.gob.mx/seattle/",
    "http://www.losagaves.net/",
    "http://www.ellagomexicanrestaurant.com/",
    "http://www.star1015.com/",
    "https://www.facebook.com/AdrysPromotionsandPublicity/info#!/AdrysPromotionsandPublicity/info?tab=page_info",
    "http://www.komonews.com/radio",
    "https://www.facebook.com/miguel.gonzalez.710?fref=ts",
    "https://www.facebook.com/arepa.venezuelankichen",
    "http://www.mundofox.com/",
    "http://www.komonews.com/"
  ];
  return {
    all: function() {
      return sps;
    },
  };
});
