Template.Chair.rendered = function() {
    mySetColors("#8c0243", "#5d022d");


    // Get Mitfahrgelegenheit data.
    Meteor.call('getEbay', "tisch", "hamburg", function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("itemsListChair",respJson.data.results);
        Session.set("filteredItemsListChair",respJson.data.results);
      }
    });

}

Template.Chair.helpers({

  items: function() {
    return Session.get("filteredItemsListChair");
  },

});
