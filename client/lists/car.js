Template.Car.rendered = function() {
    mySetColors("#d9d42c", "#6f6c17");

    // Get Mitfahrgelegenheit data.
    Meteor.call('getTransport', "Berlin", "Dortmund", myTodaysDate(), function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("carsList",respJson.data.results);
      }
    });

    // Calender settings
    $('#my-datepicker').datepicker({
      format: "dd.mm.yyyy",
      autoclose: true
    });

}

Template.Car.helpers({
  cars: function() {
    return Session.get("carsList");
  },

  todaysDate: function() {
    return myTodaysDate()
  }
});

Template.Car.events({
  "click #btn-search": function(event, template){

    var startValue = document.getElementById('srch-start').value;
    var goalValue = document.getElementById('srch-goal').value;
    var dateValue = document.getElementById('my-datepicker').value;

    // Get Mitfahrgelegenheit data.
    Meteor.call('getTransport', startValue, goalValue, dateValue, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("carsList", respJson.data.results);
      }
    });
  },

  "click #btn-swap": function(event, template){
    var startValue = document.getElementById('srch-start').value;
    var goalValue = document.getElementById('srch-goal').value;

    document.getElementById('srch-start').value = goalValue;
    document.getElementById('srch-goal').value = startValue;
  }
});
