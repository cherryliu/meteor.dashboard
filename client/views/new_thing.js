if (Meteor.isClient) {
  Template.NewThing.events({
    "submit .new-thing": function (event) {
      Meteor.call("addThing", event.target.name.value, event.target.description.value, Meteor.userId());

      // Clear form
      event.target.name.value = "";
      event.target.description.value = "";

      FlashMessages.sendSuccess("Thing has been saved.");
      Router.go('/things');
      // Prevent default form submit
      return false;
    }
  });
}
