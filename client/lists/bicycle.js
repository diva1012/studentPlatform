// slider starts at 20 and 80
Session.setDefault("slider-bicycle1", [20, 80]);
Session.setDefault("slider2", [20, 80]);
Session.setDefault("slider3", [20, 80]);
Session.setDefault("load", true);

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
    Session.set("load", true);
    Meteor.call('getBicycles', bicycleType, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles1",respJson.data.results);
        Session.set("filteredBicycles",respJson.data.results);
      }
      Session.set("load", false);
    });

    // Get Ebay data
    Meteor.call('getEbay', [bicycleType], function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles2", respJson.result);
        Session.set("filteredBicycles",respJson.result);
      }
    });

  }

});

Template.Bicycle.rendered = function() {
    mySetColors("#05c272", "#03663c");

    // Get Fahrräder
    Meteor.call('getBicycles', "Mountainbike", function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles1",respJson.data.results);
        Session.set("filteredBicycles",respJson.data.results);
      }
    });

    // Get Ebay data
    Meteor.call('getEbay', ["Mountainbike"], function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("bicycles2", respJson.result);
        Session.set("filteredBicycles",respJson.result);
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

  load: function() {
    return Session.get("load");
  },

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

    var data1 = Session.get("bicycles1");
    var data2 = Session.get("bicycles2");

    var newArr = [];

    if(data1 && data1.length != 0) {
      newArr = newArr.concat(data1);
    }

    if(data2 && data2.length != 0) {
      newArr = newArr.concat(data2);
    }

    var o = newArr;
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);


    Session.set("filteredBicycles", o);

    return Session.get("filteredBicycles");
  }

});
