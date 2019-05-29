const userModel = require("../models/User.js");
var base = require("./repository.js");

module.exports = {
  save: function(user) {
    return base.save(user, userModel);
  },
  save2: async function(user) {
    await base.save2().then(result => {
      console.log(result);
      return result;
    });
  },
  update: function(user, id) {
    return base.update(user, id, userModel);
  },
  findById: function(id) {
    base.findById(id, userModel);
  },
  deleteById: function(id) {
    base.remove(id);
  }
};
