(function (m, v, c, r) {

	r.Main = Backbone.Router.extend({
		routes : {
			'*path' : 'home'
		},

		home : function () {
			new v.Menu();
			console.log('Loading the default/home page');
		}
	});

}(Yarder.Models, Yarder.Views, Yarder.Collections, Yarder.Routers));