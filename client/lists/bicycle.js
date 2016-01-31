// slider starts at 20 and 80
Session.setDefault("slider-bicycle1", [50, 6000]);
Session.setDefault("slider2", [20, 80]);
Session.setDefault("slider3", [20, 80]);
Session.setDefault("load", true);

Session.set("isFirst", true);


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

        var bikesBadPrice = respJson.data.results;

        for (index = 0; index < bikesBadPrice.length; ++index) {

          var bike = bikesBadPrice[index];

          var price = bike.price
          var indexComma = price.indexOf(",");
          var priceGut = price.substring(0, indexComma);
          priceGut = priceGut.replace(".","");
          priceGut = priceGut;
          bikesBadPrice[index].price = priceGut;
        }

        Session.set("bicycles1", bikesBadPrice);
        Session.set("filteredBicycles1", bikesBadPrice);
      }
      Session.set("load", false);
    });

    // Get Ebay data
    Meteor.call('getEbay', bicycleType, function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {

        var bikesBadPrice = respJson.result;

        for (index = 0; index < bikesBadPrice.length; ++index) {

          var bike = bikesBadPrice[index];

          var price = String(bike.sellingStatus.convertedCurrentPrice.amount)
          // Remove . from thausands
          var priceGut = price//.replace(".", "");
          priceGut = priceGut;
          bikesBadPrice[index].sellingStatus.convertedCurrentPrice.amount = priceGut;
        }

        Session.set("bicycles2", bikesBadPrice);
        Session.set("filteredBicycles2", bikesBadPrice);
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

        var bikesBadPrice = respJson.data.results;

        for (index = 0; index < bikesBadPrice.length; ++index) {

          var bike = bikesBadPrice[index];

          var price = bike.price
          var indexComma = price.indexOf(",");
          var priceGut = price.substring(0, indexComma);
          priceGut = priceGut.replace(".", "");
          priceGut = priceGut;
          bikesBadPrice[index].price = priceGut;
        }

        Session.set("bicycles1",bikesBadPrice);
        Session.set("filteredBicycles",bikesBadPrice);
      }
    });

    // Get Ebay data
    Meteor.call('getEbay', "Mountainbike", function(err, respJson) {

      if(err) {
        console.log("error occured on receiving data from server. ", err );
      } else {

        var bikesBadPrice = respJson.result;

        for (index = 0; index < bikesBadPrice.length; ++index) {

          var bike = bikesBadPrice[index];

          var price = String(bike.sellingStatus.convertedCurrentPrice.amount)
          // Remove . from thausands
          var priceGut = price //.replace(".", "");
          priceGut = priceGut;
          bikesBadPrice[index].sellingStatus.convertedCurrentPrice.amount = priceGut;
        }

        Session.set("bicycles2", bikesBadPrice);
        Session.set("filteredBicycles2", bikesBadPrice);
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
        'max': 10000,
      },
      step: 1
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-bicycle1', [Math.round(val[0]), Math.round(val[1])]);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-bicycle1', [Math.round(val[0]), Math.round(val[1])]);


      var data1 = Session.get("bicycles1");
      var data2 = Session.get("bicycles2");

      var allBicycles = [];

      if(data1 && data1.length != 0) {
        allBicycles = allBicycles.concat(data1);
      }

      if(data2 && data2.length != 0) {
        allBicycles = allBicycles.concat(data2);
      }

      /*
      for (index = 0; index < allBicycles.length; ++index) {
        console.log(allBicycles[index]);
      }
      */

      var filteredBicycles = $.grep( allBicycles, function( n, i ) {

          var price = 0.0;

          if (n.price != undefined) {
            price = parseFloat(n.price);
          } else {
            price = parseFloat(n.sellingStatus.convertedCurrentPrice.amount);
          }

          return (price >= val[0] && price <= val[1]);
      });


      for(var j, x, i = filteredBicycles.length; i; j = Math.floor(Math.random() * i), x = filteredBicycles[--i], filteredBicycles[i] = filteredBicycles[j], filteredBicycles[j] = x);
      Session.set("filteredBicycles", filteredBicycles);
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

    if(Session.get("isFirst")) {

      var data1 = Session.get("filteredBicycles1");
      var data2 = Session.get("filteredBicycles2");

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

      Session.set("isFirst", false);

    }


    return Session.get("filteredBicycles");
  }

});
