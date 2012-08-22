(function (m, v) {

	v.Menu = Backbone.View.extend({
		el : '#navbar',

		events : {
			'click #sample-message-form' : 'showSampleMessageForm'
		},

		showSampleMessageForm : function (e) {
			e.preventDefault();
			new v.SampleLogMessageForm({ model : new m.LogMessage() });
		}
	});

	v.SampleLogMessageForm = Backbone.View.extend({
		className : 'modal',
		template : Handlebars.compile($('#sample-log-message-form-template').html() || ''),

		events : {
			'change #application' : 'applicationChanged',
			'change #host' : 'hostChanged',
			'change #context' : 'contextChanged',
			'change #severity' : 'severityChanged',
			'change #clientTimestamp' : 'clientTimestampChanged',
			'change #message' : 'messageChanged',
			'change #payload' : 'payloadChanged',
			'click #close' : 'close',
			'click #save' : 'save'
		},

		initialize : function () {
			_.bindAll(this);
			this.render();
		},

		render : function () {
			var content = this.template(this.model.toJSON());
			this.$el
				.html(content)
				.modal()
				.on('hidden', this.destroy);
		},

		save : function (e) {
			e.preventDefault();
			console.log(this.model.toJSON());
		},

		close : function (e) {
			e.preventDefault();
			this.$el.modal('hide');
		},

		destroy : function () {
			this.remove();
		},

		applicationChanged : function (e) {
			this.model.set('application', $(e.currentTarget).val());
		},

		hostChanged : function (e) {
			this.model.set('host', $(e.currentTarget).val());
		},

		contextChanged : function (e) {
			this.model.set('context', $(e.currentTarget).val());
		},

		severityChanged : function (e) {
			this.model.set('severity', $(e.currentTarget).val());
		},

		clientTimestampChanged : function (e) {
			this.model.set('clientTimestamp', $(e.currentTarget).val());
		},

		messageChanged : function (e) {
			this.model.set('message', $(e.currentTarget).val());
		},

		payloadChanged : function (e) {
			var payload;
			try {
				payload = JSON.parse($(e.currentTarget).val());
			} catch (ex) {
				payload = { 'content' : $(e.currentTarget).val() };
			}

			this.model.set('payload', payload);
		}
	});

}(Yarder.Models, Yarder.Views));
