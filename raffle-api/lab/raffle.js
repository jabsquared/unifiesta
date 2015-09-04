'use strict';

var PouchUtils = require('./pouchutils');

var pickRandom = require('pick-random');

var N = [99999];
var R = [];

var init = function Init() {
  for (var i = 1; i <= 9999; i++) {
    N[i] = i;
  }
};

var pickP = function PickP() {
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
  N[p] = 0;
  R.push(p[0]);
  return p;
};

var vote = function Vote (id) {
  PouchUtils.update(id.toString());
};

exports.init = init;
exports.vote = vote;

module.exports = exports;
