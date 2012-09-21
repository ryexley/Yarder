(function (m, v, c, r) {

	r.Main = Backbone.Router.extend({
		routes : {
			'*path' : 'home'
		},

		home : function () {
			new v.Menu();
			new v.LogMessageListView({ collection : new c.LogMessageCollection() });
		}
	});

}(Yarder.Models, Yarder.Views, Yarder.Collections, Yarder.Routers));
