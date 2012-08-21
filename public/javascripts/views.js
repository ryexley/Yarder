(function (v) {

	v.Menu = Backbone.View.extend({
		el : '#navbar',

		events : {
			'click #sample-message-form' : 'showSampleMessageForm'
		},

		showSampleMessageForm : function (e) {
			e.preventDefault();
			new v.SampleLogMessageForm(); // TODO: create a new log message model and pass it in here
		}
	});

	v.SampleLogMessageForm = Backbone.View.extend({
		className : 'modal',
		template : Handlebars.compile($('#sample-log-message-form-template').html() || ''),

		events : {
			'click #close' : 'close'
		},

		initialize : function () {
			_.bindAll(this);
			this.render();
		},

		render : function () {
			var content = this.template({});
			this.$el
				.html(content)
				.modal()
				.on('hidden', this.destroy);
		},

		close : function (e) {
			e.preventDefault();
			this.$el.modal('hide');
		},

		destroy : function () {
			this.$el.remove();
		}
	});

}(Yarder.Views));
