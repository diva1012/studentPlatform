Template.Home.events({
    'click #btn-user-data': function(e) {
/*
        Meteor.call('getUserData', function(err, data) {
             $('#result').text(JSON.stringify(data, undefined, 4));
         });

         */

         Meteor.call('getFriendsData', function(err, data) {
              $('#result').text(JSON.stringify(data, undefined, 4));
          });
    }
});

Template.Home.helpers({
  randomBackground: function(){

    var min = 1;
    var max = 3;

    var random = Math.floor(Math.random()*(max-min+1)+min);

    switch(random) {
      case 1:
          return "London"
      case 2:
          return "Copenhagen"
      case 3:
          return "Cologne"
    }
  }

});


Template.Home.rendered = function() {

  Session.set("lastRandom", 0);

  // Create a function that calls itself :)
  (function my_func() {
    // your code
  var min = 1;
  var max = 3;

  var random = Math.floor(Math.random()*(max-min+1)+min);

  while (random === Session.get(lastRandom)) {
    random = Math.floor(Math.random()*(max-min+1)+min);
  }


  var pic = "images/smaller_size/Copenhagen.jpg"

  if (random == 2) pic = "images/smaller_size/London.jpg"

  if (random == 3) pic = "images/smaller_size/Cologne.jpg";

  var lastRandom = Session.get("lastRandom");

  console.log(random + " " + lastRandom)
  if (lastRandom == random) {
    random = (random % 3) + 1;
    console.log("change" + random + " " + lastRandom)
  }


    $('#fullPage').css('background-image', 'url('+ pic + ')');

    Session.set("lastRandom", random);

    if( true ) {
        setTimeout( my_func, 4000 );
    }
  })();


}
