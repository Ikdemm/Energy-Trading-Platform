const gadgetModel = require('../models/gadget');
var base = require('./repository.js');

module.exports = {
    save: function(gadget) {
        base.save(gadget, gadgetModel)
    },
    update: function(gadget, id) {
        base.update(gadget, id, gadgetModel)
    },
    findById: function(id) {
        base.findById(id, gadgetModel)
    },
    deleteById: function(id) {
        base.remove(id);
    }
}