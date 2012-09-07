var dp = require('../data/mongoLogMessageProvider'); // dp === data provider

exports.options = function (req, res) {
	var resources = [
		{
			name : 'writeLog',
			url : '/log/write'
		},
		{
			name : 'logMessages',
			url : '/log/messages'
		},
		{
			name : 'viewLog',
			url : '/log/view'
		}
	];

	res.send(resources);
};

exports.index = function (req, res) {
	res.render('index', { title: 'Yarder. A node.js logging platform' });
};

exports.logViewer = function (req, res) {
	// dp.getDefaultLogMessages();
	res.render('logViewer', { title : 'Yarder log viewer' });
}

exports.logWrite = function (req, res) {
	res.send(dp.writeLogMessage(req.body));
}

exports.getDefaultLogMessages = function (req, res) {
	var success = function (results) {
		res.json(results);
	};

	var fail = function (err) {
		res.json({
			error : true,
			message : 'Error fetching default log messages',
			stack : err
		});
	};

	dp.getDefaultLogMessages(success, fail);
}
