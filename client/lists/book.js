Session.setDefault("slider-book1", [20, 80]);

Template.Book.rendered = function() {
    mySetColors("#007b8e", "#015865");

    this.$("#slider-book1").noUiSlider({
      start: Session.get("slider-book1"),
      connect: true,
      range: {
        'min': 0,
        'max': 100,
      },
      step: 1
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-book1', [Math.round(val[0]), Math.round(val[1])]);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider-book1', [Math.round(val[0]), Math.round(val[1])]);
    });

    $('#toggle-newused-book')['bootstrapSwitch']();
    $('#toggle-newused-book').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-newused-book").style.display = "block";
      } else {
        document.getElementById("panel-newused-book").style.display = "none";
      }
    });

    $('#toggle-new-book')['bootstrapSwitch']();
    $('#toggle-new-book').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-used-book')['bootstrapSwitch']();
    $('#toggle-used-book').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-provider-book')['bootstrapSwitch']();
    $('#toggle-provider-book').on('switch-change', function (event, data) {
      if (data.value){
        document.getElementById("panel-provider-book").style.display = "block";
      } else {
        document.getElementById("panel-provider-book").style.display = "none";
      }
    });

    $('#toggle-book1')['bootstrapSwitch']();
    $('#toggle-book1').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-book2')['bootstrapSwitch']();
    $('#toggle-book2').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-book3')['bootstrapSwitch']();
    $('#toggle-book3').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

    $('#toggle-everywhere-book')['bootstrapSwitch']();
    $('#toggle-everywhere-book').on('switch-change', function (event, data) {
      if (data.value){
      } else {
      }
    });

}

Template.Book.events({

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

Template.Book.helpers({

  slider_book1: function () {
      return Session.get("slider-book1");
  },

});
