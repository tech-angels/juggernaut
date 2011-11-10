require("./ext/array");

var Publish = require("./publish");
var Server  = require("./server");

module.exports.listen = function(port, address){
  Publish.listen();
  var server = Server.inst();
  server.listen(port, address);
};
