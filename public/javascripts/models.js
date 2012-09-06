(function (m) {

	m.LogMessage = Backbone.Model.extend({
		defaults : function () {
			return {
				'application' : 'Yarder',
				'host' : 'localhost',
				'context' : 'client',
				'severity' : 'debug',
				'clientTimestamp' : moment().format('M/D/YYYY h:mm:ss'),
				'message' : 'Test message',
				'payload' : JSON.stringify({ broswerDetails : this.getBrowserDetails() })
			};
		},

		getBrowserDetails : function () {
			var n = window.navigator;
			return {
				vendor : n.vendor,
				appCodeName : n.appCodeName,
				browser : n.appName,
				version : n.appVersion,
				platform : n.platform,
				cookieEnabled : n.cookieEnabled,
				product : n.product,
				userAgent : n.userAgent
			};
		}
	});

}(Yarder.Models));
