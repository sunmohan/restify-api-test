var restify = require('restify');
 
var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 
server.get('/', function (req, res, next) {
  res.send(req.params);
  return next();
});
server.post('/', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(8080, function() {
  console.log('%s listening Port', server.name, 8080);
});