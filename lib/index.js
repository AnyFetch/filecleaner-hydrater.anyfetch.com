'use strict';

var AnyfetchClient = require('anyfetch');

/**
 * HYDRATING FUNCTION
 *
 * @param {string} path Path of the specified file
 * @param {string} document to hydrate
 * @param {function} cb Callback, first parameter, is the error if any, then the processed data
 */

module.exports = function(path, document, changes, cb) {
  var anyfetchClient = new AnyfetchClient(null, null, cb.apiUrl);
  anyfetchClient.setAccessToken(document.access_token);
  anyfetchClient.deleteDocument(document.identifier, cb);
};
