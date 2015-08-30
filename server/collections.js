Things = new Mongo.Collection("things");
Instances = new Mongo.Collection("instances");

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

// In your server code: define a method that the client can call
Meteor.methods({
  //Manage applications
  deleteThing: function (appId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Things.remove(appId);
  },
  addThing: function (name, description, userId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Things.insert({
      name: name.trim(),
      userId: userId,
      description: description.trim(),
      createdAt: new Date() // current time
    });
  },
  updateThing: function (thingId, name, description, userId) {
    thing = Things.findOne({_id: thingId});

    Things.update({_id: thingId},
      { name: name.trim(),
        description: description.trim(),
        userId: userId,
        createdAt: thing.createdAt});
      },
      
  //Manage MPS instances    
  deleteInstance: function (instance_id) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Instances.remove(instance_id);
  },
  addInstance: function (name, description, userId) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Instances.insert({
      name: name.trim(),
      userId: userId,
      description: description.trim(),
      createdAt: new Date() // current time
    });
  },
  updateInstance: function (instance_id, name, description, userId) {
    instance = Instances.findOne({_id: instance_id});

    Instances.update({_id: instance_id},
      { name: name.trim(),
        description: description.trim(),
        userId: userId,
        createdAt: instance.createdAt});
      }
});
