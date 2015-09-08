'use strict';

var secret = require('./secret');

var PouchDB = require('pouchdb');

var raffleDB = (secret.cloudantAuth.url === "lab") ?
  new PouchDB("http://127.0.0.1:5984/raffle") : // Local testing
  new PouchDB(secret.cloudantAuth.url + "/raffle", {
    auth: {
      username: secret.cloudantAuth.user,
      password: secret.cloudantAuth.pass,
    }
  });

var create = function Create(id, size, callback) {
  var N = [];
  for (var i = 0; i < size; ++i) {
    N[i] = i;
  }
  raffleDB.put({
    _id: id,
    N : N,
    R : [],
    S : size
  }, function(err, response) {
    if (err) {
      return console.log("POST ERR:" + err);
    }
    callback();
    // console.log(response);
    return;
  });
};

var fetch = function Fetch(id, size, callback) {
  raffleDB.get(id, function (err,doc) {
    if (err || (!doc.S)) {
      // Create new raffle db
      console.log("UP ERR:" + err);
      create(id, size, function () {
        fetch (id, size, callback);
      });
      return;
    }
    callback(doc);
  });
};

var update = function Update(id, p0) {
  raffleDB.get(id, function(err, doc) {
    if (err || (!doc.N && !doc.R)) {
      // Create new raffle db, size 4
      // create(id, 4, updat);
      return console.log("UP ERR:" + err);
    }

    var index = doc.N.indexOf(p0);
    doc.N.splice(index, 1);
    doc.R.push(p0);
    raffleDB.put({
      N : doc.N,
      R : doc.R,
      S : doc.S
    }, doc._id, doc._rev, function(err, response) {
      if (err) {
        return console.log(err);
      }
      // handle response
    });
  });
};

exports.fetch = fetch;
exports.update = update;

module.exports = exports;
