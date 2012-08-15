var LogMessage = require('../model/logMessage.js');

exports.index = function(req, res) {
	res.render('index', { title: 'Yarder. A node.js logging platform' });
};

exports.logWrite = function(req, res) {
	var lm = new LogMessage({
		message : req.body.message
	});

	lm.save();

	res.send(lm);
}
