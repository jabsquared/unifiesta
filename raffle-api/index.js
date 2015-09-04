var restify = require('restify');

var server = restify.createServer();
server.use(restify.bodyParser());
// Initialize raffle number, this should sit still...

var raffle = require('./lab/raffle');

function getRaffle(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  // console.log(p[0]);
  raffle.pick("unifiesta-9-13-2015", 4, function (p) {
    res.send(p);
  });


  // res.send(N);
}

server.get('/gr', getRaffle);

server.listen(process.env.VCAP_APP_PORT || 1314, function() {
  console.log('%s listening at %s', server.name, server.url);
});
