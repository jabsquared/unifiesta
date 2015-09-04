'use strict';

var PouchUtils = require('./pouchutils');

var pickRandom = require('pick-random');

var pick = function Pick(id, size, callback) {
  var p = [0];
  // get doc at id, and size
  PouchUtils.fetch(id, size, function(doc) {
    if (doc.N.length > 1 ) {
      while (p[0] === (0)) {
        p = pickRandom(doc.N, {
          count: 1
        });
      }
    }
    PouchUtils.update(id, p[0]);
    callback(p);
  });
};

exports.pick = pick;

module.exports = exports;
