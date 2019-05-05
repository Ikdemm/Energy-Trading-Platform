var mongoose = require('mongoose'),
  ObjectId = mongoose.Types.ObjectId;


//retrieving marque from database
module.exports = {
  find: function (model) {
    model.find(function (err, model) {
      if (err) {
        console.log(err)
        return err;
      }
      else {
        console.log(model)
        return model;
      }
    });
  },
  findAll: function (model) {
    return model.find();
  },
  // find by id 
  findById: function (id, model) {
    model.findById(new ObjectId(id), function (err, model) {
      if (err) {
        return err;
      }
      else {
        return model;
      }
    });
  },
  findOne: function (id, model) {
    return model.findOne({_id :id});
  },
  //adding marque from database
  save: function (body, model) {
    let objectModel = new model(body);
    objectModel._id = new ObjectId();
    return objectModel.save();
   /* objectModel.save((err, object) => {
      
      if (err) {
        console.log(false)
        return err;
      }
      else {
        console.log(true)
        return object;
      }
    });*/
  },
  save2: function (body, model) {
    let objectModel = new model(body);
    objectModel._id = new ObjectId();
    //return objectModel.save();
    objectModel.save((err, object) => {
      
      if (err) {
        console.log(err)
        return err;
      }
      else {
        console.log(object)
        return object;
      }
    });
  },
  //updating marque from database
  update: function (body, id, model) {
    model.findOneAndUpdate(new ObjectId(id), body, { new: true },
      function (err, result) {
        if (err) {
          return err;
        }
        else {
          return result;
        }
      })
  },
  //deleting marque from database
  remove: function (id, model) {
    model.findOneAndDelete(new Object(id), function (err, result) {
      if (err) {
        console.log(err)
        return err;
      }
      else {
        console.log(result)
        return result;
      }
    });
  }
}
