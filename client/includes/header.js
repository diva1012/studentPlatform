$(document).ready(function(){/* jQuery toggle layout */
$('#btnToggle').click(function(){
  if ($(this).hasClass('on')) {
    $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
    $(this).removeClass('on');
  }
  else {
    $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
    $(this).addClass('on');
  }
});
});

Template.Header.events({
  "click .bicycle-button": function(event, template){
    Session.set("colorOne", "#05c272");
    Session.set("colorTwo", "#03663c");
  },

  "click .book-button": function(event, template){
    Session.set("colorOne", "#007b8e");
    Session.set("colorTwo", "#015865");
  },

  "click .car-button": function(event, template){
    Session.set("colorOne", "#d9d42c");
    Session.set("colorTwo", "#6f6c17");
  },

  "click .chair-button": function(event, template){
    Session.set("colorOne", "#8c0243");
    Session.set("colorTwo", "#5d022d");
  },

  "click .haus-button": function(event, template){
    Session.set("colorOne", "#e6474b");
    Session.set("colorTwo", "#802527");
  },

  "click .rating-button": function(event, template){
    Session.set("colorOne", "#e56526");
    Session.set("colorTwo", "#923f16");
  }
});
