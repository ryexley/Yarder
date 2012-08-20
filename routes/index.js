var LogMessage = require('../model/logMessage.js');

exports.index = function (req, res) {
	res.render('index', { title: 'Yarder. A node.js logging platform' });
};

exports.logViewer = function (req, res) {
	res.render('logViewer', { title : 'Yarder log viewer' });
}

exports.logWrite = function (req, res) {
	var lm = new LogMessage({
		application : req.body.application,
		host : req.body.host,
		context : req.body.context,
		severity : req.body.severity,
		clientTimestamp : req.body.clientTimestamp,
		message : req.body.message,
		payload : req.body.payload
	});

	lm.save();

	res.send(lm);
}
