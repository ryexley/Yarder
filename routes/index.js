var dp = require('../data/mongoLogMessageProvider'); // dp === data provider

exports.options = function (req, res) {
	var resources = [
		{
			name : 'writeLog',
			url : '/log/write'
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
	res.render('logViewer', { title : 'Yarder log viewer' });
}

exports.logWrite = function (req, res) {
	res.send(dp.writeLogMessage(req.body));
}
