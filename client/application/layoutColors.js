Session.set("colorOne", "#05c272");
Session.set("colorTwo", "#03663c");

Session.set("menuVisible", false);

Template.registerHelper("colorOne", function () {
    return Session.get("colorOne");
    ;
});

Template.registerHelper("colorTwo", function () {
    return Session.get("colorTwo")
});
