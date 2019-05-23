const gadgetModel = require("../models/Gadget.js");
var base = require("./repository.js");

module.exports = {
  save: function(gadget) {
    return base.save(gadget, gadgetModel);
  },
  update: function(gadget, id) {
    return base.update(gadget, id, gadgetModel);
  },
  findById: function(id) {
    base.findById(id, gadgetModel);
  },
  deleteById: function(id) {
    base.remove(id);
  }
};
