(function (api, m, v) {

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
		template : Yarder.Templates.NewSampleMessageDialog,

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
				.fadeIn()
				.modal()
				.on('hidden', this.destroy);
		},

		save : function (e) {
			e.preventDefault();
			var view = this;
			this.model.set('payload', JSON.parse(this.model.get('payload')));
			$.ajax({
				url : api.Resources.writeLog,
				type : 'POST',
				contentType : 'application/json; charset=UTF-8',
				data : JSON.stringify(this.model)
			}).done(function (results) {
				view.$el.modal('hide');
			});
		},

		close : function (e) {
			e.preventDefault();
			this.$el.modal('hide');
		},

		destroy : function () {
			this.undelegateEvents();
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
				console.log(ex);
				payload = { 'content' : $(e.currentTarget).val() };
			}

			this.model.set('payload', payload);
		}
	});

	v.LogMessageListView = Backbone.View.extend({
		tagName :  'ul',
		attributes : {
			id : 'log-message-list'
		},

		initialize : function () {
			_.bindAll(this);
			this.collection.bind('reset', this.render);
			this.collection.fetch();
		},

		render : function () {
			var self = this;

			this.collection.each(function (logMessage) {
				var item = new v.LogMessageItemView({ model : logMessage });
				self.$el.append(item.render().el);
			});

			$('#viewer').html(this.$el);
		}
	});

	v.LogMessageItemView = Backbone.View.extend({
		className : 'log-message',
		template : Yarder.Templates.LogMessageItemView,

		initialize : function () {
			_.bindAll(this);
		},

		render : function () {
			var content = this.template(this.model.toJSON());
			this.$el.html(content);
			return this;
		}
	});

}(Yarder.Api, Yarder.Models, Yarder.Views));
