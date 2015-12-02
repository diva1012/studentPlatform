// slider starts at 20 and 80
Session.setDefault("slider-bicycle1", [20, 80]);
Session.setDefault("slider2", [20, 80]);
Session.setDefault("slider3", [20, 80]);


Template.Bicycle.events({
  "click #menu-button": function(event, template){

    var isMenuShown = Session.get("menuVisible");

    if (isMenuShown) {
        document.getElementById("right-menu").style.visibility='hidden';
        Session.set("menuVisible", false);
    } else {
      document.getElementById("right-menu").style.visibility='visible';
      Session.set("menuVisible", true);
    }
  },

  "click #btn-search-bike": function(event, template){

    var bicycleType = document.getElementById('srch-bike').value;

    // Get Fahrräder
    Meteor.call('getBicycles', bicycleType, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles",respJson.data.results);
        Session.set("filteredBicycles",respJson.data.results);
      }
    });
  }

});

Template.Bicycle.rendered = function() {
    mySetColors("#05c272", "#03663c");

    // Get Fahrräder
    Meteor.call('getBicycles', "Cityrad", function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles",respJson.data.results);
        Session.set("filteredBicycles",respJson.data.results);
      }
    });

    // Create toggles

    $('#toggle-newused-bicycle')['bootstrapSwitch']();
    $('#toggle-newused-bicycle').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-newused-bicycle").style.display = "block";
      } else {
        document.getElementById("panel-newused-bicycle").style.display = "none";
      }
    });

    $('#toggle-new')['bootstrapSwitch']();
    $('#toggle-new').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-used')['bootstrapSwitch']();
    $('#toggle-used').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-provider-bicycle')['bootstrapSwitch']();
    $('#toggle-provider-bicycle').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-provider-bicycle").style.display = "block";
      } else {
        document.getElementById("panel-provider-bicycle").style.display = "none";
      }
    });

    $('#toggle-tr1')['bootstrapSwitch']();
    $('#toggle-tr1').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-tr2')['bootstrapSwitch']();
    $('#toggle-tr2').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-tr3')['bootstrapSwitch']();
    $('#toggle-tr3').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-everywhere-bicycle')['bootstrapSwitch']();
    $('#toggle-everywhere-bicycle').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    this.$("#slider-bicycle1").noUiSlider({
      start: Session.get("slider-bicycle1"),
      connect: true,
      range: {
        'min': 0,
        'max': 100,
      },
      step: 1
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-bicycle1', [Math.round(val[0]), Math.round(val[1])]);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-bicycle1', [Math.round(val[0]), Math.round(val[1])]);
    });

}

Template.Bicycle.helpers({

  slider_bicycle1: function () {
      return Session.get("slider-bicycle1");
  },

  slider2: function () {
      return Session.get("slider2");
  },

  slider3: function () {
      return Session.get("slider3");
  },

  bicycles: function () {
      return Session.get("filteredBicycles");
  }

});
