var LogMessage = require('../model/logMessage');

var writeLogMessage = function (input) {
	var lm = new LogMessage({
		application : input.application,
		host : input.host,
		context : input.context,
		severity : input.severity,
		clientTimestamp : input.clientTimestamp,
		message : input.message,
		payload : input.payload
	});

	lm.save();

	return lm;
}

module.exports.writeLogMessage = writeLogMessage;
