//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.pull-down').each(function() {
	$(this).css('margin-top', $(this).parent().height()-$(this).height())
});


Template.Itemhaus.events({
	"click .item-onclik": function(event, template){
	}
});


Template.Itemrating.events({
	"click .clickable-item": function(event, template){
		window.location.href = this.link;
	}
});
