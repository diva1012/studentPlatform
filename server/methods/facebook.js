function Facebook(accessToken) {
    this.fb = Meteor.npmRequire('fbgraph');

    // START Daten
    var myTocken= "185013235166746|pz5rzkCJAD_jkZfW-o_oMyJXQqM";
    var groupId
    var accToken = {
      "client_id": "185013235166746",
      "client_secret": "a20027b9f642e601418bd6b63e22b0e6"
    }
    // END Daten

    //this.accessToken = accToken;
    this.accessToken = accessToken;

    this.fb.setAccessToken(this.accessToken);
    this.options = {
        timeout: 3000,
        pool: {maxSockets: Infinity},
        headers: {connection: "keep-alive"}
    }
    this.fb.setOptions(this.options);
}

Facebook.prototype.getUserData = function() {
    return this.query('me');
}

Facebook.prototype.getFriendsData = function() {
    return this.query('/me/friendlists');
}

/*
Facebook.prototype.getGroupsData = function() {
    return this.query('/me/groups');
}
*/

Facebook.prototype.getGroupsData = function(groupId) {

    //return this.query('/1714786542089655/feed');
    //return this.query('/178638415821259/feed?fields=picture,comments.limit(3),link');
    var options = "/feed?fields=message,picture,comments.limit(3),link,name";

    return this.query('/' + groupId + options);
    //wg.wohnung.berlin
}



Facebook.prototype.getGroupsFiles = function() {

    //return this.query('/1714786542089655/feed');

    return this.query('/178638415821259/files');
}

Facebook.prototype.getGroupsPost = function() {

    //return this.query('/1714786542089655/feed');

    return this.query('/178638415821259_178651539153280?fields=message,picture');
}

Facebook.prototype.query = function(query, method) {
    var self = this;
    var method = (typeof method === 'undefined') ? 'get' : method;
    var data = Meteor.sync(function(done) {
        self.fb[method](query, function(err, res) {
            done(null, res);
        });
    });
    return data.result;
}


Meteor.methods({
    getUserData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserData();
        return data;
    },

    getFriendsData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getFriendsData();
        return data;
    },

    getGroupsData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getGroupsData("wohnung.frei.berlin");
        return data;
    },

    getGroupsFiles: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getGroupsFiles();
        return data;
    },

    getGroupsPost: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getGroupsPost();
        return data;
    },

    getGroupsDataHaus: function () {
          var fb = new Facebook(Meteor.user().services.facebook.accessToken);
          var data = fb.getGroupsData("wohnung.frei.berlin");
          return data;
    },



});
