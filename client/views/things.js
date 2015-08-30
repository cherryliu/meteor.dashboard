Things = new Mongo.Collection("things");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.Things.helpers({
    things: function () {
      return Things.find({ userId: Meteor.userId()});
    }
  });

  Template.Things.events({
    "click .delete": function () {
      Meteor.call("deleteThing", this._id);
      FlashMessages.sendSuccess("Application has been deleted.");
    },
    "submit .edit-thing": function (event) {

      Meteor.call("updateThing", event.target.thingId.value,
                                 event.target.name.value,
                                 event.target.description.value,
                                 Meteor.userId());

      FlashMessages.sendSuccess("Thing has been saved.");
      $("#editThingModal_".concat(event.target.thingId.value)).modal("hide");
      Router.go('/things');
      // Prevent default form submit
      return false;
    }
  });
}
