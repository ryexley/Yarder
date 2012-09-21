(function (w) {

	var templates = Yarder.Templates;

	w.Yarder = {
		Models : {},
		Views : {},
		Collections : {},
		Routers : {},
		Templates : templates,
		Api : {
			Resources : {}
		}
	};

	_.extend(w.Yarder, Backbone.Events);

}(this));
