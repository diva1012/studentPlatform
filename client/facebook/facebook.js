Template.Facebook.rendered = function() {
  Meteor.call('getUserData', function(error, respJson) {

    if(error) {
      console.log("error occured on receiving data from server. ", err );
    } else {
      Session.set("userData", respJson.data);
    }
  });
}

Template.Facebook.helpers({
  userData: function(){
    return Session.get("userData");
  }
});


Template.Facebook.events({
    'click #btn-user-data': function(e) {
        Meteor.call('getUserData', function(err, data) {
             $('#result').text(JSON.stringify(data, undefined, 4));
         });
    },

    'click #btn-user-friendsdata': function(e) {
            Meteor.call('getFriendsData', function(err, data) {
                 $('#result-friends').text(JSON.stringify(data, undefined, 4));
             });
    },

  'click #btn-user-groups': function(e) {
        Meteor.call('getGroupsData', 'wohnung.frei.berlin', function(err, data) {
             $('#result-groups').text(JSON.stringify(data, undefined, 4));
         });
    },

  'click #btn-user-files': function(e) {
        Meteor.call('getGroupsFiles', function(err, data) {
             $('#result-files').text(JSON.stringify(data, undefined, 4));
         });
    },

    'click #btn-user-post': function(e) {
        Meteor.call('getGroupsPost', function(err, data) {
             $('#result-post').text(JSON.stringify(data, undefined, 4));
         });
    },

    'click #btn-user-groups2': function(e) {
            Meteor.call('getGroupsData', 'WG.Zimmer.frei.in.Berlin', function(err, data) {
                 $('#result-groups2').text(JSON.stringify(data, undefined, 4));
             });
      },

    'click #btn-user-groups3': function(e) {
            Meteor.call('getGroupsData', 'WohnungenundWGsinBerlin', function(err, data) {
                 $('#result-groups3').text(JSON.stringify(data, undefined, 4));
             });
      },

    'click #btn-ebay': function(e) {
            Meteor.call('getEbay', function(err, data) {
                 $('#result-groups4').text(JSON.stringify(data, undefined, 4));
             });
      },

});
