var orm = require("../config/orm.js")

// CREATE THE CODE THAT WILL CALL THE ORM FUNCTIONS
// USING BURGER SPECIFIC INPUT FOR THE ORM

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// EXPORT
module.exports = burger;