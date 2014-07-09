'use strict';

require('should');

var eml = require('../lib/');
var AnyfetchClient = require('anyfetch');
var anyfetchHydrater = require('anyfetch-hydrater');

process.env.ANYFETCH_API_URL = 'http://localhost:1338';

// Create a fake HTTP server
var apiServer = AnyfetchClient.debug.createTestApiServer();
apiServer.listen(1338);
after(function(){
  apiServer.close();
});

describe('Test Filecleaner', function() {
  it('should delete the document', function(done){
    var document = {
      data: {},
      metadata: {},
      access_token: "123",
      identifier: "azerty",
    };

    var changes = anyfetchHydrater.defaultChanges();

    eml(__dirname + "/samples/osef.lock", document, changes, done);
  });
});
