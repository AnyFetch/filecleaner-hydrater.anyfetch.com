'use strict';

var Anyfetch = require('anyfetch');
var rarity = require('rarity');

/**
 * HYDRATING FUNCTION
 *
 * @param {string} path Path of the specified file
 * @param {string} document to hydrate
 * @param {function} cb Callback, first parameter, is the error if any, then the processed data
 */

module.exports = function(path, document, changes, cb) {
  var anyfetch = new Anyfetch(document.access_token);
  anyfetch.setApiUrl(cb.apiUrl);
  anyfetch.deleteDocumentByIdentifier(document.identifier, rarity.carryAndSlice([{}], 2, function(err) {
    cb(err, null);
  }));
};
