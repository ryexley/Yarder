(function (yarder, api) {

	api.initialize();
	yarder.on('yarder:api:initialized', function () {
		new Yarder.Routers.Main();
		Backbone.history.start({ pushState : true });
	});

}(Yarder, Yarder.Api));
