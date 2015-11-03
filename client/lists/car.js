Session.setDefault("slider-cars1", [20, 80]);
Session.setDefault("slider-cars2", [20, 80]);
Session.setDefault("slider-cars3", [20, 80]);

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

    // Render toggles and assign events
    $('#toggle-provider-cars')['bootstrapSwitch']();
    $('#toggle-provider-cars').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-provider-cars").style.display = "block";
      } else {
        document.getElementById("panel-provider-cars").style.display = "none";
      }
    });

    $('#toggle-pr1')['bootstrapSwitch']();
    $('#toggle-pr1').on('switch-change', function (event, data) {
      if (data.value){      }
      else {      }
    });

    $('#toggle-pr2')['bootstrapSwitch']();
    $('#toggle-pr2').on('switch-change', function (event, data) {
      if (data.value){      }
      else {      }
    });

    $('#toggle-pr3')['bootstrapSwitch']();
    $('#toggle-pr3').on('switch-change', function (event, data) {
      if (data.value){      }
      else {      }
    });

    // Calender settings
    $('#my-datepicker').datepicker({
      format: "dd.mm.yyyy",
      autoclose: true
    });

    this.$("#slider-cars1").noUiSlider({
      start: Session.get("slider-cars1"),
      connect: true,
      range: {
        'min': 0,
        'max': 100,
      },
      step: 1

    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-cars1', val);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-cars1', [Math.round(val[0]), Math.round(val[1])]);
    });

    this.$("#slider-cars2").noUiSlider({
      start: Session.get("slider-cars2"),
      connect: true,
      range: {
        'min': 0,
        'max': 100
      },
      step: 1

    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-cars2', val);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-cars2', [Math.round(val[0]), Math.round(val[1])]);
    });

    this.$("#slider-cars3").noUiSlider({
      start: Session.get("slider-cars3"),
      connect: true,
      range: {
        'min': 0,
        'max': 100
      },
      step: 1

    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-cars3', val);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-cars3', [Math.round(val[0]), Math.round(val[1])]);
    });

}

Template.Car.helpers({

  slider1: function () {
      return Session.get("slider-cars1");
  },

  slider2: function () {
      return Session.get("slider-cars2");
  },

  slider3: function () {
      return Session.get("slider-cars3");
  },

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
  },

  "click #menu-button-cars": function(event, template){

    var isMenuShown = Session.get("menuVisibleCars");

    if (isMenuShown) {
        document.getElementById("right-menu-cars").style.visibility='hidden';
        Session.set("menuVisibleCars", false);
    } else {
      document.getElementById("right-menu-cars").style.visibility='visible';
      Session.set("menuVisibleCars", true);
    }
  }

});
