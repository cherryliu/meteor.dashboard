if (Meteor.isClient) {
  Template.NewInstance.events({
    "submit .new-thing": function (event) {
      Meteor.call("addInstance", event.target.name.value, event.target.description.value, Meteor.userId());

      // Clear form
      event.target.name.value = "";
      event.target.description.value = "";

      FlashMessages.sendSuccess("Instance has been saved.");
      Router.go('/instances');
      // Prevent default form submit
      return false;
    }
  });
}
