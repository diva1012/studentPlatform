//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.pull-down').each(function() {
	$(this).css('margin-top', $(this).parent().height()-$(this).height())
});


Template.Itemhaus.events({
	"click .item-onclik": function(event, template){
	},

	// TODO Check if that work
	"click .clickable-item": function(event, template){
		window.location.href = this.link;
	}
});


Template.Itemrating.events({
	"click .clickable-item": function(event, template){
		window.location.href = this.link;
	}
});

Template.Item.helpers({
	getLogo: function(){
		if (this.provider === "bike24"){
			return "http://branchentest.ausgezeichnet.org/images/shop/online-fahrradshops-2013/bike24-logo.png";
		} else {
			return "http://www.fahrrad.de/info/content/themes/fahrrad.de/_/img/logo.png";
		}
	}
});

Template.Chair.events({
	"click .clickable-item": function(event, template){
		window.location.href = this.viewItemURL;
	}
});

Template.Item.events({
	"click .clickable-item": function(event, template){
		
		var link ="";
		if (this.link) {
			link = this.link;
		} else {
			link = this.viewItemURL;
		}

		window.location.href = link;
	}
});
