
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'Yarder. A node.js logging platform' });
};

exports.logWrite = function(req, res) {
	res.send(req.body.message);
}
