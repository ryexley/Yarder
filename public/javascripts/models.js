(function (m) {
	
	m.LogMessage = Backbone.Model.extend({
		defaults : function () {
			return {
				'application' : 'Yarder',
				'host' : 'localhost',
				'context' : 'client',
				'severity' : 'debug',
				'clientTimestamp' : moment().format('M/D/YYYY h:mm:ss'),
				'message' : 'Test message'
			};
		}
	});

}(Yarder.Models));
