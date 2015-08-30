Instances = new Mongo.Collection("instances");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.Instances.helpers({
    instances: function () {
      return Instances.find({ userId: Meteor.userId()});
    }
  });

  Template.Instances.events({
    "click .delete": function () {
      Meteor.call("deleteInstance", this._id);
      FlashMessages.sendSuccess("Instance has been deleted.");
    },
    "submit .edit-thing": function (event) {

      Meteor.call("updateInstance", event.target.instance_id.value,
                                 event.target.name.value,
                                 event.target.description.value,
                                 Meteor.userId());

      FlashMessages.sendSuccess("Instance has been saved.");
      $("#editInstanceModal_".concat(event.target.instance_id.value)).modal("hide");
      Router.go('/instances');
      // Prevent default form submit
      return false;
    }
  });
}
