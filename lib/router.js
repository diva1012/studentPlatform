Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',

  /*waitOn: function() {
    return [
     Meteor.subscribe('notifications')
     ];
  }
  */
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('Home')

Router.route('/Bicycle')

Router.route('/Book')

Router.route('/Car')

Router.route('/Chair')

Router.route('/Haus')

Router.route('/Rating')
