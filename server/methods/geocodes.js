Meteor.methods({
    getGeocode: function(adress) {
      var geo = new GeoCoder();
      var result = geo.geocode(adress);
      return result
    }

})
