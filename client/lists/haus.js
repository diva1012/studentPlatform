Session.setDefault("slider-haus1", [20, 80]);

Template.Haus.rendered = function() {
    mySetColors("#e6474b", "#802527");



    // Get Mitfahrgelegenheit data.
    Meteor.call('getWGGesucht', "Berlin", 15, 400, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {
        Session.set("itemsListHaus",respJson.data.results);
        Session.set("filteredItemsListHaus",respJson.data.results);
      }
    });

    // Take the data from the groups defined in the backend
    Meteor.call('getGroupsDataHaus', function(err, data) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );

      } else {
        Session.set("groupsDataHaus", data);
      }
    });

    $('#toggle-type-haus')['bootstrapSwitch']();
    $('#toggle-type-haus').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-type-haus").style.display = "block";
      } else {
        document.getElementById("panel-type-haus").style.display = "none";
      }
    });

    $('#toggle-wohnung-haus')['bootstrapSwitch']();
    $('#toggle-wohnung-haus').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-wgzimmer-haus')['bootstrapSwitch']();
    $('#toggle-wgzimmer-haus').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-1zimmer-haus')['bootstrapSwitch']();
    $('#toggle-1zimmer-haus').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-haus-haus')['bootstrapSwitch']();
    $('#toggle-haus-haus').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-provider-haus')['bootstrapSwitch']();
    $('#toggle-provider-haus').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-provider-haus").style.display = "block";
      } else {
        document.getElementById("panel-provider-haus").style.display = "none";
      }
    });

    $('#toggle-haus-provider1')['bootstrapSwitch']();
    $('#toggle-haus-provider1').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-haus-provider2')['bootstrapSwitch']();
    $('#toggle-haus-provider2').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-haus-provider3')['bootstrapSwitch']();
    $('#toggle-haus-provider3').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    this.$("#slider-haus1").noUiSlider({
      start: Session.get("slider-haus1"),
      connect: true,
      range: {
        'min': 0,
        'max': 100
      },
      step: 1
    }).on('slide', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider_haus1', [Math.round(val[0]), Math.round(val[1])]);
    }).on('change', function (ev, val) {

    });

}

Template.Haus.events({

  "click #menu-button": function(event, template){

    var isMenuShown = Session.get("menuVisible");

    if (isMenuShown) {
        document.getElementById("right-menu").style.visibility='hidden';
        Session.set("menuVisible", false);
    } else {
      document.getElementById("right-menu").style.visibility='visible';
      Session.set("menuVisible", true);
    }
  }

});

Template.Haus.helpers({
  slider_haus1: function () {
      return Session.get("slider-bicycle1");
  },

  items: function() {

    var data1 = Session.get("filteredItemsListHaus");
    var fbData = Session.get("groupsDataHaus");

    var newArr = [];

    if (data1.length != 0) {
      newArr = newArr.concat(data1);
    }

    if (fbData.length != 0) {
      newArr = newArr.concat(fbData);
    }

    // Randomize the data
    for (var i = newArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }

    return newArr;
  }


});
