(function (c, api) {

	c.LogMessageCollection = Backbone.Collection.extend({
		url : function () { return api.Resources.logMessages; },

		initialize : function () {
			Yarder.on('yarder:new-message', this.addMessage, this);
		},

		parse : function (raw) {
			return _.map(raw, function (item) {
				return {
					id : item._id,
					application : item.application,
					clientTimestamp : moment(item.clientTimestamp).format('YYYY-MM-DD @ h:mm:ss a'),
					context : item.context,
					host : item.host,
					message : item.message,
					payload : item.payload,
					serverTimestamp : moment(item.serverTimestamp).format('YYYY-MM-DD @ h:mm:ss a'),
					severity : item.severity
				};
			});
		},

		addMessage : function (message) {
			this.add(message);
		}
	});

}(Yarder.Collections, Yarder.Api));
