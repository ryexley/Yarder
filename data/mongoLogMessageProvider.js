var LogMessage = require('../model/logMessage');

var getDefaultLogMessages = function (done, fail) {
	LogMessage.find({}, function (err, results) {
		if (!err) {
			done(results);
		} else {
			fail(err);
		}
	});
}

var writeLogMessage = function (input, done, fail) {
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
