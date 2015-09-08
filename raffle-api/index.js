var restify = require('restify');

var server = restify.createServer();
server.use(restify.bodyParser());
// Initialize raffle number, this should sit still...

var raffle = require('./lab/raffle');

var theEvent = {
  name : "unifiesta-9-13-2015",
  size : 99999
};

function getRaffle(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  // console.log(p[0]);
  raffle.pick(theEvent.name, theEvent.size, function (p) {
    res.send(p);
  });


  // res.send(N);
}

function drawRaffle(req, res, next) {
  // body...
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var winnerCount = req.params.wc;

  raffle.draw (theEvent.name, theEvent.size, winnerCount,function (p) {
    res.send(p);
  });
}

server.get('/gr', getRaffle);

server.get('/dr/:wc', drawRaffle);

server.listen(process.env.VCAP_APP_PORT || 1314, function() {
  console.log('%s listening at %s', server.name, server.url);
});
