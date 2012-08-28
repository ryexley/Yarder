var LogMessage = require('../model/logMessage');

var getDefaultLogMessages = function () {
	LogMessage.find({}, function (err, results) {
		if (!err) {
			console.log(results);
			return results;
		} else {
			console.log(err);
		}
	});
}

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

module.exports.getDefaultLogMessages = getDefaultLogMessages;
module.exports.writeLogMessage = writeLogMessage;
