const panelModel = require("../models/Panel.js");
var base = require("./repository.js");

module.exports = {
  save: function(panel) {
    return base.save(panel, panelModel);
  },
  update: function(panel, id) {
    console.log(panel), console.log(id);
    return base.update(panel, id, panelModel);
  },
  findById: function(id) {
    base.findById(id, panelModel);
  },
  deleteById: function(id) {
    base.remove(id);
  }
};
