Template.Rating.rendered = function() {
    mySetColors("#e56526", "#923f16");

    Meteor.startup(function() {
      GoogleMaps.load();
    });

    var ratingMap = "";
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      /*
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
      */

      // Add the map to the Session for later handling
    });

    Session.set("googleMarkers", [])




}

Template.Rating.helpers({
  ratings: function() {
    return Session.get("filteredRatingList");
  },

  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(52.5306438, 13.3830683),
        zoom: 11
      };
    }
  }

});

Template.Rating.events({
  "click #btn-search-rating": function(event, template){

    var item = document.getElementById('srch-item-rating').value;
    var city = document.getElementById('srch-city-rating').value;

    // Get Rating data.
    Meteor.call('getRaitings', city, item, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        var results = respJson.data.results
        // Set the ratings
        Session.set("ratingsList", results);
        Session.set("filteredRatingList", results);


        // Add red dots on google
        for (var i = 0; i < results.length; i++) {

          Meteor.call('getGeocode', results[i].adress, function(err, respJson) {

            if(err) {
              console.log("error occured on receiving data from server. ", err );
            } else {

              var ratingsMap = Session.get("ratingsMap")

              // Delete existing markers
              var markers = Session.get("googleMarkers")
              for (var i = 0; i < markers.length; i++ ) {
                  markers[i].setMap(null);
              }
              markers.length = 0;

              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(respJson[0].latitude, respJson[0].longitude),
                map: GoogleMaps.maps.exampleMap.instance,
              });

              var markers = Session.get("googleMarkers")
              markers.push(marker);

            }
          });
        }



      }
    });
  }

});
