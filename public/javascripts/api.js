(function (yarder, api) {

	api.initialize = function () {
		$.ajax({
			url : 'http://localhost:3000/', // TODO: this should be configurable
			type : 'OPTIONS'
		}).done(function (resources) {
			_.each(resources, function (resource) {
				api.Resources[resource.name] = resource.url;
			});

			yarder.trigger('yarder:api:initialized');
		});
	};

}(Yarder, Yarder.Api));
