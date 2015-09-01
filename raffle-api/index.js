var restify = require('restify');

var server = restify.createServer();

var N = [];

server.post('/hello', function create(req, res, next) {
  res.send(201, Math.random().toString(36).substr(3, 8));

  return next();
});

server.put('/hello', send);
server.get('/hello/:name', send);
server.head('/hello/:name', send);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
