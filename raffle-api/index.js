var restify = require('restify');
var fs = require('fs');

var pickRandom = require('pick-random');

var server = restify.createServer();
server.use(restify.bodyParser());
// Initialize raffle number, this should sit still...
var N = [99999];
var R = [];

for (var i = 1; i <= 9999; i++) {
  N[i] = i;
}

function pickP() {
  var p = [0];
  if (R.length !== N.length) {
    p = pickRandom(N, {
      count: 1
    });
    while (p[0] === (0)) {
      p = pickRandom(N, {
        count: 1
      });
    }
  }
  return p;
}

function getRaffle(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var p = pickP();
  N[p] = 0;
  R.push(p[0]);

  console.log(p[0]);

  res.send(p);
  // res.send(N);
}

server.get('/gr', getRaffle);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
