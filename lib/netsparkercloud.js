var request = require("request");

var options = { method: 'POST',
  url: 'https://www.netsparkercloud.com/api/1.0/scans/new',
  headers: 
   { 'Postman-Token': 'abf098f7-8c21-4dee-90d5-8751b359dd9a',
     'Cache-Control': 'no-cache',
     Authorization: 'Basic ZWFjZTQ5MGY0NDliNDRkOWIzNWNhN2RhMDE4NjEwMTc6RVkzc1Z0WXVZcHgzZUR2Z2NRcisvb0FXTmtid2k5TGVJcnRuTUVnVFQxVT0=',
     'Content-Type': 'application/json' },
  body: 
   { TargetUri: 'http://php.testsparker.com',
     PolicyId: 'b20186662a01e411976c0a45dbb897e8' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
