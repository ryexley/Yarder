(function (c, api) {

	c.LogMessageCollection = Backbone.Collection.extend({
		url : function () { return api.Resources.logMessages; }
	});

}(Yarder.Collections, Yarder.Api));
