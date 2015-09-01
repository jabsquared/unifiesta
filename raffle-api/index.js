var restify = require('restify');
var fs = require('fs');

var pickRandom = require('pick-random');

var server = restify.createServer();
server.use(restify.bodyParser());
// Initialize raffle number, this should sit still...
var N = [99999];
var R = [99999];

for (var i = 0; i < 9999; i++) {
  N[i] = i;
}

function pickP() {
  var p = pickRandom(N, {
    count: 1
  });
  while (p == (-9)) {
    p = pickRandom(N, {
      count: 1
    });
  }
  return p;
}

function getRaffle(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var p = pickP();
  N[p] = -9;
  R.push(p);

  console.log(p);

  res.send(p);
}

server.get('/gr', getRaffle);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
