Template.Chair.rendered = function() {
    mySetColors("#8c0243", "#5d022d");


    // Get Fahrräder
    Meteor.call('getEbay', [], function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("itemsListChair", respJson.result);
        Session.set("filteredItemsListChair",respJson.result);
      }
    });

}

Template.Chair.helpers({

  items: function() {
    return Session.get("filteredItemsListChair");
  },

});

Template.Chair.events({
  "click #btn-search-chair": function(event, template){

    var keyWordsString = document.getElementById('srch-chair').value;
    var keyWords = keyWordsString.split(" ");

    // Get Fahrräder
    Meteor.call('getEbay', keyWords, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("itemsListChair",respJson.result);
        Session.set("filteredItemsListChair",respJson.result);
      }
    });
  }
});
