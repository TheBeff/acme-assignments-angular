const server = require('http').createServer(require('./app'));
const db = require('./db/index');
var port = process.env.PORT || 3000;

db.sync()
  .then(function(response){
  	console.log("tables created");
  });

server.listen(port, function(){
	console.log("Listening on port " + port);
});